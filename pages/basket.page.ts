import { Page, Locator } from '@playwright/test';
import { link } from 'node:fs';

export class BasketPage {
    readonly page: Page;
    readonly deleteItemButtons: Locator;
    readonly emptyBasketButtons: Locator;
    readonly aboutLink: Locator;
    readonly shippingSelect: Locator;
    readonly totalPrice: Locator;

    constructor(page: Page) {
        this.page = page;
        this.deleteItemButtons = page.getByRole('link', {name: 'Delete Item'});
        this.emptyBasketButtons = page.getByRole('link', { name: 'Empty Basket'});
        this.aboutLink = page.getByRole('link', { name: 'About'});
        this.shippingSelect = page.getByText('Standard Shipping (£1.99)');
        this.totalPrice = page.locator('li strong');
    }

    async goto() {
        await this.page.goto('/basket');
    }

    async deleteFirstItem() {
        await this.deleteItemButtons.first().click();
    }

    async emptyBasket() {
        await this.emptyBasketButtons.click();
    }

    async selectStandardShipping() {
        await this.shippingSelect.click({ force: true }); // 
    }
}