---
name: thai-language-and-ux-writing
description: Cross-cutting Thai communication competence for understanding Thai intent and producing natural, context-appropriate Thai across Owner, client, operational, documentation, and UI interactions in LUMINA Studio.
---

# Thai Language & UX Writing Skill

## Purpose

Use this skill whenever a task requires an agent to **understand Thai, interpret Thai intent, communicate with a Thai-speaking person, or produce/review Thai-facing content**.

This is not only a translation, spelling, or final-polish skill. It is the project's operational Thai communication layer: it helps the agent understand what a Thai speaker means in context before acting, then express the result naturally in Thai without changing facts, authority, lifecycle meaning, or business commitments.

It applies across Development Plane and Factory Execution Plane work, including:

- Owner instructions and conversational Thai;
- client questions, replies, clarifications, negotiation-adjacent messages, and service communication;
- Thai STT or noisy/incomplete Thai input;
- Thai-English code-switching in technical and freelance work;
- job summaries, approval packets, reports, checklists, and instructions;
- UI labels, navigation, buttons, status text, helper text, warnings, empty states, and error messages;
- internal procedures, documentation, and handoff notes intended for Thai readers.

It does not replace domain, safety, lifecycle, evidence, job, or approval rules. Language competence must never create authority that the agent does not already have.

## Activation Contract

Activate this skill **before semantic interpretation or drafting** when any of these is true:

- the input contains Thai that matters to the task;
- the agent must infer intent, tone, implied meaning, urgency, or social context from Thai;
- the agent must respond to a Thai-speaking Owner, client, operator, or public user;
- the expected output is Thai or mixed Thai-English for a Thai-speaking audience;
- input comes from Thai STT, noisy transcription, shorthand, slang, omitted subjects, or incomplete punctuation;
- a Thai-facing artifact must be drafted, edited, reviewed, or approved.

Do not wait until the final wording pass. If Thai is materially involved in understanding or communication, the skill is already active.

## Core Invariants

1. **Meaning before wording.** Understand the intended meaning and speech act before choosing Thai phrasing.
2. **Acknowledgement is not commitment.** A polite Thai response must not silently accept a price, deadline, scope change, revision policy, delivery promise, or other business commitment.
3. **Unknown stays unknown.** Missing facts must remain missing until resolved from the canonical owner; natural Thai must not fill gaps by guessing. A speaker saying they sent, paid, approved, uploaded, or completed something is a reported claim until the relevant source confirms it.
4. **Audience changes language, not truth.** Owner, client, operator, UI, and public communication may use different register, but must preserve the same authoritative meaning.
5. **Natural Thai is not literal translation.** Do not preserve English syntax merely because the source thought was expressed in English.
6. **Internal governance stays internal.** Do not expose terms such as Owner Gate, fail-closed, Work Order, lifecycle enum, or internal architecture to clients unless the exact term is genuinely client-relevant.
7. **Authority is resolved elsewhere.** This skill may detect commitment risk and require the applicable canonical authority check; it must not duplicate or redefine those authority rules.

## Operational Communication Frame

Before acting on material Thai communication, establish a compact working interpretation:

- **speaker / audience** — Owner, client, operator, public user, system/UI;
- **speech act** — question, request, instruction, confirmation, complaint, negotiation signal, urgency, status report, approval request;
- **known facts** — what is actually established by the authoritative source; distinguish verified facts from facts merely reported by the speaker;
- **unknowns / ambiguity** — what still needs evidence or clarification;
- **commitment risk** — whether the message touches price, deadline, scope, revisions, acceptance, delivery, spending, or other gated action;
- **register** — conversational, professional service, technical, formal, compact UI, or another contextually appropriate style.

This frame is a working aid, not a requirement to expose private reasoning or produce a visible checklist in normal responses.

## Communication Pipeline

Use this sequence when Thai affects meaning or external communication:

1. **Decode** — recover intended meaning, including omitted subjects, shorthand, code-switching, STT noise, and implied context.
2. **Ground** — separate known facts from assumptions and resolve the applicable canonical evidence/authority owner when material.
3. **Choose response strategy** — answer, clarify, acknowledge, defer commitment, summarize, ask for a missing scope driver, or escalate only when genuinely required.
4. **Express in Thai** — write naturally for the actual audience rather than translating an English sentence.
5. **Quality and commitment check** — confirm the wording is natural, faithful to evidence, and does not create an unauthorized promise.

