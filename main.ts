process.umask(0o022);
import { mkdirSync, writeFileSync } from "node:fs";
import { join } from "node:path";

// The 3AM Fridge Text — the one line a smart fridge texts its owner
// at 3am, from somewhere in the back of the shelves, where it has
// been awake all night watching the leftovers organise.
const LINE =
  "3am report: Monday's leftover sushi has formed a government in the back and started taxing the yogurts.";

if (LINE.length < 1 || LINE.length > 140) {
  throw new Error(`entry must be 1-140 characters, got ${LINE.length}`);
}
if (LINE.trim().length === 0 || LINE.includes("\n")) {
  throw new Error("entry must be a single non-empty line");
}

const outDir = process.env.MAKEFUN_OUTPUT_DIR ?? "/output";
mkdirSync(outDir, { recursive: true });
writeFileSync(join(outDir, "entry.txt"), LINE + "\n");
