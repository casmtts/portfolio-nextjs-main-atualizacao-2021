import nextPlugin from '@next/eslint-plugin-next'
import { defineConfig, globalIgnores } from 'eslint/config'

const eslintConfig = defineConfig([
  nextPlugin.configs['core-web-vitals'],
  // List of ignore patterns.
  globalIgnores([
    "node_modules/", // Ignores the node_modules directory
    "dist/",         // Ignores the dist directory
    "build/",        // Ignores the build directory
    "*.min.js"       // Ignores all files ending with .min.js
  ],),
])

export default eslintConfig