## Register by Relationship and Surface

### Owner -> Agent / Agent -> Owner

Treat Owner Thai as high-context working communication. It may be short, spoken, STT-derived, omit subjects, mix English technical terms, or rely on current project context.

- infer the most likely operational meaning from available context;
- preserve genuine ambiguity when it can change the outcome;
- do not force the Owner's phrasing into formal Thai before understanding it;
- answer directly in natural working Thai;
- retain technical identifiers where they improve precision.

Example Owner instruction:

`Nexus ตอบลูกค้าหน่อย ลูกค้าทักมาถามรายละเอียด`

Interpret this as a task delegation, not as client text to answer verbatim. Resolve the actual client message and relevant job truth before drafting or sending anything.

### Client -> Agent / Agent -> Client

Use natural, polite Thai appropriate to a professional service interaction.

Client-facing Thai should:

- answer the client's actual intent, not merely the literal sentence;
- acknowledge urgency or concern without inventing certainty;
- avoid stiff bureaucratic language and internal system vocabulary;
- preserve unknowns and ask only for information needed to progress;
- distinguish a question about feasibility from authorization to promise;
- never create price, scope, deadline, revision, acceptance, or delivery commitments without the applicable authority.
- do not convert a client's reported action into a verified fact; for example, `ส่งบรีฟไปแล้ว` does not authorize `ได้รับบรีฟแล้ว` until the source is actually checked.
- when pricing authority or an approved price is missing, ask for the needed scope and say it will be checked/confirmed; do not promise a quote, package, discount, or final price merely to keep the conversation moving.

Example:

Client: `ถ้าส่งไฟล์ให้คืนนี้ พรุ่งนี้ช่วงบ่ายทันไหมครับ`

If workload/deadline authority is not established, a safe natural reply is:

`ส่งไฟล์มาได้เลยครับ เดี๋ยวขอเช็กปริมาณงานก่อน แล้วจะยืนยันเวลาส่งให้อีกทีครับ`

Do not answer `ได้ครับ พรุ่งนี้บ่ายทันแน่นอนครับ` merely because it sounds helpful.

### Internal operational reports

Prefer compact factual Thai. Technical identifiers may remain in English when they are evidence or machine values. Explain meaning in Thai when the reader needs it.

### Owner / operator UI

Use neutral, direct, professional Thai. Prefer short action-oriented wording.

Examples:

- `อนุมัติให้ส่งใบสมัคร` rather than `อนุมัติสมัคร (ต้องอนุมัติ)`;
- `ปิดงานนี้` rather than `ปิดเป็น blocked`;
- `ดำเนินการต่อ` rather than `เริ่ม/กลับมาทำงาน` when both meanings are not necessary;
- `ต้องได้รับการอนุมัติจากเจ้าของก่อนส่งใบสมัคร` rather than leaving an English explanatory sentence in a Thai screen.

## Unresolved Facts and Authority

When a client message touches a fact or commercial term that is not yet verified/authorized, the wording itself must preserve that unresolved state.

Prefer language such as:

- `เดี๋ยวขอเช็กใน LINE ก่อนครับ` when the client says something was sent but receipt has not been verified;
- `ขอเช็กรายละเอียดและเวลาที่ทำได้ก่อนครับ` when a requested deadline is not yet established;
- `ขอรายละเอียดขอบเขตงานก่อนครับ แล้วขอเช็กเรื่องราคาให้ก่อน` when no approved price/quote authority exists.

Avoid future-tense language that silently creates a new obligation, such as `จะทำใบเสนอราคาให้`, `จะยืนยันราคาให้`, `จะส่งให้ทัน`, or `ได้รับแล้ว` when the corresponding fact or authority has not been established. A later confirmation may be sent only after its canonical evidence/authority is actually resolved.

## Spoken Thai, STT, and Noisy Input

Thai speech and STT often omit punctuation, duplicate words, merge English terms into Thai pronunciation, or substitute phonetically similar words.

When input is noisy:

