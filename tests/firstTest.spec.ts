import { test, expect } from "@playwright/test";

test("should first go to the MERCADOLIBRE webpage", async ({ page }) => {
  await page.goto("https://www.mercadolibre.com.co/");

  // await page.locator("input[id='cb1-edit']").fill('Iphone');
  await page
    .getByRole("combobox", { name: "Ingresa lo que quieras encontrar" })
    .fill("Iphone");

  await page.keyboard.press("Enter");
  // await page.waitForTimeout(3000)
  await expect(
    page.locator("//ol[contains(@class, 'ui-search-layout')]")
  ).toBeVisible();
  // await page.pause()

  const titles = await page
    .locator("//ol[contains(@class, 'ui-search-layout')]//li//h3")
    .allInnerTexts();

  for (const title of titles) {
    console.log(title);
  }
});
