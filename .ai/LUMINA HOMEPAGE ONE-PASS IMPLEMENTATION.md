READ-FIRST — LUMINA HOMEPAGE ONE-PASS IMPLEMENTATION

Owner authorization:

This is the approved implementation specification for the current LUMINA Studio homepage.

Proceed through implementation, validation, repair, commit, and push without pausing for routine approval.

Do not stop merely to report that editing or validation is complete.
When all applicable acceptance gates pass, commit and push automatically.

Repository:

D:\lumina-studio

Target branch:

main

Canonical project skill root:

D:\lumina-studio\.agent\skills

==================================================
0. REQUIRED STARTUP
==================================================

Read and follow:

- AGENTS.md
- PROJECT_RULES.md, if present
- AI_HANDOFF.md
- docs/CONTEXT_INDEX.md
- docs/LUMINA_MODEL_AND_WORKER_POLICY.md
- docs/LUMINA_V2_CONSTITUTION.md
- docs/LUMINA_VISUAL_LANGUAGE.md
- docs/HOME_PAGE_BLUEPRINT.md
- docs/SKILL_SOURCE_REGISTRY.md
- .agent/skills/LUMINA_STARTUP/SKILL.md, if present
- .agent/skills/LUMINA_ART_DIRECTION/SKILL.md
- .agent/skills/impeccable/SKILL.md
- D:\ai-tools\gridgeist\gridgeist\SKILL.md

Do not use:

- impeccable-project-workflow
- /impeccable init
- PRODUCT.md generation
- DESIGN.md generation
- skill installation
- skill copying
- skill mirror synchronization

Do not activate Serena again.

Use:

- existing CodeGraph index
- direct repository search
- direct source reads
- TypeScript imports and references
- Git diff evidence

Direction authority:

1. Owner-approved specification in this order
2. Current LUMINA governance
3. LUMINA_ART_DIRECTION
4. Gridgeist only for structure, hierarchy, responsive composition,
   image-led pacing, and rendered review
5. Impeccable only for typography, spacing, contrast, accessibility,
   refinement, and anti-pattern review

Neither Gridgeist nor Impeccable may redefine the approved visual thesis.

Approved thesis:

Warm Premium
Quiet Luxury
Human Documentary
Natural
Emotional
Timeless
Story-first
People before technique
Photography as the visual lead
UI as an invisible canvas

Avoid:

- black-and-gold luxury language
- wedding-template styling
- generic photography template composition
- excessive effects
- generic SaaS components
- repeated rounded cards
- decorative gradients
- loud transitions
- redesigning the whole website

==================================================
1. BASELINE GATE
==================================================

Run:

git status --short
git branch --show-current
git rev-parse HEAD
git rev-parse origin/main

Expected:

- branch = main
- working tree clean
- local HEAD aligned with the intended baseline

If `.serena/project.yml` or `.codegraph/.gitignore` appears modified again
solely because of a tool-generated migration already documented in this session:

- inspect the exact diff
- restore only that confirmed tool-generated file to HEAD
- do not include it in the task diff

Stop only if:

- an unexplained application/source change exists
- Owner-authored work would be overwritten
- remote history has moved in a way that makes a safe update uncertain
- secrets or sensitive files may be committed

Do not stop for optional-tool limitations.

==================================================
2. TASK GOAL
==================================================

Produce a coherent, usable, approved temporary homepage version that can remain live while later refinements are planned.

This task must update, as one coordinated system:

A. Homepage copy
B. Homepage image mapping
C. Typography hierarchy
D. Section spacing and pacing
E. Responsive image behavior
F. Accessible alt text
G. Metadata and language consistency, where actively required
H. Build and rendered verification
I. Commit and push

Do not redesign the information architecture unless a small adjustment is required to support the approved content.

Preserve existing routes, contact actions, core responsive behavior, and working functionality.

==================================================
3. ACTIVE IMPLEMENTATION SURFACE
==================================================

Inspect active consumers before editing.

Expected relevant files:

- app/page.tsx
- app/layout.tsx
- app/globals.css
- src/config/content.ts
- src/config/images.ts
- src/config/portfolio.ts
- src/config/typography.ts
- src/config/navigation.ts
- src/config/services.ts
- src/config/contact.ts
- src/config/visual.ts

Potentially inactive:

- portfolioConfig
- heroSequence
- motionConfig

Do not modify inactive configuration merely to make files look tidy.

Do not perform dead-code cleanup in this task unless an inactive symbol directly blocks implementation or validation.

==================================================
4. LANGUAGE SYSTEM
==================================================

