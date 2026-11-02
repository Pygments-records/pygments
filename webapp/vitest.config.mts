import tsconfigPaths from 'vite-tsconfig-paths'
import { defineConfig } from 'vitest/config'

export default defineConfig({
  plugins: [tsconfigPaths()],
  test: {
    include: ['src/**/*.test.{ts,tsx}'],
    // Dates are formatted in Paris time: run tests in another timezone to catch regressions
    env: { TZ: 'UTC' },
  },
})
