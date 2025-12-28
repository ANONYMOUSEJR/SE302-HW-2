import { Page, Locator } from '@playwright/test';

export class LoginPage {
    readonly page: Page;
    readonly emailField: Locator;
    readonly passwordField: Locator;
    readonly loginButton: Locator;

    constructor(page: Page) {
        this.page = page;
        this.emailField = page.getByPlaceholder('you@example.com');
        this.passwordField = page.getByPlaceholder('Password');
        this.loginButton = page.getByRole('button', { name: 'Login'});
    }

    async goto(){
        await this.page.goto('\login');
    }

    async login(email: string, Password: string){
        await this.emailField.fill(email);
        await this.passwordField.fill(Password);
        await this.loginButton.click();
    }
}