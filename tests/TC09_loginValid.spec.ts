import { test, expect } from '@playwright/test';
import { LoginPage } from '../pages/login.page';

test('TC_09 Logging in with correct Email and Password', async ({ page }) => {
  const login = new LoginPage(page);

  await login.goto();
  await login.login('test@user.com', 'qwerty');

  await expect(page).not.toHaveURL(/login/i); // 'i' is aparently for ignoring case.
});