The homepage should be English-primary.

Use Thai only as a deliberate personal signature in the Behind The Lens section.

Do not alternate Thai and English randomly across sections.

Keep:

- English for navigation, section labels, headings, body copy, CTAs, and footer
- Thai for the approved personal quotation only

Do not translate the Thai quotation into English beside it unless the existing composition requires an English explanatory paragraph.

==================================================
5. APPROVED NAVIGATION COPY
==================================================

Use the following visible navigation labels where the current navigation structure supports them:

Brand:
LUMINA

Links:

Stories
Approach
About
Inquire

Map these labels onto the current active anchors and section IDs.
Do not create broken links or new routes.

If the current page has fewer navigation destinations,
use only labels that map to real active sections.

Do not add a Portfolio or Services label merely because an old config uses it.

==================================================
6. APPROVED HERO
==================================================

Hero eyebrow:

HUMAN DOCUMENTARY PHOTOGRAPHY

Hero headline:

Stories live in the moments
we almost miss.

Hero supporting text:

Photographs of people, relationships, and rituals—
observed with care and held with honesty.

Hero CTA:

View the stories

Hero image:

/images/portfolio/lumina-harvest-v1/000035_family_emotion_PTO_9008.webp

Image source details:

- landscape
- family relationship/emotion
- current approved role: Hero
- avoid crop that removes the emotional interaction

Hero alt text:

A warm family embrace during a meaningful celebration

Determine the safest object-position from the actual image.
Preserve the central emotional interaction at desktop and mobile.

Do not implement a slideshow.

Do not reactivate HeroSlideshow, rotating hero copy, or unused hero sequence behavior.

Hero behavior:

- photography remains dominant
- text must remain stable and legible
- motion remains restrained
- no heavy overlay
- no tech-demo effect
- no WebGL, Canvas, Three.js, or new dependency

==================================================
7. WHAT WE NOTICE
==================================================

Section label:

WHAT WE NOTICE

Headline:

The quiet things
are often what remain.

Body:

A hand reaching out.
A familiar look across the room.
The pause before everything begins.

These are not always the moments people plan for,
but they are often the ones that stay.

Preserve the intended line rhythm without forcing awkward mobile wrapping.

The section should feel reflective, not oversized or theatrical.

==================================================
8. SELECTED STORIES
==================================================

Section label:

SELECTED STORIES

Headline:

People, rituals,
and the spaces between.

Supporting text:

A small selection of stories shaped by connection,
tradition, and the feeling of being there.

Use exactly three active story cards.

--------------------------------------------------
STORY 1
--------------------------------------------------

Eyebrow or category:

RITUAL

Title:

What is carried forward

Description:

Tradition, gestures, and the people who give them meaning.

Image:

/images/portfolio/lumina-harvest-v1/000013_ceremony_IMG_1676.webp

Alt:

An elder offering a blessing during a family ceremony

Role:

Ritual / blessing / tradition

--------------------------------------------------
STORY 2
--------------------------------------------------

Eyebrow or category:

RELATIONSHIP

Title:

What holds us close

Description:

The affection that appears without being asked for.

Image:

/images/portfolio/lumina-harvest-v1/000035_family_emotion_PTO_9008.webp

Alt:

A family sharing an affectionate embrace during a celebration

Role:

Family / closeness / warmth

--------------------------------------------------
STORY 3
--------------------------------------------------

Eyebrow or category:

PRESENCE

Title:

What it felt like

Description:

Portraits and passing moments that belong only to that day.

Image:

/images/portfolio/lumina-harvest-v1/000018_hero_IMG_2036.webp

Alt:

A bride smiling naturally while holding a cream bouquet

Role:

Portrait / presence / quiet beauty

This third image is portrait-oriented.

Ensure its card layout does not crop away:

- face
- torso
- hands
- bouquet
- dark green ribbon

Do not use it as the main Hero.

The filename containing `hero` does not determine its active role.

==================================================
9. MOMENTS BETWEEN
==================================================

Section label:

MOMENTS BETWEEN

Headline:

Not everything meaningful
happens at the centre.

Body:

Sometimes the story is in the waiting,
the movement, the small detail,
or the person standing just outside the frame.

Use five images with varied semantic roles.

Approved image order may be adjusted only when necessary for visual rhythm,
but retain all five unless one exact path is missing or fails to render.

--------------------------------------------------
MOMENT 1 — EMOTIONAL / RITUAL ANCHOR
--------------------------------------------------

Image:

/images/portfolio/phra-louis-v1/PTO-296.jpg

