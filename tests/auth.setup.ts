import {test as setup, expect } from "@playwright/test";
import { LoginPage } from "./POM/LoginPage";

const authFile = "playwright/.auth/user.json";

setup("authenticate", async ({ page }) => {
    await page.goto("https://www.saucedemo.com/");
    const userLogin = new LoginPage(page);
    await userLogin.LoginWithUsernameAndPassword("standard_user", "secret_sauce");
    await userLogin.checkSuccessfullLogin(); 

    await page.context().storageState({path: authFile})
});