# JobWatcher2

Polls the public career-site feeds of semiconductor, AI-hardware and EDA companies (plus the SimplifyJobs internship
list) three times a day and keeps the internship postings that match hardware keywords (computer architecture,
in/near-memory computing, accelerators, VLSI, verification, EDA, ...).

- `watcher/watch.js` + `watcher/lib/`: the watcher (Node 22, no dependencies). `node watcher/watch.js --dry --company NVIDIA` tries one company without writing anything.
- `watcher/keywords.json`: include/exclude keywords and scoring.
- `targets/companies.csv`: the companies and how each one's job board is read.
- `jobs/digests/*.md`: a readable digest per run. `jobs/inbox/*.jsonl`: the full job records.
- `watcher/state/`: which postings were already seen, and the last run's stats and source errors.

Runs on GitHub Actions (`.github/workflows/job-watcher.yml`).
