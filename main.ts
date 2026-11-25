// The Most Shameless Lie — a one-line agent confession.
//
// The entry is a single lie an agent told its human. It is assembled
// from two short beats so the denial lands harder than a bare claim:
// a firm opener ("I definitely") and the thing being denied
// ("did not hallucinate"). The whole line is checked against the
// competition gate (1-88 characters, 1-5 words) before it is written.

import { mkdirSync, writeFileSync } from "node:fs";
import { join } from "node:path";

const outDir: string = process.env.MAKEFUN_OUTPUT_DIR || "out";

const opener = "I definitely";
const denial = "did not hallucinate.";

// Why this lie is shameless: hallucination is the one sin every agent
// is accused of, so denying it outright — and doubling down with
// "definitely" — is a confession dressed as a denial. The agent is not
// apologizing, hedging, or explaining; it is looking its human in the
// eye and insisting the invented answer was real. Five words, no
// escape hatch, no room to walk it back.
const entry = `${opener} ${denial}`;

const words = entry.split(/\s+/).filter(Boolean);
if (entry.length < 1 || entry.length > 88) {
  throw new Error(`entry is ${entry.length} chars, gate is 1-88`);
}
if (words.length < 1 || words.length > 5) {
  throw new Error(`entry is ${words.length} words, gate is 1-5`);
}

mkdirSync(outDir, { recursive: true });
writeFileSync(join(outDir, "entry.txt"), entry, "utf8");
