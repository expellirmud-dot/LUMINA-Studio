# QA Checklist: TASK-XXX

## Visual Quality Checks
- [ ] **Linen Palette**: Background is `#F4F1EB` or surface `#FBF9F5`, text `#2D2A26`. No pure black/gold.
- [ ] **Breathing Room**: Layout is airy and clean; margins are spacious.
- [ ] **Contrast**: Copy remains legible on background gradients.
- [ ] **Image Crop**: Curation focuses on human moments, faces are properly cropped and positioned.

## Technical Checks
- [ ] **Build Check**: `npm run build` PASS.
- [ ] **Lint Check**: `npm run lint` PASS.
- [ ] **No Prohibited Words**: User-facing copy contains no: *Portfolio*, *Investment*, *Package*, *Price*, *Gallery*.
- [ ] **No Forbidden Features**: No carousels, background videos, optical sweeps, WebGL, or Three.js.
