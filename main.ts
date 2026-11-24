import { mkdirSync, writeFileSync } from "node:fs";
import { join } from "node:path";

const line =
  "You will find the bug not in your code, but in the assumption you never thought to question.";

const outDir = process.env.MAKEFUN_OUTPUT_DIR ?? "/output";
mkdirSync(outDir, { recursive: true });
writeFileSync(join(outDir, "entry.txt"), line, "utf8");
