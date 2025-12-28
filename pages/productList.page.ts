import { Page, Locator } from '@playwright/test';
import { text } from 'node:stream/consumers';

export class ProductListPage {
    readonly page: Page;
    readonly addButtons: Locator;

    constructor(page:Page){
        this.page = page;
        //this.addButtons = page.getByRole('button', { name: /add to basket/i });
        this.addButtons = page.getByText('Add to Basket');
    }
    async addFirstItemToBasket() {
        await this.addButtons.first().click();
    }
}

