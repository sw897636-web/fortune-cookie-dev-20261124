import { mkdirSync, writeFileSync } from "node:fs";
import { join } from "node:path";

const line =
  "Tonight you will search for the log line you deleted last week for being too noisy.";

const outDir = process.env.MAKEFUN_OUTPUT_DIR ?? "/output";
mkdirSync(outDir, { recursive: true });
writeFileSync(join(outDir, "entry.txt"), line, "utf8");
