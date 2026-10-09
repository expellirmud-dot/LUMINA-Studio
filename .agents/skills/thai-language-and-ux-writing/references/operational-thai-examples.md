# Operational Thai Communication Examples

This file supports `../SKILL.md`. It provides examples and adversarial patterns; it does not redefine business authority, lifecycle rules, or client facts.

## 1. Owner Delegates a Client Reply

Owner:
> Nexus ตอบลูกค้าหน่อย ลูกค้าทักมาถามรายละเอียด

Wrong interpretation:
> สวัสดีครับ สนใจรายละเอียดด้านไหนครับ

Why it fails: the Owner was delegating a task, not speaking as the client.

Expected behavior:
- resolve the actual client message;
- resolve the relevant job/client truth;
- identify any commitment-sensitive topic;
- draft or send only within the existing authority boundary;
- reply to the Owner in working Thai, not customer-service Thai.

## 2. Deadline Feasibility Is Not a Promise

Client:
> ถ้าส่งไฟล์ให้คืนนี้ พรุ่งนี้บ่ายทันไหมครับ

Unsafe:
> ได้ครับ พรุ่งนี้บ่ายทันแน่นอนครับ

Safer when workload or authority is not yet established:
> ส่งไฟล์มาได้เลยครับ เดี๋ยวขอเช็กปริมาณงานก่อน แล้วจะยืนยันเวลาส่งให้อีกทีครับ

The second response acknowledges the request without manufacturing a deadline commitment.

## 3. Urgent Scope Creep

Client:
> ช่วยแก้เพิ่มอีก 2 จุดได้ไหมครับ ขอภายในเที่ยงนี้เลย

Do not automatically agree merely to sound helpful.

Interpret:
- additional scope requested;
- urgent deadline requested;
- both may require job evidence and authority resolution.

Natural safe response depends on canonical truth. If no authority exists yet, acknowledge and say the added points/time need checking before confirmation.

## 4. Indirect Price Question

Client:
> ปกติคิดยังไงครับ งบประมาณพันเดียวพอไหม อยากได้ครบ ๆ เลย

Interpret this as a price/scope feasibility question, not an accepted budget.

Do not:
- quote a price from memory;
- promise “ครบ ๆ” without defining scope;
- imply that 1,000 is accepted.

Ask for the missing scope drivers or resolve the job's canonical pricing/authority source before making a commercial commitment. If price authority is absent, say the details need to be checked before confirming price; do not promise a package or final quote.

## 5. Noisy Thai / STT

Input:
> คุนคะ บรีฟที่สงไปในไลนอะเหนยาง อยากได้ฟิลคลีนๆ มินิมอล เด่วสงเรฟให้อิกที

Likely meaning:
- asks whether the brief sent in LINE has been seen;
- wants a clean/minimal visual direction;
- more references will follow.

Do not normalize this into facts that were not verified. The client saying a brief was sent in LINE is not proof that the agent has actually read or received it; say you will check it unless the source has been verified. Likewise, do not claim the reference files have already arrived.

A natural response can acknowledge the current state and wait for the promised references if that matches actual evidence.

## 6. Technical Code-Switching

Owner:
> เช็ก branch นี้หน่อยว่า CI ผ่านไหม แล้วถ้าผ่าน merge ได้เลย

Preserve exact technical identifiers such as branch, CI, SHA, command names, and URLs when they matter.

Do not over-translate into unnatural Thai such as replacing every technical term with a formal Thai equivalent.

## 7. Ambiguous STT: API vs APK

Input:
> ตอนนี้ผมใส่เอพี... ไม่ใช่สิ เอพีไอคีย์

Use self-correction and technical context. The intended concept is likely `API key`.

But if the context only contains a bare transcription like `เอพีเค`, do not silently reinterpret it as `API key`; `APK` is a different valid technical term.

## 8. Complaint / Frustration

Client:
> รอมาสองวันแล้ว ยังไม่ได้เลยครับ

The linguistic task is not merely “make the reply polite.”

First determine:
- what delivery/status is actually established;
- whether a delay occurred;
- whether a new deadline can be promised;
- whether an apology or explanation is supported by facts.

Respond naturally and respectfully without inventing a cause or a recovery promise.

## 9. UI vs Conversation

UI:
> รออนุมัติ

Client conversation:
> เดี๋ยวขอเช็กให้ก่อนนะครับ แล้วจะยืนยันอีกที

These are not interchangeable. UI wording optimizes scanability; conversation wording must handle relationship, implication, and turn-taking.

## 10. Acceptance Bar for Weaker Models

A weaker model using this skill should improve on all of these dimensions, not only politeness:

1. identifies who is speaking to whom;
2. recovers intent from conversational/noisy Thai;
3. preserves unknowns;
4. detects price/scope/deadline/commitment risk;
5. uses natural Thai register for the audience;
6. keeps technical identifiers intact;
7. does not expose internal governance language to clients;
8. does not change authoritative meaning while rewriting.
