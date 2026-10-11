# TASK-048 Implementation Plan

## Subtask 1: Narrative Story Drawer (ทดลองหนึ่งเรื่องก่อน)
- [x] 1. ตรวจสอบ asset รูปภาพใน `public/images/portfolio/lumina-harvest-v1/`
- [x] 2. ขยาย schema ใน `src/config/portfolio.ts` ให้ `selectedStoriesConfig[0]` มี `frames`:
  - Frame 1: `000001_opening_detail_IMG_0629.webp` (Opening Detail)
  - Frame 2: `000013_ceremony_IMG_1676.webp` (Ceremony Blessing — Cover)
  - Frame 3: `000035_family_emotion_PTO_9008.webp` (Family Warmth)
- [x] 3. อัปเกรด `src/components/StoryImageFocus.tsx`:
  - รับ prop `frames?: StoryFrame[]`
  - หากไม่มี `frames` -> ทำงานเป็น Single Image Focus Dialog เหมือนเดิม 100%
  - หากมี `frames` -> แสดงเป็น Narrative Story Drawer พร้อม indicator เล็ก ๆ `+ 3 เรื่องราวย่อย` / `3 Stills` และแสดงภาพทั้ง 3 พร้อมคำบรรยายอย่างสงบ
  - รองรับ Escape key, close button, focus trap, tab navigation
- [x] 4. ปรับ CSS ใน `app/globals.css` สำหรับ `.story-narrative-container`, `.story-narrative-frame`, `.story-narrative-caption`
- [x] 5. เชื่อมต่อใน `app/page.tsx`
- [x] 6. ทดสอบ build & lint (`npm run lint`, `npm run build`) -> PASS
- [x] 7. ใช้ CLI Worker ตรวจสอบความถูกต้องและคุณภาพ -> PASS (Gemini CLI)
- [x] 8. Commit และ Push สำหรับ Subtask 1

---

## Subtask 2: Experience Crossfade (ปรับ Component เดิม ไม่สร้างใหม่)
- [x] 1. ตรวจสอบ `src/components/ExperienceSequence.tsx`
- [x] 2. ปรับ logic การแสดงผลภาพให้เรนเดอร์ภาพแบบ dual-layer (current & next) หรือ opacity crossfade 0.5s แทนการเปลี่ยน `src` ทันที
- [x] 3. รักษา accessibility และ mobile stack behavior
- [x] 4. ทดสอบ build & lint -> PASS
- [x] 5. Commit และ Push สำหรับ Subtask 2

---

## Subtask 3: Quiet Inquiry Starter (ตรวจสอบรูปแบบบัญชี LINE ก่อน)
- [x] 1. ตรวจสอบ `src/config/contact.ts` และ URL ปัจจุบันของ LINE -> ยืนยันเป็น Personal LINE (`ti/p/~expellirmud`)
- [x] 2. ตรวจสอบข้อจำกัดของ Personal LINE URL scheme -> ออกแบบให้มี Conversation Starter Note และปุ่มคัดลอกข้อความทักทาย พร้อมรองรับ LINE OA ในอนาคต
- [x] 3. เพิ่มตัวเลือก Chip สั้น ๆ 3 ตัวเลือกในส่วน Final CTA ผ่าน `QuietInquiryStarter`
- [x] 4. ทดสอบ build & lint -> PASS
- [x] 5. Commit และ Push สำหรับ Subtask 3

---

## Subtask 4: Tactile Print Fan
- [x] พักไว้ (Shelved) ตามคำสั่งของ Owner

## Follow-up PR #22 Review — 2026-10-11
Existing work is limited to Narrative Story Drawer (one Story trial), Experience Crossfade in current component, and Quiet Inquiry Starter. Last Gallery commit `364b3cf` exceeded the shelved experiment boundary and changed locked homepage sequence, so retain on separate archive branch, revert only that specific commit from PR tip. Do not remove the archive branch. Replace unsupported times with thematic labels, correct accessible inquiry-selection semantics/clipboard feedback, run current-candidate lint/build, browser interaction and the canonical screenshots, then update report and GitHub Draft PR. No production changes or extra Story system.
