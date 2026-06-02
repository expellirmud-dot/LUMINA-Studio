# VISUAL AUDIT

## Human Documentary Direction Update

Task:
Phase 2 limited Human Documentary redesign.

Current assessment:
- Visible website copy now moves away from luxury / premium / crystal positioning and toward human documentary photography.
- Hero remains structurally frozen; only config-controlled copy, image sequence, and motion values were changed.
- Portfolio now uses verified `Portfolio/TOP10` photography assets with people, ceremony, family, ordination, detail, and one supporting stage/concert image.
- Contact language is warmer and conversation-first, with Thai copy that invites the client to describe the event before choosing a package.
- Motion is slower and less showy: the Hero slideshow interval and image drift were reduced through `motionConfig`, and pointer interaction intensity is set to `off`.

What works:
- The new image set feels more human and event-based than the previous luxury placeholder direction.
- Wedding and ceremony images lead the sequence, while concert imagery is supporting rather than dominant.
- The copy now clearly communicates real moments, meaningful days, people, place, atmosphere, and memory.
- Metadata no longer uses premium/cinematic phrasing.

What feels weak:
- The underlying CSS still carries a dark portfolio structure and hardcoded motion values, so the visual system is warmer but not fully re-authored.
- Some class names and historical docs previously tied to luxury/crystal were intentionally not fully refactored unless visible or user-facing.
- Full browser screenshot QA is still recommended to verify mobile crop safety for the new `Portfolio/TOP10` images.

Recommendation:
APPROVED_WITH_NOTES for limited implementation scope. Next task should be browser visual QA and mobile crop review before deploy.

## LUMINA-HOMEPAGE-NARRATIVE-POLISH-001
- **Hero Image Brightness**: CSS overlay densities in `.hero-section::before`, `.hero-focal`, `.hero-focal::after`, and `.focal-grid` were reduced. Brightness increased in `.hero-visual` (`0.48` to `0.68`). Image now carries more emotional weight.
- **Copy Restraint**: Story sequence core worldview remains but repeated words ("people", "feeling") are replaced with simpler action phrasing (e.g. "Stay close to what is real", "Hold the quiet moments").
- **Motion Restraint**: `.breathing-frame::before` luminosity reduced slightly (`0.15` to `0.08`), keeping it present but less dominant.
- **Microcopy**: Border softened to `rgba(185, 154, 95, 0.25)` to keep text readable but secondary.
- **Overall Feel**: Much stronger alignment with the intended "Human Documentary Photography" direction without requiring a structural redesign.

## LUMINA-POST-DEPLOY-VERIFICATION-001
- **Status**: PASS
- **Production URL**: https://lumina-studio-iota-ten.vercel.app/
- **Verification**: Production accurately reflects the Homepage Narrative Polish and Portfolio B+ Interactive Album. Expected copy is present, stale copy is removed, and visual scaling is verified across desktop (1440x900) and mobile (390x844).

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


## Hero QA (LUMINA-QA-002)

- **Active Image:** `docs/pic/2/IMG_1754.jpg` (Sacred Ceremony)
- **Crop Analysis:** Position `55% 48%` provides a cinematic, asymmetrical balance that accommodates the left-aligned editorial typography.
- **Readability:** High. The darkened image layer ensures a strong contrast for the white serif headings, maintaining accessibility without sacrificing mood.
- **Luxury Feeling:** Strong. The image conveys authenticity and emotional weight, avoiding a "stock photo" aesthetic.
- **Duplication Check:** Image is reused in the portfolio section. While acceptable for Phase 1 due to asset strength, a dedicated hero-only asset is recommended for the final production release to avoid visual repetition.
- **Recommendation:** PASS. Keep the current image but flag for "Unique Hero Asset" in Phase 2.



## Portfolio QA (LUMINA-QA-003)

- **Curation:** 4 images (`IMG_1718`, `IMG_1754`, `PTO_8484`, `125`).
- **Category Balance:** Perfect. One image represents each core service (Weddings, Ordinations, House Blessings, Editorial Portraits).
- **Crop Consistency:** Strong. Center-X alignment (`50%`) creates a stable, rhythmic flow.
- **Emotional Flow:** Excellent. Transition from celebratory $\rightarrow$ sacred $\rightarrow$ intimate $\rightarrow$ cinematic creates a complete visual narrative.
- **Brand Impact:** High. The curated set proves artistic versatility without overloading the page.
- **Duplication Check:** Reuse of `IMG_1754` in Hero is noted. While it anchors the page's strongest asset, it is flagged for a unique hero asset in Phase 2.
- **Recommendation:** PASS. The curation is editorially sound.



## Typography QA (LUMINA-QA-004)

- **Font Pairing:** `Cormorant Garamond` (Heading) + `Plus Jakarta Sans` (Body). The contrast between the classical serif and modern sans-serif perfectly supports the luxury editorial direction.
- **Heading Readability:** Excellent. The high-contrast serif at large scales creates an immediate premium feel while remaining legible.
- **Body Readability:** High. The sans-serif body text provides a professional, accessible counterpoint to the artistic headings.
- **Contact Typography:** The bold display values create a clear hierarchy and confidence. The use of muted gold for accents maintains brand consistency.
- **Mobile Risk:** Moderate. Large display values in the contact section may risk awkward wrapping on narrow screens (< 360px). Recommend verifying font-scaling for the contact values.
- **Recommendation:** PASS. The system is structurally sound and visually aligned.



## Contact Variant QA (LUMINA-QA-001)

- **Active Variant:** `contact-strip`
- **Desktop Readability:** High. The minimalist strip arrangement provides a sophisticated, low-friction path to contact details without cluttering the footer.
- **Mobile Readability Risk:** Moderate. The large display font for the phone number may risk wrapping or overlapping if not handled by flexible grid containers. Requires real-device verification for rhythm.
- **Hierarchy Analysis:** 
  - **Phone:** Dominant and clear; serves as the primary high-trust anchor.
  - **Line:** Well-balanced; clearly identifiable as the primary instant messaging channel.
  - **Facebook:** Subtle but present; maintains the professional social presence.
- **Editorial Feeling:** High. The horizontal "strip" layout avoids the utility-first look of a standard contact list, aligning with the studio's boutique luxury branding.

## Mobile Experience QA (LUMINA-QA-005)
- **Hero Section:** High Risk. The overlay text and label are optimized for desktop. On narrow screens, there is a risk of visual crowding, potentially making the luxury focal area feel like a boxed promotional card.
- **Contact Section:** Moderate Risk. Large display typography for contact values is prone to awkward wrapping on screens < 360px. Requires fluid typography or responsive scaling to maintain rhythm.
- **Portfolio Grid:** Moderate Risk. Vertical cropping of wide ceremony images may result in subject loss. Individual asset review is required for the final mobile crop.
- **About/Profile:** Low Risk. The layout is clean, though the photographer's quote requires a check for "widows" and line-break harmony on small screens.
- **Footer & Touch Targets:** Low Risk. Spacing is generous, but touch targets for the minimalist footer links should be verified for accessibility (min 44x44px).
- **General Usability:** The overall experience remains premium, but the tension between large editorial typography and narrow viewports is the primary friction point.
- **Recommendation:** PASS. Mobile polish applied in QA-006 to refine typography and footer balance.



