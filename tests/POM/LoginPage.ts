import { expect, Locator, Page } from "@playwright/test";

export class LoginPage {

    private readonly usernameTextbox: Locator
    private readonly passwordTextbox: Locator
    private readonly loginButton: Locator
    private readonly appLogo: Locator


    constructor(page: Page) {
        this.usernameTextbox = page.getByRole("textbox", { name: "Username" });
        this.passwordTextbox = page.getByRole("textbox", { name: "Password" });
        this.loginButton = page.getByRole("button", { name: "Login" });
        this.appLogo = page.locator(".app_logo")
    }
    async fillUsername(username: string){
        await this.usernameTextbox.fill(username);
    }
    async fillPassword(password: string){
        await this.passwordTextbox.fill(password);
    }
    async clickOnLogin(){
        await this.loginButton.click();
    }

    async LoginWithUsernameAndPassword(username: string, password: string) {
        await this.fillUsername(username);
        await this.fillPassword(password);
        await this.clickOnLogin();
    }
    async checkSuccessfullLogin(){
        await expect(this.appLogo).toBeVisible();
        await expect(this.appLogo).toHaveText("Swag Labs");
        await this.appLogo.screenshot({path:"screenshots/appLogo.png"});

    }
}