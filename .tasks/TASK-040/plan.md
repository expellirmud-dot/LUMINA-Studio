# TASK-040 — Execution Plan

- [x] 19:58 ICT: Resume Continuity and Kernel, verify Git branch/HEAD/dirty/worktrees, AGENTS.md and CONTEXT_INDEX read order
- [x] Classify historical 1,004 modified/deleted tracked + 722 untracked against origin/main and inspect Fastwork/UI/Serena differences
- [x] Record recovery snapshot of 1,726 entries and verify 744 copied files via SHA-256
- [x] Preserve old Git tree in dedicated recovery ref and stash; verify clean state before update
- [x] Fast-forward local main from eba90db to origin/main 0408de5; verify status clean
- [x] Verify previous TASK-035 worktree equivalence; retain SHA-256 verified AGENTS.md before safe cleanup
- [x] Isolated candidate: npm ci, npm lint, npm build/TS/static routes, npm audit production PASS
- [ ] Submit task records PR, verify merge, sync root again, and close Kernel TASK-040
- [ ] Retire clean disposable TASK-040 worktree after canonical task merge

Validation/stop: current Git main clean at exact remote SHA, backup files present, stash preserved, no Owner files overwritten; prohibit replay of stash without a new scoped review. Timeline 2026-10-09 19:58:46 to 20:15:36+07 (core local work).
