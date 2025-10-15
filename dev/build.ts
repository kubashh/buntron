await Bun.build({
  entrypoints: [`src/buntron.ts`],
  minify: true,
  outdir: `.`,
})
