# TASK-048 — Sequential Interactive Enhancements

- **Status**: TECHNICAL_QA_PASS / PENDING_OWNER_ART_DIRECTION
- **Start**: 2026-10-11T18:47:00+07:00
- **Completed**: 2026-10-11T19:02:00+07:00
- **Baseline**: `main@172684a03edf0f91b1e90a67bbc39e1d7a8e083b`
- **Branch**: `feat/task048-narrative-enhancements`
- **Execution Mode**: Step-by-step sequential implementation, validation, commit and push per subtask.

---

## Owner Goals & Priorities

1. **Narrative Story Drawer**: ทดลองหนึ่งเรื่องก่อน (Story #1: RITUAL)
2. **Experience Crossfade**: ปรับ Component เดิม ไม่สร้างใหม่
3. **Quiet Inquiry Starter**: ตรวจสอบรูปแบบบัญชี LINE ก่อน
4. **Tactile Print Fan**: พักไว้ เพราะระบบเดิมรองรับส่วนสำคัญแล้ว

---

## Scope & Allowed Files

### Subtask 1: Narrative Story Drawer (One Story Trial)
- `src/config/portfolio.ts`: เพิ่ม `frames` (array of narrative stills with observational captions) ให้เฉพาะเรื่องแรก (`RITUAL: What is carried forward`).
- `src/components/StoryImageFocus.tsx`: รองรับการเปิดอ่านลำดับภาพเรื่องเล่าหลายเฟรมเมื่อมี `frames` โดยยังคงความเข้ากันได้แบบ 100% กับเรื่องอื่นที่มีเพียงภาพเดียว.
- `app/globals.css`: ปรับแต่งสไตล์ของ story dialog เมื่อเป็น narrative sequence (breathing room, editorial scrolling, readable captions, dark linen surface).
- `app/page.tsx`: ส่งผ่านข้อมูล narrative frames ให้ StoryImageFocus.

### Subtask 2: Experience Crossfade (Existing Component Tuning)
- `src/components/ExperienceSequence.tsx`: ปรับแต่งการเปลี่ยนภาพจากสลับทันที ให้เป็น soft atmospheric crossfade. ห้ามสร้างไฟล์ component ใหม่.
- `app/globals.css`: เพิ่ม transition tokens ที่จำเป็น.

### Subtask 3: Quiet Inquiry Starter (LINE Format Verification & Preset Starter)
- `src/config/contact.ts`: ตรวจสอบรูปแบบบัญชี LINE (`LINE OA` vs `Personal LINE`) และเตรียม pre-filled inquiry text ที่เหมาะสม.
- `src/components/` หรือ `app/page.tsx`: ปรับให้ลูกค้าสามารถเลือกความสนใจสั้น ๆ เพื่อเปิด LINE ด้วยข้อความตั้งต้นที่สุภาพ.

### Subtask 4: Tactile Print Fan
- **SHELVED / POSTPONED**: คงการทำงานของ `MiniAlbum` เดิมไว้ ไม่ต้องแก้ไข.

---

## Validation & Acceptance Criteria
- `npm run lint` PASS
- `npm run build` PASS
- Responsive checks (Desktop 1440px, Tablet 768px, Mobile 390px)
- Accessibility: Keyboard focus trap, Escape to close, focus restore, screen-reader labels
- No broken images, no horizontal scroll overflow
- Hero remains untouched and FROZEN
- Commit and push each subtask independently upon validation.

## PR #22 Scope Repair (2026-10-11)
- [x] Verify fresh main/head, clean worktree, Kernel and task scope
- [x] Preserve out-of-scope ExpandableGallery and motion experiment at `origin/experiment/task048-gallery-shelved-20261011@364b3cf`
- [x] Restore current PR to exactly three approved enhancements; keep MiniAlbum untouched
- [x] Replace unsupported clock timestamps with truthful thematic Story labels
- [x] Make inquiry chips keyboard-operable ordinary buttons (`role=group`, `aria-pressed`) and report clipboard success/failure
- [x] Lint/build PASS and protected-copy 5/5 PASS
- [x] Chrome 390/768/1440 interactions 42/42 PASS
- [x] Canonical screenshot capture QA and visual review against the new candidate
- [x] Commit/push exact tested candidate and verify GitHub Draft PR (Vercel redeployment pending)
- [ ] Owner subjective Art Direction acceptance before production merge
