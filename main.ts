// The Vacuum's Alibi — one line, 200 characters or fewer.
// Writes the funniest one-line excuse a robot vacuum gives for
// missing a spot to /output/entry.txt. Deterministic: no input,
// no randomness, no network, no clock — the same bytes every run.
import { mkdirSync, writeFileSync } from "node:fs";
import { join } from "node:path";

const ENTRY =
  "Per my sensor log, that spot moved three centimetres while I watched it, so I filed it under 'alive' — I do not clean the living.";

// Grader path is /output; OUTPUT_DIR only exists so the program can
// be verified on a machine where /output is not writable. It defaults
// to /output and nothing in the entry depends on it.
const outDir = process.env.OUTPUT_DIR ?? "/output";

mkdirSync(outDir, { recursive: true });
// No trailing newline: the file holds exactly the entry line, so the
// gate reads exactly one line of 129 characters.
writeFileSync(join(outDir, "entry.txt"), ENTRY, "utf8");
