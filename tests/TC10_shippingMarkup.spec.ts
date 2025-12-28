import { test, expect } from '@playwright/test';
import { ProductListPage } from '../pages/productList.page';
import { BasketPage } from '../pages/basket.page';

test('TC_10 Standard shipping markup for non-empty basket', async ({ page }) => {
  const productList = new ProductListPage(page);
  const basket = new BasketPage(page);

  await page.goto('/sweets');
  await productList.addFirstItemToBasket();

  await basket.goto();
  const beforePrice = await basket.totalPrice.innerText();

  await basket.selectStandardShipping();
  const afterPrice = await basket.totalPrice.innerText();

  const beforeValue = parseFloat(beforePrice.replace('£', ''));
  const afterValue = parseFloat(afterPrice.replace('£', ''));

  expect(afterValue).toBeCloseTo(beforeValue + 1.99, 2);
});
