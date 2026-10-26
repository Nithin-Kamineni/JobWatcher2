// Copies targets/companies.csv with the personal note columns blanked (the watcher never reads them).
// Usage: node .github/scripts/copy-companies.mjs <in.csv> <out.csv>
import fs from 'node:fs';
import { parseCSV, csvCell } from '../../watcher/lib/util.js';

const BLANK = ['fit_notes', 'you_check', 'you_check_reason'];
const [src, dst] = process.argv.slice(2);
const text = fs.readFileSync(src, 'utf8');
const header = text.split(/\r?\n/)[0].split(',');
const rows = parseCSV(text).map((r) => { for (const c of BLANK) if (c in r) r[c] = ''; return r; });
fs.writeFileSync(dst, [header.join(','), ...rows.map((r) => header.map((h) => csvCell(r[h])).join(','))].join('\n') + '\n');