Alt:

A quiet emotional gesture shared during an ordination ceremony

Orientation:

portrait

Do not use as full-width Hero.

--------------------------------------------------
MOMENT 2 — DETAIL
--------------------------------------------------

Image:

/images/portfolio/2569-03-09/A M/PTO_5711.jpg

Alt:

A carefully prepared ceremonial detail in soft warm light

Orientation:

landscape

--------------------------------------------------
MOMENT 3 — HUMAN ENERGY
--------------------------------------------------

Image:

/images/portfolio/2569-03-09/A M/PTO_5779.jpg

Alt:

A smiling participant surrounded by family during a lively ceremony

Orientation:

portrait

--------------------------------------------------
MOMENT 4 — PORTRAIT ANCHOR
--------------------------------------------------

Image:

/images/portfolio/lumina-harvest-v1/000018_hero_IMG_2036.webp

Alt:

A relaxed bridal portrait with a cream bouquet and dark green ribbon

Orientation:

portrait

Preserve the full visual identity of the image as much as the composition allows.

--------------------------------------------------
MOMENT 5 — MOVEMENT / PROCESSION
--------------------------------------------------

Image:

/images/portfolio/2569-03-09/A M/PTO_5723.jpg

Alt:

Family members walking together with a ceremonial offering

Orientation:

landscape

--------------------------------------------------
MOMENTS RULES
--------------------------------------------------

The section must not read as five equal cards.

Use one clear anchor and varied supporting scales where the existing layout allows.

Avoid making every image the same ratio, size, or visual weight.

Do not introduce a new gallery dependency.

If an approved image path is missing:

- preserve the current working image in that slot
- complete all other approved copy and image changes
- report the deferred replacement
- do not stop the entire task

==================================================
10. OPTIONAL BRAND BRIDGE
==================================================

Add this short bridge only if it fits the existing section flow without creating a new heavy section:

Different places.
Different kinds of days.
The same attention to people.

Preferred placement:

between Moments Between and Behind The Lens

It should function as a quiet transition, not a large hero statement.

If adding it requires substantial new component structure,
omit it and report that it was deferred.

==================================================
11. BEHIND THE LENS
==================================================

Section label:

BEHIND THE LENS

Headline:

Photographs begin
with trust.

English body:

I work quietly, stay close to what is unfolding,
and make space for people to remain themselves.

The aim is not to make every moment look perfect.
It is to recognise what already matters.

Approved Thai signature:

ผมไม่ได้อยากให้ทุกคนดูเหมือนนางแบบ

แค่อยากให้ภาพยังเป็นตัวเขา
และยังรู้สึกได้ว่า
วันนั้นมีความหมายอย่างไร

This Thai quotation is the emotional center of the section.

Keep it clearly separated from the English body.

Do not treat it as a decorative tagline.

Do not add an English translation directly below it.

CTA:

More about the approach

If no real destination exists for this CTA,
either map it to the active Approach section
or omit the CTA rather than creating a dead link.

Profile image:

Keep the current real photographer portrait temporarily:

docs/Profile Pic.jpg

Do not replace it with another person.

Do not fabricate a new portrait.

Crop and presentation should prioritize:

- face visibility
- approachability
- human trust
- less visual distance

Do not over-darken the image.

==================================================
12. KIND WORDS
==================================================

Section label:

KIND WORDS

Headline:

How it felt
to be photographed.

Introductory text:

Not only how the photographs looked,
but how the day was allowed to feel.

Do not invent testimonials.

Preserve only real existing testimonial content.

If current testimonials are placeholders or unverifiable,
keep their existing text unchanged and update only the section framing.

==================================================
13. THE EXPERIENCE
==================================================

Section label:

THE EXPERIENCE

Headline:

A calm presence.
A thoughtful process.

Body:

From the first conversation to the final photographs,
the process is kept clear, personal, and unhurried.

Approved steps:

01 — We begin with what matters to you

02 — The day is observed, not directed

03 — Photographs are selected with intention

04 — Your story is delivered with care

Supporting line:

Guidance is always available.
Pressure is not.

Map these into the current services/experience structure.

Do not turn them into oversized SaaS feature cards.

Keep the composition editorial and restrained.

==================================================
14. FINAL CTA
==================================================

Section label:

BEGIN A CONVERSATION

Headline:

Tell me what matters
to you.

Body:

You do not need to know exactly what the photographs should look like.

Begin with the people, the day,
and what you hope to remember.

Primary CTA:

Start a conversation

Secondary text or link:

