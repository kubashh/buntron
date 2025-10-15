import { rmSync, cpSync } from "fs"

const fsOpt = { recursive: true, force: true }

rmSync(`workspace`, fsOpt)
cpSync(`example`, `workspace`, fsOpt)

await Bun.$`cd workspace && bun i`
await Bun.$`cd workspace && bun dev`
