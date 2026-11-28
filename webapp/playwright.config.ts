import { defineConfig, devices } from '@playwright/test'

/**
 * End-to-end tests of the visitor journey.
 *
 * - In CI, E2E_BASE_URL points at the Vercel preview of the PR, so the tests run against the real
 *   build with real Sanity content.
 * - Locally, leave it unset: Playwright starts `yarn dev` and tests http://localhost:3000.
 */
const baseURL = process.env.E2E_BASE_URL ?? 'http://localhost:3000'
const isCI = !!process.env.CI

export default defineConfig({
  testDir: './e2e',
  fullyParallel: true,
  forbidOnly: isCI,
  retries: isCI ? 2 : 0,
  reporter: isCI ? [['github'], ['html', { open: 'never' }]] : 'list',
  use: {
    baseURL,
    trace: 'retain-on-failure',
    screenshot: 'only-on-failure',
  },
  projects: [{ name: 'chromium', use: { ...devices['Desktop Chrome'] } }],
  webServer: process.env.E2E_BASE_URL
    ? undefined
    : {
        command: 'yarn dev',
        url: baseURL,
        reuseExistingServer: true,
        // The first dev build compiles every page on demand and fetches Sanity
        timeout: 120_000,
      },
})
