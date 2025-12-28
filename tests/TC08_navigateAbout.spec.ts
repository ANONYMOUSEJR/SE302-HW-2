import { test, expect } from '@playwright/test';
import { BasketPage } from '../pages/basket.page';

test('TC_08 Navigating to About page from Basket page', async ({ page }) => {
  const basket = new BasketPage(page);

  await basket.goto();
  await basket.aboutLink.click();

  await expect(page).toHaveURL(/about/i);
  await expect(page.getByRole('heading', { name: /About/i })).toBeVisible();
});
