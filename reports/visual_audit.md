# VISUAL AUDIT

## Phase

Phase 1.6 — Design Audit and Visual Config System

## What Works

- The page has a clear luxury editorial direction: charcoal base, warm white typography, muted gold accents, and restrained motion.
- The hero now has real photographic atmosphere while preserving the Future Crystal Experience as a future-facing concept.
- The profile portrait gives the studio a human anchor and fits the cinematic black-and-white direction.
- The portfolio cards feel more credible with real images and restrained hover treatment.
- The contact section has stronger hierarchy than a basic business-card list.

## What Feels Weaker After Adding Real Images

- Real imagery makes inconsistent crop decisions more visible, especially between wide ceremony images and vertical card frames.
- The hero and portfolio reuse `IMG_1754.jpg`, which is acceptable for Phase 1 but should be revisited before production if more hero-worthy options are available.
- Some portfolio images need final art-direction review for face placement and subject priority on mobile crops.

## What Should Be Removed

- The word "Placeholder" in the portfolio heading should be removed because the portfolio section now uses real images.
- Future implementation should avoid keeping image decisions embedded directly in `app/page.tsx`; the page should consume config.

## Must Improve Before Production

- Run mobile and desktop visual QA for hero contrast, portfolio crop accuracy, and contact readability.
- Export optimized production image formats once final portfolio choices are locked.
- Record and verify the production URL after deploy.
- Decide whether the hero should remain tied to a portfolio card image or use a distinct hero-only image.

## Contact Critique

- The contact section currently reads premium and direct, but it is visually large; mobile checks should confirm phone and Facebook labels do not dominate the CTA.
- A config-based contact variant is useful because contact presentation will likely need A/B visual testing without changing core page structure.

## Hero Critique

- The hero image layer solves the empty placeholder feel and keeps the Future Crystal concept present.
- The crop is cinematic, but the label overlay must be checked on small screens so it does not feel like a boxed promo card.
- The hero should stay dark and subtle; brighter treatment would push it toward a normal wedding template.

## Portfolio Critique

- The four selected cards establish real portfolio credibility without becoming a gallery system.
- The image overlay and muted saturation help maintain a consistent luxury tone across mixed source imagery.
- Crops should be reviewed individually before production, especially for group and ceremony images.

## Typography Critique

- The Cormorant Garamond and Plus Jakarta Sans pairing supports the editorial direction.
- Large serif headings work well, but long service/contact labels need mobile checks to avoid crowding.
- Typography tokens should remain centralized so future scale adjustments are deliberate.

## Mobile Risk

- Hero focal area height and overlay text may feel heavy on small screens.
- Portfolio cards use vertical crops from wide source images, so subject loss is possible.
- Contact values use large display type and need real-device checks for wrapping and rhythm.

