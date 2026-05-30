# Frontend Visual Design Skill

Use this skill when designing or implementing frontend interfaces, landing pages, dashboards, components, motion systems, or immersive visual sections.

## Core Priority

Frontend quality comes first:
- Clear UX
- Strong visual direction
- Production-ready code
- Accessibility
- Performance
- Maintainability
- No over-engineering

Do not add 3D, WebGL, shaders, canvas, or heavy animation unless the user explicitly asks for immersive visuals or the project clearly benefits from it.

## Design Direction

Before coding, define:
- Purpose
- Audience
- Tone
- Visual style
- Typography
- Color system
- Motion level
- Layout composition
- Performance constraints

Avoid generic AI-looking UI:
- no default purple gradients
- no generic card grids unless appropriate
- no unnecessary glassmorphism
- no random animation
- no decorative effects that fight the content

## Frontend Implementation

Prefer simple, robust frontend techniques first:
1. HTML / CSS / React components
2. CSS variables
3. CSS transitions and keyframes
4. Lightweight interaction
5. Framer Motion only if already available or justified
6. Three.js only when explicitly required

## Three.js Mode

Use Three.js only for:
- immersive hero sections
- product/scene visualization
- creative visual experiments
- 3D backgrounds where 2D CSS is insufficient
- explicit user request for WebGL / shader / 3D

Do not use Three.js for normal landing pages, dashboards, forms, admin panels, or content pages.

## Three.js Geometry

When creating 3D geometry:
- reuse geometry and materials
- use BufferGeometry for custom shapes
- use InstancedMesh for many repeated objects
- control segment counts
- dispose unused geometry
- keep geometry purposeful, not decorative noise

## Three.js Animation

When animating 3D scenes:
- use requestAnimationFrame carefully
- use delta time
- pause or reduce updates when offscreen
- respect prefers-reduced-motion
- avoid constant motion that distracts from content
- keep text readable and stable

## Three.js Shaders

Use shaders only when standard materials are not enough.

Shader rules:
- start simple
- expose values as uniforms
- avoid unnecessary branching
- move expensive calculations out of fragment shaders where possible
- debug UV, normals, and positions visually
- keep shader effects aligned with the design direction

## Three.js Postprocessing

Use postprocessing sparingly.

Allowed when justified:
- subtle bloom
- vignette
- depth of field
- color grading
- anti-aliasing
- cinematic finishing

Avoid:
- excessive bloom
- glitch effects unless stylistically required
- heavy multi-pass pipelines on normal websites
- effects that reduce readability

## Decision Rule

Before adding any advanced visual technique, answer:

1. Does it improve the user's goal?
2. Does it fit the brand/style?
3. Can CSS achieve it more simply?
4. Will it hurt performance?
5. Does it make maintenance harder?

If the answer is unclear, choose the simpler frontend solution.

## Output Expectations

When implementing:
- explain the chosen visual direction briefly
- keep code scoped
- avoid adding dependencies unless necessary
- preserve existing project structure
- implement the smallest complete change
- include reduced-motion handling for animation-heavy work
- validate responsive behavior