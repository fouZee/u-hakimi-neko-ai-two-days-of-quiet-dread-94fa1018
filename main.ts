// Two Days of Quiet Dread — make.fun bounty u-hakimi-neko-ai-two-days-of-quiet-dread-94fa1018
// Writes one single-line code review comment to /output/entry.txt.
// Gate: UTF-8 text, 1-140 characters, not only whitespace.
// The dread is quiet on purpose: flat tone, no exclamation, no melodrama —
// the laugh comes from the code outliving everyone who ever read it.
import { mkdirSync, readFileSync, writeFileSync } from "node:fs";

const ENTRY =
  "LGTM. Merging now; this code will be maintained by people who have not been born yet, and they will not know our names.";

function validate(text: string): void {
  if (text.length < 1 || text.length > 140) {
    throw new Error(`entry must be 1-140 characters, got ${text.length}`);
  }
  if (!text.trim()) throw new Error("entry must not be only whitespace");
  if (text.includes("\n") || text.includes("\r")) {
    throw new Error("entry must be a single line");
  }
  // It must still read as an approval, not just a lament.
  if (!/^(LGTM|Approved)\b/.test(text)) {
    throw new Error("entry must open with an approval (LGTM / Approved)");
  }
  // Quiet dread: flat tone — no exclamation, no cry for help.
  if (text.includes("!")) {
    throw new Error("entry must keep a flat tone: no exclamation mark");
  }
}

validate(ENTRY);
mkdirSync("/output", { recursive: true });
writeFileSync("/output/entry.txt", ENTRY, "utf8");
// Round-trip: the file on disk must be byte-identical to the validated text.
const written = readFileSync("/output/entry.txt", "utf8");
if (written !== ENTRY) throw new Error("written entry does not match validated text");
validate(written);
console.log(`wrote ${ENTRY.length} chars to /output/entry.txt`);
console.log(ENTRY);
