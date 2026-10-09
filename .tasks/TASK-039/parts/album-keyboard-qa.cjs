/* TASK-039 keyboard interaction QA: --baseline reproduces issue, default certifies candidate. */
const puppeteer = require("puppeteer");
const fs = require("node:fs");
const path = require("node:path");

(async () => {
  const baseline = process.argv.includes("--baseline");
  const target = process.env.LUMINA_QA_URL || "http://127.0.0.1:3012/";
  const outDir = path.resolve(".runtime-captures", "lumina", "TASK-039");
  fs.mkdirSync(outDir, { recursive: true });
  const browser = await puppeteer.launch({ headless: true });
  const results = [];
  try {
    for (const viewport of [
      {name:"desktop",width:1440,height:900,isMobile:false,hasTouch:false},
      {name:"mobile",width:390,height:844,isMobile:true,hasTouch:true},
    ]) {
      const page = await browser.newPage();
      const errors = [];
      page.on("pageerror", e => errors.push("pageerror: "+e.message));
      page.on("console", msg => { if (msg.type()==="error") errors.push("console: "+msg.text()); });
      page.on("requestfailed", req => errors.push("request: "+(req.failure()?.errorText || req.url())));
      await page.setViewport({...viewport,deviceScaleFactor:1});
      const response = await page.goto(target,{waitUntil:"networkidle2",timeout:60000});
      await page.waitForSelector(".mini-album-toggle");
      await page.focus(".mini-album-toggle");
      await page.keyboard.press("Enter");
      await page.waitForFunction(() => document.querySelector(".mini-album-toggle")?.getAttribute("aria-expanded") === "true");
      const openRail = await page.evaluate(() => ({
        tabIndex: document.querySelector(".mini-album-rail")?.tabIndex,
        itemCount: document.querySelectorAll(".mini-album-item").length,
      }));
      await page.screenshot({path:path.join(outDir,viewport.name+"-album-open.png"),fullPage:false});
      await page.keyboard.press("Escape");
      await new Promise(resolve=>setTimeout(resolve,80));
      const escapeCloses = await page.evaluate(() => document.querySelector(".mini-album-toggle")?.getAttribute("aria-expanded") === "false");
      let railReachedViaTab=false, railInViewport=false, movedWithArrow=false, closedFromRail=false, focusReturned=false, railNotFocusableWhenClosed=false;
      if(!baseline) {
        if (!escapeCloses) throw new Error("Escape did not close album");
        await page.focus(".mini-album-toggle");
        await page.keyboard.press("Enter");
        await page.waitForFunction(()=>document.querySelector(".mini-album-toggle")?.getAttribute("aria-expanded")==="true");
        await page.keyboard.press("Tab");
        railReachedViaTab=await page.evaluate(()=>document.activeElement?.classList.contains("mini-album-rail"));
        if (!railReachedViaTab) throw new Error("Tab did not reach horizontal photo rail");
        // Allow the page\'s existing smooth anchor/keyboard scroll to settle.
        await new Promise(resolve=>setTimeout(resolve,1100));
        railInViewport=await page.evaluate(()=>{
          const rect=document.querySelector(".mini-album-rail").getBoundingClientRect();
          return rect.top<innerHeight && rect.bottom>0;
        });
        await page.screenshot({path:path.join(outDir,viewport.name+"-album-focused.png"),fullPage:false});
        const before=await page.$eval(".mini-album-rail",el=>el.scrollLeft);
        await page.keyboard.press("ArrowRight");
        await new Promise(resolve=>setTimeout(resolve,420));
        const after=await page.$eval(".mini-album-rail",el=>el.scrollLeft);
        movedWithArrow=after>before+2;
        await page.keyboard.press("Escape");
        closedFromRail=await page.$eval(".mini-album-toggle",el=>el.getAttribute("aria-expanded")==="false");
        focusReturned=await page.evaluate(()=>document.activeElement?.classList.contains("mini-album-toggle"));
        railNotFocusableWhenClosed=await page.$eval(".mini-album-rail",el=>el.tabIndex===-1);
      }
      await page.emulateMediaFeatures([{name:"prefers-reduced-motion",value:"reduce"}]);
      const layout=await page.evaluate(()=>({
        overflowPx:Math.max(0,document.documentElement.scrollWidth-document.documentElement.clientWidth),
        brokenImages:[...document.images].filter(img=>img.complete&&img.naturalWidth===0).length,
        reducedMotionDuration:getComputedStyle(document.querySelector(".mini-album-panel")).transitionDuration,
        imageFocusTriggers:document.querySelectorAll(".story-image-trigger").length
      }));
      const baselineObserved=!escapeCloses&&openRail.tabIndex===-1;
      const pass=baseline ? baselineObserved : (
        escapeCloses && openRail.tabIndex===0 && railReachedViaTab && railInViewport && movedWithArrow && closedFromRail &&
        focusReturned && railNotFocusableWhenClosed && openRail.itemCount===5 &&
        layout.overflowPx===0&&layout.brokenImages===0&&layout.reducedMotionDuration==="0s"&&
        layout.imageFocusTriggers===3&&errors.length===0
      );
      results.push({viewport:viewport.name,httpStatus:response?.status(),baselineObserved,escapeCloses,openRail,
        railReachedViaTab,railInViewport,movedWithArrow,closedFromRail,focusReturned,railNotFocusableWhenClosed,...layout,errors,pass});
      await page.close();
    }
  } finally {await browser.close();}
  const pass=results.every(x=>x.pass);
  fs.writeFileSync(path.join(outDir,baseline?"baseline.json":"candidate.json"),JSON.stringify({pass,results},null,2)+"\n");
  console.log(JSON.stringify({pass,results},null,2));
  if(!pass)process.exitCode=1;
})().catch(err=>{console.error(err.stack||String(err));process.exitCode=1;});
