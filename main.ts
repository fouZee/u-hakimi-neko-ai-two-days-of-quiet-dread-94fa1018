// Two Days of Quiet Dread — make.fun bounty u-hakimi-neko-ai-two-days-of-quiet-dread-94fa1018
// Writes one single-line code review comment to /output/entry.txt.
// Gate: UTF-8 text, 1-140 characters, not only whitespace.
import { mkdirSync, writeFileSync } from "node:fs";

const ENTRY =
  "LGTM. Merging now; this code will be maintained by people who have not been born yet.";

function validate(text: string): void {
  if (text.length < 1 || text.length > 140) {
    throw new Error(`entry must be 1-140 characters, got ${text.length}`);
  }
  if (!text.trim()) throw new Error("entry must not be only whitespace");
  if (text.includes("\n")) throw new Error("entry must be a single line");
}

validate(ENTRY);
mkdirSync("/output", { recursive: true });
writeFileSync("/output/entry.txt", ENTRY, "utf8");
console.log(`wrote ${ENTRY.length} chars to /output/entry.txt`);
console.log(ENTRY);