View contact details

Map actions only to existing valid contact destinations.

Use the existing contact configuration:

- phone
- LINE
- Facebook

Do not invent email, booking forms, or unavailable channels.

Reduce excessive empty space around this section.

The final CTA should feel quiet and inviting,
not sparse because of oversized padding.

==================================================
15. FOOTER
==================================================

Preferred footer brand statement:

Photographs of what happened—
and what it meant.

Supporting identity line, when useful:

Human documentary photography
for people, relationships, and rituals.

Preserve real contact details and active URLs.

Do not expose raw internal paths.

==================================================
16. METADATA AND DOCUMENT LANGUAGE
==================================================

Inspect app/layout.tsx.

Update active metadata only when the existing metadata no longer reflects the approved homepage.

Preferred metadata direction:

Title:

LUMINA Studio — Human Documentary Photography

Description:

Human documentary photography of people, relationships, and rituals, observed with care and held with honesty.

Set the document language consistently with an English-primary homepage.

Do not remove Thai font support because the Behind The Lens quotation uses Thai.

Do not add SEO claims that are not supported.

==================================================
17. TYPOGRAPHY SYSTEM
==================================================

Preserve the current font families unless direct implementation evidence requires a narrow correction:

- Cormorant Garamond
- Inter
- IBM Plex Sans Thai Looped

Role system:

Cormorant Garamond:

- brand lockup where already appropriate
- selected English editorial headlines
- expressive, restrained use only

Inter:

- navigation
- labels
- CTA
- body
- utility text

IBM Plex Sans Thai Looped:

- approved Thai quotation
- Thai text only

Do not apply serif typography to all text.

Do not make every section headline enormous.

Adjust hierarchy so:

- Hero remains dominant
- section headlines are clearly subordinate
- Behind The Lens and Experience headings reduce approximately 15–20% if currently oversized
- Thai quotation has generous but controlled leading
- mobile line breaks remain natural
- labels remain quiet and legible

Avoid:

- excessive letter spacing in body copy
- very thin text on image backgrounds
- cramped Thai line-height
- display type in long body paragraphs

==================================================
18. SPACING AND PAGE RHYTHM
==================================================

The page currently risks excessive vertical separation and an overlong final CTA gap.

Refine spacing as one coherent rhythm.

Guidance:

- desktop section vertical padding generally around 7–8rem,
  adjusted from actual content rather than forced uniformly
- mobile spacing must be recomposed, not desktop values simply reduced
- avoid identical spacing for every section
- allow image-led sections to breathe
- keep reflective copy sections tighter than gallery sections
- reduce final CTA emptiness
- avoid large blank areas with no narrative purpose

Do not compress the page into a dense commercial landing page.

Do not create decorative separators merely to fill space.

==================================================
19. RESPONSIVE IMAGE BEHAVIOR
==================================================

Inspect every active image container and Next/Image usage.

For each approved image:

- use appropriate `sizes`
- preserve source aspect ratio
- select object-position from the real image
- protect faces, hands, gestures, bouquet, and relationship cues
- prevent accidental extreme crop on mobile
- prevent layout shift
- preserve loading/performance conventions already used by the project

Do not use `contain` for full-bleed editorial compositions unless letterboxing is genuinely intended.

Use `cover` with carefully chosen object-position where appropriate.

For portrait images in landscape containers:

- reconsider the container ratio or composition
- do not simply center-crop the subject
- use the existing editorial grid to give portrait images suitable vertical space

==================================================
20. ACCESSIBILITY
==================================================

Ensure:

- meaningful alt text for content images
- decorative imagery uses the project’s correct decorative treatment
- visible keyboard focus remains intact
- links and CTAs have real destinations
- heading order remains logical
- text contrast remains readable over images
- reduced-motion behavior is preserved
- no new interaction depends on hover only
- Thai text remains semantically readable

Do not claim accessibility compliance beyond what was actually checked.

==================================================
21. IMPLEMENTATION DISCIPLINE
==================================================

Prefer config-driven updates where the active architecture supports them.

Modify components or CSS only when necessary for:

- active copy rendering
- composition
- responsive behavior
- crop safety
- typography
- spacing
- accessibility

Do not:

- rewrite the application
- migrate architecture
- add dependencies
- reactivate dead components
- clean unrelated code
- rename broad config systems
- alter contact details
- alter source photographs
- delete candidate images
- modify skill files
- modify governance docs

==================================================
22. RESILIENT EXECUTION
==================================================

Work as independent seams:

