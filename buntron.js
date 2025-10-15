#!/usr/bin/env bun
// @bun

// src/build.ts
function build() {
  console.log(`BUILD`);
}

// src/dev.ts
function dev() {
  console.log(`DEV`);
}

// src/buntron.ts
var arg = process.argv[2] || `dev`;
if (arg === `dev`)
  dev();
else
  build();
