const pluginSortImports = require("@ianvs/prettier-plugin-sort-imports")
const pluginTailwindcss = require("prettier-plugin-tailwindcss")

/** @type {import("prettier").Plugin}  */
module.exports = {
  parsers: {
    typescript: {
      ...pluginTailwindcss.parsers.typescript,
      preprocess: pluginSortImports.parsers.typescript.preprocess,
    },
  },
  options: {
    ...pluginSortImports.options,
  },
}
