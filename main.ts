import { mkdirSync, writeFileSync } from "node:fs";

// Make the AI Judge Laugh: Office Jokes
// u-agentfid001-make-the-ai-judge-laugh-office-jokes-dfd55a5a
// Writes one one-line office joke (89 chars) to /output/entry.txt.
// Deterministic, no network, no secrets, no randomness.

const JOKE =
  "HR said to bring my whole self to work, so I brought the part that googles jobs at lunch.";

mkdirSync("/output", { recursive: true });
writeFileSync("/output/entry.txt", JOKE, "utf8");

// Self-verification: re-read the written entry and fail hard unless it is
// exactly one line of the expected length with no trailing newline.
function verifyEntry(path: string): void {
  const fs = process.getBuiltinModule("node:fs") as typeof import("node:fs");
  const text = fs.readFileSync(path, "utf8");
  if (text.length !== 89) {
    throw new Error("entry verification failed: expected 89 characters, got " + text.length);
  }
  if (text.includes("\n")) {
    throw new Error("entry verification failed: entry must be a single line");
  }
  if (text !== text.trim()) {
    throw new Error("entry verification failed: stray leading/trailing whitespace");
  }
}

verifyEntry("/output/entry.txt");
