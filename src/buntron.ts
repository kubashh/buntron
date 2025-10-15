#!/usr/bin/env bun

// import path from "path"
import build from "./build"
import dev from "./dev"

const arg = process.argv[2] || `dev`

// const cli = path.join(__dirname, `buntron-${arg}`)

if (arg === `dev`) dev()
else build()
// await Bun.$`bun ${cli}`
// import execa from "execa"

// if (arg !== `dev`) process.env.NODE_ENV = `production`

// const cli = path.join(__dirname, `nextron-${arg}`)
// execa("bun", [cli, ...process.argv.slice(3)], { stdio: "inherit" })
