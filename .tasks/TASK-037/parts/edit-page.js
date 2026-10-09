const fs = require("fs");
const path = "app/page.tsx";
let s = fs.readFileSync(path, "utf8").replace(/\r\n/g, "\n");

s = s.replace(
  'import { MiniAlbum } from "../src/components/MiniAlbum";',
  'import { MiniAlbum } from "../src/components/MiniAlbum";\nimport { ExperienceSequence } from "../src/components/ExperienceSequence";'
);

s = s.replace(
  'import { selectedStoriesConfig, momentImagesConfig } from "../src/config/portfolio";',
  'import { selectedStoriesConfig, momentImagesConfig, experienceImagesConfig } from "../src/config/portfolio";'
);

const oldHeading = `          <div className="section-heading">
            <p className="section-label reveal">{contentConfig.selectedStories.label}</p>
            <h2
              className={\`reveal \${typographyConfig.tokens.portfolioHeadline}\`}
              style={{ animationDelay: "90ms" }}
            >
              {contentConfig.selectedStories.title}
            </h2>
            <p className="section-intro reveal" style={{ animationDelay: "140ms" }}>
              {contentConfig.selectedStories.body}
            </p>
          </div>`;

const newHeading = `          <div className="section-heading story-threshold">
            <p className="section-label reveal">{contentConfig.selectedStories.label}</p>
            <h2
              className={\`story-editorial-heading reveal \${typographyConfig.tokens.portfolioHeadline}\`}
              style={{ animationDelay: "90ms" }}
              aria-label={contentConfig.selectedStories.title.replace(/\\n/g, " ")}
            >
              <span>{contentConfig.selectedStories.titleParts.lead}</span>
              <span
                className="story-inline-media story-inline-media-a"
                aria-hidden="true"
                data-future-media-slot="micro-cinematic-story-a"
              >
                <Image
                  src={selectedStoriesConfig[0].image.src}
                  alt=""
                  fill
                  sizes="8rem"
                  style={{ objectPosition: selectedStoriesConfig[0].image.position }}
                />
              </span>
              <span>{contentConfig.selectedStories.titleParts.middle}</span>
              <span
                className="story-inline-media story-inline-media-b"
                aria-hidden="true"
                data-future-media-slot="micro-cinematic-story-b"
              >
                <Image
                  src={selectedStoriesConfig[1].image.src}
                  alt=""
                  fill
                  sizes="7rem"
                  style={{ objectPosition: selectedStoriesConfig[1].image.position }}
                />
              </span>
              <span>{contentConfig.selectedStories.titleParts.tail}</span>
            </h2>
            <p className="section-intro reveal" style={{ animationDelay: "140ms" }}>
              {contentConfig.selectedStories.body}
            </p>
          </div>`;

if (!s.includes(oldHeading)) throw new Error("Selected Stories heading block not found after newline normalization");
s = s.replace(oldHeading, newHeading);

const oldExperience = `          <ol className="experience-list">
            {servicesConfig.map((item, index) => (
              <li
                key={item}
                className="reveal"
                style={{ animationDelay: \`\${120 + index * 80}ms\` }}
              >
                <span>{String(index + 1).padStart(2, "0")}</span>
                {item}
              </li>
            ))}
          </ol>`;

const newExperience = `          <ExperienceSequence
            items={servicesConfig}
            images={experienceImagesConfig}
          />`;

if (!s.includes(oldExperience)) throw new Error("Experience list block not found after newline normalization");
s = s.replace(oldExperience, newExperience);

fs.writeFileSync(path, s, "utf8");
console.log("page.tsx updated");
