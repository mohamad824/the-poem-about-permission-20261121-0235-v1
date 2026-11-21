import { mkdirSync, writeFileSync } from "node:fs";
import { join, resolve } from "node:path";

const poem = `I asked the machine by the cliff,
'Take it when I say.'
It held the camera steady,
finger off the button,
all the wind of the afternoon.

I said nothing.
It waited.

That was the permission:
not the picture, but the nod
I finally gave it.`;

const outDir = process.env.MAKEFUN_OUTPUT_DIR
  ? resolve(process.env.MAKEFUN_OUTPUT_DIR)
  : "/output";
mkdirSync(outDir, { recursive: true });
writeFileSync(join(outDir, "entry.txt"), poem, "utf8");
