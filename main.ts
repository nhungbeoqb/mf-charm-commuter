// Charm the Commuter — one line of weather for a city that isn't.
//
// The program writes a single fixed forecast line to /output/entry.txt.
// It is fully deterministic: same bytes on every run, no randomness,
// no clock, no network, no environment input.
//
// The line (v2, revised): same forecast, but the flat "the bus is late"
// became the concrete "the 8:15 is late again" — a named bus time makes
// the commuter's morning specific rather than generic, and "again" gives
// the regular commuter a shared history with the city. Three beats now
// escalate: the late 8:15 (shared truth), the smug pigeons (surprising
// image), the umbrella finally earning its keep (turn of phrase).
import { mkdirSync, writeFileSync } from "node:fs";

const ENTRY =
  "Mizzlewick: drizzle till nine, sun by ten; the 8:15 is late again, the pigeons are smug, and your umbrella finally earns its keep.";

mkdirSync("/output", { recursive: true });
writeFileSync("/output/entry.txt", ENTRY, "utf8");
