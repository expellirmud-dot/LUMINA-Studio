# Thai UI Microcopy and Operational Writing Reference

This file supports `../SKILL.md`. It owns detailed Thai UI/microcopy examples under the broader Thai communication standard; it does not change backend meaning, lifecycle, evidence, or authority.

## Buttons

Buttons should normally use a verb or clear action phrase.

Good:
- `ดูรายละเอียด`
- `อนุมัติให้ส่ง`
- `วางแผนใหม่`
- `ปิดงาน`
- `ดำเนินการต่อ`

Avoid labels that expose implementation state unless the technical state itself is the intended user action.

## Status labels

Statuses describe the current condition, not an instruction.

Good:
- `รออนุมัติ`
- `รอตรวจงานที่ได้รับ`
- `ต้องตัดสินใจ`
- `รอชำระเงิน`

Keep action labels and state labels distinct.

## Helper and warning text

State:
1. what is true now;
2. why it matters, when necessary;
3. what the user should do next.

Do not repeat the same state in several forms unless each occurrence has a distinct purpose.

## Unknown / missing values

Choose wording by meaning:
- `ไม่ระบุ` — source did not specify a value;
- `ยังไม่มีข้อมูล` — value may become available later;
- `ไม่เกี่ยวข้อง` — field does not apply;
- hide the field when it has no decision value.

Do not expose diagnostic strings such as `UNKNOWN=...` in normal user-facing UI.

## Numbers, Dates, Money, and Spacing

- prefer Arabic numerals (`1`, `25`, `2026`) for operational data;
- include currency explicitly (`50 USD`, `1,200 บาท`);
- use an unambiguous date format appropriate to the surface;
- preserve backend/source values when they are evidence;
- do not insert spaces between ordinary Thai words;
- use spaces where they improve separation around Latin text, numbers, units, or distinct clauses;
- avoid excessive punctuation.

## OJF Terminology Discipline

Keep recurring lifecycle terms stable. Examples:
- สถานะงาน — current lifecycle condition;
- สิ่งที่ต้องทำต่อ — next operator action;
- คำแนะนำของระบบ — system recommendation;
- การอนุมัติจากเจ้าของ — explicit Owner gate;
- กำหนดส่ง — deadline supplied by the source or system;
- ค่าจ้าง — compensation;
- แหล่งที่มา — source/platform/provenance.

Do not vary terms merely for stylistic variety when the underlying lifecycle concept is the same.

## UI Quality Bar

Before finalizing:
- action and state labels are not confused;
- missing data is described accurately;
- internal enums/debug strings do not leak without a reason;
- repeated concepts use consistent terminology;
- Thai remains concise enough for mobile/compact surfaces;
- translated labels preserve the exact operational meaning and do not weaken gates.
