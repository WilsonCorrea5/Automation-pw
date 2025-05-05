import { test, expect } from "@playwright/test";
import { LoginPage } from "./POM/LoginPage";

test("should do the purchasing workflow in saucedemo webpage", async ({
  page,
}) => {
  await page.goto("https://www.saucedemo.com/");
  //   await page.getByRole("textbox", { name: "Username" }).fill("standard_user");
  //   await page.getByRole("textbox", { name: "Password" }).fill("secret_sauce");
  //   await page.getByRole("button", { name: "Login" }).click();

  const userLogin = new LoginPage(page);
  await userLogin.LoginWithUsernameAndPassword("standard_user", "secret_sauce");
  await userLogin.checkSuccessfullLogin(); 

  const itemsContainer = await page
    .locator("#inventory_container .inventory_item")
    .all();
  const randomIndex = Math.floor(Math.random() * itemsContainer.length);
  const randomItem = itemsContainer[randomIndex];

  const itemTitle = await randomItem
    .locator(".inventory_item_name")
    .innerText();
  const itemDesciption = await randomItem
    .locator(".inventory_item_desc")
    .innerText();
  const itemPrice = await randomItem
    .locator(".inventory_item_price")
    .innerText();

  console.log(itemTitle, itemDesciption, itemPrice);

  await randomItem.getByRole("button", { name: "Add to cart" }).click();

  await expect(
    randomItem.getByRole("button", { name: "Remove" })
  ).toBeVisible();

  await page.locator("a.shopping_cart_link").click();

  await expect(page.getByRole("button", { name: "Checkout" })).toBeVisible();

  const cartItemTitle = await page.locator(".inventory_item_name").innerText();
  const cartItemDesc = await page.locator(".inventory_item_desc").innerText();
  const cartItemPrice = await page.locator(".inventory_item_price").innerText();

  expect(itemTitle).toEqual(cartItemTitle);
  expect(itemDesciption).toEqual(cartItemDesc);
  expect(itemPrice).toEqual(cartItemPrice);

  await page.getByRole("button", { name: "Checkout" }).click();

  await page.getByRole("textbox", { name: "First Name" }).fill("Wilson");
  await page.getByRole("textbox", { name: "Last Name" }).fill("Correa");
  await page.getByRole("textbox", { name: "Zip/Postal Code" }).fill("130001");

  await page.getByRole("button", { name: "Continue" }).click();
  await page.getByRole("button", { name: "Finish" }).click();
  await expect(page.getByText("THANK YOU FOR YOUR ORDER")).toBeVisible();
  await page.screenshot({ path: "screenshots/tyfyo.png", fullPage: true });
});
