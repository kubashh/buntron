// const glob = new Bun.Glob(`**/*`)

// for (const path of glob.scanSync(`src`)) {
//   const text =
//   console.log(path)
// }

await Bun.build({
  entrypoints: [`src/buntron.ts`],
  minify: false,
  outdir: `.`,
})
