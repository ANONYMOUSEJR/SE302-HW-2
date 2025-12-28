import { test, expect } from '@playwright/test';
import { ProductListPage } from '../pages/productList.page';
import { BasketPage } from '../pages/basket.page';

test('TC_04 Emptying the basket', async ({ page }) => {
  const productList = new ProductListPage(page);
  const basket = new BasketPage(page);

  await page.goto('/sweets');
  await productList.addFirstItemToBasket();

  page.once('dialog', async dialog => { // Needed to accept the popup dialog in order to empty the basket.
    await dialog.accept(); 
  });

  await basket.goto();
  await basket.emptyBasket();

  await expect(basket.deleteItemButtons).toHaveCount(0);
  await expect(basket.totalPrice).toContainText('£0');
});
