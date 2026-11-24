// The Dog Ate My Homework: Funniest Excuse
// Writes a single line — the dog's excuse, in the dog's own voice —
// to <output>/entry.txt. The excuse must be 1-200 UTF-8 characters.
import { mkdirSync, writeFileSync } from "node:fs";
import { join } from "node:path";

const EXCUSE =
  "It was due tomorrow and I panicked \u2014 if I eat it tonight, it can never be late. You're welcome.";

const outputDir = process.env.MAKEFUN_OUTPUT_DIR ?? "/output";
mkdirSync(outputDir, { recursive: true });

// Guard the gate: one line, under 200 characters, not only whitespace.
const line = EXCUSE.trim();
if (line.length === 0 || line.length > 200) {
  throw new Error(`excuse must be 1-200 characters, got ${line.length}`);
}
const target = join(outputDir, "entry.txt");
writeFileSync(target, line + "\n", "utf8");
console.log(`wrote ${line.length} chars to ${target}`);
