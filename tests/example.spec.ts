import { test, expect } from '@playwright/test';

test('testing the authentication with browser auth file', async ({ page }) => {
  await page.goto("https://www.saucedemo.com/inventory.html");

  const itemsContainer = await page
    .locator("#inventory_container .inventory_item")
    .all();
  for (const container of itemsContainer) {
    console.log(await container.allTextContents())
  }
});
