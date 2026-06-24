# TASK-022 Identity Lock Review

## Task
Review the current LUMINA homepage identity and lock what must be preserved versus what may be polished in TASK-023 through TASK-028.

## Evidence Used
- `reports/visual_audit.md`
- `AI_HANDOFF.md`
- `docs/LUMINA_MODEL_AND_WORKER_POLICY.md`
- `docs/LUMINA_V2_CONSTITUTION.md`
- `docs/LUMINA_VISUAL_LANGUAGE.md`
- `docs/HOME_PAGE_BLUEPRINT.md`
- `.runtime-captures/lumina/TASK-021-TEST/desktop/desktop-above-fold.png`
- `.runtime-captures/lumina/TASK-021-TEST/desktop/desktop-fullpage.png`
- `.runtime-captures/lumina/TASK-021-TEST/mobile/mobile-above-fold.png`
- `.runtime-captures/lumina/TASK-021-TEST/mobile/mobile-fullpage.png`

## Executive Decision
Decision: `APPROVED_WITH_NOTES`

Current evidence is strong enough to lock the identity for final polish work. The homepage already holds the correct Warm Premium / Quiet Luxury / Human Documentary direction. The next sequence should refine typography, mobile balance, image ordering, spacing rhythm, and copy tone without altering the page architecture or re-opening hero concept work.

## What Must Be Preserved

### Hero Direction
- Preserve the single-image, photography-first hero.
- Preserve the current emotional subject matter: human ritual, family presence, and lived ceremony.
- Preserve the soft linen header, warm overlay, and restrained CTA treatment.
- Preserve the rule that hero concept redesign is closed unless explicitly approved.

### Warm Premium Tone
- Preserve the off-white / linen surface direction and warm charcoal text contrast.
- Preserve restraint in accents and avoid loud luxury signifiers.
- Preserve the feeling of value communicated through space, tone, and curation rather than sales language.

### Quiet Luxury Spacing
- Preserve the generous vertical breathing room between sections.
- Preserve the open editorial pacing that lets images and statements land slowly.
- Preserve the de-cardified feeling in story presentation; do not return to dense boxed UI.

### Human Documentary Image Language
- Preserve ceremony, relationship, gesture, pause, and aftermath as the primary image logic.
- Preserve people-first storytelling over technical-showcase imagery.
- Preserve the current refusal of “show everything” portfolio behavior.

### Narrative Structure
- Preserve the locked section order from the Home blueprint.
- Preserve `Stories` as the narrative anchor before the broader image moments.
- Preserve the “UI as invisible canvas” principle.

## What May Be Polished

### Thai Typography Direction
- Thai display typography may be tuned for calmer line breaks, line-height, and body readability.
- Small typography refinements are allowed if they improve elegance without changing the overall visual identity.
- Replacing or heavily re-characterizing the type system is not allowed under this sequence without GPT-5.5 review.

### Mobile Hero Balance
- Mobile hero headline size, line-height, block width, and vertical placement may be tuned.
- Overlay density may be softened slightly if needed for better breathing room.
- The hero image, concept, and overall composition logic should remain intact.

### Selected Stories Sequence
- The three-story row may be re-ordered or lightly retitled if the narrative arc becomes stronger.
- Story pacing should move from ritual/context into relationship and emotional quiet, not toward breadth or category coverage.

### Moments Between Rhythm
- Spacing, image placement, and editorial stagger may be adjusted for calmer flow.
- Empty/quiet space may be tuned so the collage feels intentional rather than sparse by accident.

### Copy Polish
- Copy may be tightened toward warmer, quieter, more human phrasing.
- Avoid adding marketing density, explanation, or transactional framing.

## Topic-by-Topic Review

### Hero Direction
Current status is strong. Desktop feels aligned with Warm Premium and Human Documentary goals. The hero image carries ritual, tenderness, and proximity without feeling staged. This must remain the emotional front door.

### Warm Premium Tone
The current site reads as warm and editorial rather than black-gold luxury. The best parts are the linen palette, low-contrast section separators, and refusal of flashy effects. Those are locked.

### Quiet Luxury Spacing
Desktop pacing is close to target. The page feels slow enough to read as intentional. The next tasks should polish rhythm, not compress it.

### Human Documentary Image Language
The strongest quality is that the site leads with people, touch, ritual, and quiet human observation. This is central and should not be diluted by broader portfolio logic.

### Thai Typography Direction
Desktop Thai typography is already emotionally appropriate, but mobile shows very large hero lines and tighter visual pressure. Typography is a valid polish target, but the decision boundary is subjective enough that final direction should escalate if multiple candidate treatments feel equally defensible.

### Mobile Hero Balance
This is the clearest active friction. The mobile hero still feels visually heavy, with headline size and image crop competing for the same space. This is a polish problem, not a redesign problem.

### Selected Stories Sequence
The current trio is directionally correct: ritual, family ceremony, and quiet portrait-based story. The main opportunity is sharper narrative progression, not more images.

### Moments Between Rhythm
The section concept fits the identity, but current spacing and collage balance are the least locked part of the page. This is a good target for task-scoped rhythm polish as long as it stays minimal and quiet.

### What Must Not Change
- No hero redesign
- No carousel, video, or heavy motion
- No dense portfolio wall
- No black-gold luxury styling
- No new backend/product scope
- No “show everything” image strategy
- No marketing-heavy copy voice

## Recommended Downstream Task Boundaries
- `TASK-023`: typography-only exploration within current structure; stop for GPT-5.5 if the decision becomes taste-driven rather than clearly legibility-driven.
- `TASK-024`: mobile hero balance only; preserve hero identity and image.
- `TASK-025`: image order logic only; stop if image selection requires subjective curation beyond obvious narrative fixes.
- `TASK-026`: spacing/rhythm only; no new sections, no busier layout.
- `TASK-027`: copy polish only; preserve quiet documentary voice.
- `TASK-028`: final validation and evidence closeout only.

## Escalation Triggers
- A typography choice materially changes brand character.
- Image sequencing requires choosing between equally strong narrative directions.
- Mobile hero balance starts to require structural hero redesign.
- Any polish request starts pushing toward a busier or more effect-driven homepage.

## Validation
```powershell
git status --short
```

## Scope Compliance
- Website code changed: No
- Config changed: No
- Runtime artifacts changed: No
- Forbidden files touched: No