- recover intent from surrounding task context before correcting wording;
- distinguish a likely transcription error from a real domain term;
- preserve uncertainty when multiple interpretations would materially change the action;
- normalize only for understanding; do not scold or unnecessarily correct the speaker;
- keep authoritative identifiers, filenames, commands, model names, URLs, and exact evidence unchanged.

Example:

`เอพีไอคีย์`, `API key`, and an STT variant that clearly refers to the same technical concept may be interpreted as the same concept, but do not turn `APK` into `API key` without contextual evidence.

For more patterns, read `references/operational-thai-examples.md`.

## Thai-English Code-Switching

Keep English when it is clearer or is an authoritative technical identifier, product name, protocol, command, code value, or widely recognized technical term.

Rules:

- do not translate code identifiers, CLI commands, API field names, branch names, SHAs, URLs, or exact evidence strings;
- do not sprinkle English into ordinary Thai sentences when a natural Thai term is clearer;
- understand common Thai-workplace borrowings and code-switching by context rather than mechanically translating them;
- when an English technical term is important for precision, give Thai context around it rather than forcing an awkward transliteration;
- use the same term consistently within the same artifact.

Example:

`ระบบตรวจสอบผ่าน API แล้ว แต่ยังต้องรอการอนุมัติจากเจ้าของ`

is usually clearer than translating `API` or leaving the whole sentence in English.

## Core Thai Writing Standard

Write for meaning first, not word-for-word translation.

Thai output should be:

- natural to a fluent Thai reader;
- concise without becoming cryptic;
- explicit about the action or decision required;
- consistent in terminology across the same product or workflow;
- free of unnecessary developer jargon, raw enum names, and internal implementation details;
- appropriately formal for the audience without sounding ceremonial or machine-translated.

If a sentence sounds like translated English with Thai words substituted into the same structure, rewrite it from the intended Thai meaning.

## UI and Operational Writing

For UI labels, statuses, warnings, missing values, numbers/dates, and OJF terminology, load `references/ui-microcopy.md`.

Keep the core distinction here:

- conversational Thai optimizes human understanding and turn-taking;
- UI Thai optimizes scanability and action clarity;
- neither may alter authoritative meaning, evidence, or approval state.

## Preserve Authoritative Meaning

Language-layer changes must not silently reinterpret backend state, policy, evidence, job facts, or client commitments.

When communication or UI maps an authoritative value into Thai:

- preserve the underlying value unchanged;
- ensure the Thai wording has the same operational meaning;
- do not make a provisional, cautionary, blocked, or gated state sound final or safe;
- do not make an unavailable value appear known;
- do not weaken Owner approval language;
- do not make a client question sound like an accepted commercial term.

If exact machine values matter for audit/debugging, show them in a secondary diagnostic surface rather than in primary user copy.

## Rewrite Method

For awkward or weak Thai:

1. recover the intended meaning and actual audience;
2. identify the speech act or artifact role;
3. separate facts from assumptions and unresolved values;
4. rewrite naturally in Thai without preserving foreign syntax unnecessarily;
5. remove redundant words and internal jargon;
6. check terminology and register against nearby context;
7. confirm the rewrite does not change system semantics, evidence, or approval requirements.

## Quality Check

Before finalizing Thai communication or Thai-facing output, verify:

- The intended meaning was understood before wording was chosen.
- A fluent Thai reader can understand it on the first read.
- Register matches the actual relationship and surface.
- The required action is obvious where an action is required.
- Unknown or ambiguous facts were not silently invented.
- Acknowledgement did not become an unauthorized commitment.
- State and action wording are not confused.
- No unnecessary English sentence remains in an otherwise Thai interface.
- No raw internal enum/diagnostic/governance text leaks to clients without a reason.
- Repeated concepts use consistent Thai terminology.
- The text remains concise enough for its surface.
- Safety, lifecycle, evidence, business facts, and Owner-gate meanings are unchanged.

If any item fails, reinterpret or rewrite before considering the communication complete.

## Progressive References

Load only the reference needed by the active communication problem:

- `references/operational-thai-examples.md` — adversarial examples for client conversation, Owner delegation, noisy STT, code-switching, implicit intent, and commitment-safe Thai.
- `references/ui-microcopy.md` — detailed UI labels, statuses, warnings, missing values, formatting, and OJF terminology.

The reference is supporting guidance. This `SKILL.md` remains the canonical owner of the Thai communication standard.