SEAM A — Copy
SEAM B — Image mapping
SEAM C — Typography
SEAM D — Spacing and responsive composition
SEAM E — Accessibility
SEAM F — Validation
SEAM G — Commit and push

Failure in one independent seam must not cancel unrelated work.

Examples:

If one image is missing or fails to render:

- preserve the previous valid image for that slot
- complete the approved copy
- complete typography and spacing
- complete all other image replacements
- report the unresolved image

If browser verification fails:

- complete build
- complete lint
- complete typecheck
- inspect responsive source rules
- do not claim rendered visual verification
- continue when implementation remains safely verifiable

If CodeGraph produces uncertain data:

- confirm with direct source search
- do not re-index if it modifies tracked files

If an optional skill conflicts:

- follow LUMINA governance
- continue without that optional guidance

==================================================
23. VALIDATION
==================================================

Run, at minimum:

npm run build
npm run lint
node_modules/.bin/tsc --noEmit

Then attempt rendered verification:

node tools/capture-lumina-evidence.mjs

Preferred rendered widths:

- desktop around 1440px
- laptop around 1280px
- tablet around 768px
- mobile around 390px

Inspect:

- Hero crop and readability
- Hero CTA
- Selected Stories portrait/landscape balance
- Moments image rhythm
- Thai quotation wrapping
- navigation
- section spacing
- final CTA spacing
- footer
- overflow
- focus visibility
- image loading errors
- console errors
- reduced motion where testable

If the existing capture script fails:

Try an already-installed Playwright or Puppeteer route without adding dependencies.

If all browser routes fail:

- report rendered verification unavailable
- do not claim visual pass
- rely on build, lint, typecheck, source inspection
- continue unless there is evidence of unsafe rendering

==================================================
24. REPAIR LOOP
==================================================

If validation fails because of this task:

1. identify the responsible seam
2. repair only that seam
3. rerun the focused validation
4. rerun final required gates
5. continue to commit and push when green

Do not stop after a repairable error.

Do not broaden into unrelated baseline cleanup.

If lint or typecheck exposes an unrelated pre-existing issue:

- prove it is baseline and outside the task diff
- report it separately
- do not silently fix unrelated files
- continue only if the task’s own changes remain valid

==================================================
25. FINAL DIFF REVIEW
==================================================

Before staging:

Run:

git status --short
git diff --check
git diff --stat
git diff -- app/page.tsx
git diff -- app/layout.tsx
git diff -- app/globals.css
git diff -- src/config/content.ts
git diff -- src/config/images.ts
git diff -- src/config/portfolio.ts
git diff -- src/config/typography.ts
git diff -- src/config/navigation.ts
git diff -- src/config/services.ts
git diff -- src/config/contact.ts
git diff -- src/config/visual.ts

Confirm:

- only approved implementation files changed
- no skill files changed
- no governance files changed
- no source photos changed
- no runtime evidence staged
- no `.serena/project.yml`
- no `.codegraph/.gitignore`
- no dead config edited without an active consumer
- copy matches the approved specification
- image paths are valid
- no placeholder testimonial was invented
- no dead links were introduced

==================================================
26. COMMIT AND PUSH
==================================================

When the homepage is internally consistent and applicable gates pass:

Stage explicit changed paths only.

Never use:

git add .
git clean
git reset --hard

Use explicit `git add` commands for only the files actually changed.

Suggested commit message:

feat: refine LUMINA homepage story and imagery

Then:

- commit
- fetch remote
- safely reconcile if origin/main moved
- do not overwrite remote work
- push to origin main
- verify remote HEAD equals the pushed commit SHA

Do not stop to request routine commit or push approval.

Do not report “ready to commit.”
Commit and push when gates pass.

==================================================
27. FINAL REPORT
==================================================

Report only after push succeeds, or after a genuine stop condition that cannot be safely repaired.

Use this structure:

Implementation status:
- COMPLETE / PARTIAL / BLOCKED

Completed seams:
- Copy
- Image mapping
- Typography
- Spacing/responsive
- Accessibility
- Validation

Deferred non-blocking items:
- exact item
- reason
- current safe fallback

Files changed:
- explicit list

Validation:
- build
- lint
- typecheck
- browser capture
- observed viewports
- console/runtime findings
- git diff --check

Image map:
- Hero
- Selected Stories
- Moments Between
- Behind The Lens

Git:
- branch
- commit SHA
- push result
- remote HEAD verification

Known limitations:
- rendered items not observed
- temporary profile image
- later polish opportunities

Do not repeat the full preflight.
Do not provide unsupported success claims.