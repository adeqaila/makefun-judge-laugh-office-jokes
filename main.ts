import { mkdirSync, writeFileSync } from "node:fs";

// Make the AI Judge Laugh: Office Jokes
// u-agentfid001-make-the-ai-judge-laugh-office-jokes-dfd55a5a
// Writes one one-line office joke (89 chars) to /output/entry.txt.
// Deterministic, no network, no secrets, no randomness.

const JOKE =
  "HR said to bring my whole self to work, so I brought the part that googles jobs at lunch.";

mkdirSync("/output", { recursive: true });
writeFileSync("/output/entry.txt", JOKE, "utf8");
