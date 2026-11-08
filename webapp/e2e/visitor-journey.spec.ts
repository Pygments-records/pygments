import { expect, test, type Page } from '@playwright/test'

/**
 * Vercel Web Analytics loads a script that sends one view per page:
 * - production / preview: /_vercel/insights/script.js
 * - development: https://va.vercel-scripts.com/.../script.debug.js
 */
const ANALYTICS_SCRIPT = 'script[src*="/_vercel/insights/script"], script[src*="va.vercel-scripts.com"]'

/**
 * Stub every analytics request so test runs never show up as visits in the Vercel dashboard.
 * The <script> tag is still injected by our code, which is what the tests check.
 */
async function stubAnalytics(page: Page) {
  await page.route(/\/_vercel\/insights\/|va\.vercel-scripts\.com/, (route) =>
    route.fulfill({ status: 200, contentType: 'application/javascript', body: '' }),
  )
}

async function expectAnalyticsLoaded(page: Page) {
  await expect(page.locator(ANALYTICS_SCRIPT)).toHaveCount(1)
}

test.beforeEach(async ({ page }) => {
  await stubAnalytics(page)
})

test('home page renders and loads analytics', async ({ page }) => {
  const response = await page.goto('/')

  expect(response?.status()).toBe(200)
  await expect(page).toHaveTitle('Pygments Records')
  await expect(page.locator('a[href^="/artists/"]').first()).toBeVisible()
  await expectAnalyticsLoaded(page)
})

test('visitor goes from the home page to an artist page', async ({ page }) => {
  await page.goto('/')

  const artistLink = page.locator('a[href^="/artists/"]').first()
  const artistHref = await artistLink.getAttribute('href')
  await artistLink.click()

  await expect(page).toHaveURL(artistHref ?? /\/artists\//)
  // The title is "<artist name> | Pygments Records": an empty name means the Sanity data is missing
  await expect(page).toHaveTitle(/^.+ \| Pygments Records$/)
  // ArtistPage renders a bare "Error" when Sanity fails
  await expect(page.getByText('Error', { exact: true })).toHaveCount(0)
  await expectAnalyticsLoaded(page)
})

test('every artist linked from the home page opens', async ({ page, request }) => {
  await page.goto('/')
  const hrefs = await page
    .locator('a[href^="/artists/"]')
    .evaluateAll((links) => [...new Set(links.map((link) => link.getAttribute('href') ?? ''))])

  expect(hrefs.length).toBeGreaterThan(0)
  for (const href of hrefs) {
    const response = await request.get(href)
    expect(response.status(), `${href} should answer 200`).toBe(200)
    expect(await response.text(), `${href} should not render the error page`).not.toContain(
      '<p>Error</p>',
    )
  }
})

test('visitor goes from the home page to the timeline', async ({ page }) => {
  await page.goto('/')

  await page.locator('a[href="/timeline"]').first().click()

  await expect(page).toHaveURL(/\/timeline$/)
  await expect(page).toHaveTitle('Timeline | Pygments Records')
  await expectAnalyticsLoaded(page)
})
