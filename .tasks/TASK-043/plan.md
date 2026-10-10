# TASK-043 — Implementation Plan

Evidence: TASK-042 exact repo/runtime copy audit; locked docs/LUMINA_V2_CONSTITUTION.md requires five nav labels Home Stories About Experience Contact. Current src/config/navigation.ts uses four links Stories Approach About Inquire, with separate Inquire CTA. app/page.tsx renders items then separate nav CTA to #final-cta. Mobile shows logo + nav CTA due existing CSS.

Minimum source change (ONE file): set navigationConfig.items to exactly Home(#hero), Stories(#selected-stories), About(#behind-the-lens), Experience(#experience); set ctaText to Contact, preserving existing CTA href '#final-cta' rendered by app/page.tsx. Thus exactly five user-facing navigation labels, no duplicate Inquire, one Contact CTA remains reachable on mobile.

No changes to Hero, general site copy, app/page, layouts, responsiveness or dependencies. The separate nav CTA counts as Contact in the rendered five-link navigation. Maintain source-config ownership; do not add redundant config.

Risk: full desktop width or mobile CTA font and wrapping. Test no horizontal overflow at 390x844 and 1440x900, five anchors and active href, keyboard reachability, static site output, lint/build. Stop if abnormal. Rollback: revert only navigationConfig values.

TASK-042 audit is documentation-only and will be closed in same bounded release record. No Animation from saved 21st.dev links in this task.
