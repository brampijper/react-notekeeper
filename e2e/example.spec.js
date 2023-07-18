import { test, expect } from '@playwright/test'

test('homepage should have a title and an image attribute', async ({ page }) => {
  // Start from the index page (the baseURL is set via the webServer in the playwright.config.js
  await page.goto('http://localhost:3000/');

  // The new page should contain an h2 with "NoteKeeper"
  await expect(page.locator('h2')).toContainText('NoteKeeper')
})