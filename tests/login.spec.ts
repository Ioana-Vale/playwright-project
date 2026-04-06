import { test, expect } from '@playwright/test';
import { LoginPage } from '../pages/LoginPage';

test('Login valid', async ({ page }) => {
  const login = new LoginPage(page);
  await login.goto();
  await login.login('standard_user', 'secret_sauce');
  await expect(page).toHaveURL(/inventory/);
});

test('Login invalid', async ({ page }) => {
  const login = new LoginPage(page);
  await login.goto();
  await login.login('wrong', 'wrong');
  await expect(login.error).toBeVisible();
});

test('Login cu campuri goale', async ({ page }) => {
  const login = new LoginPage(page);
  await login.goto();
  await login.login('', '');
  await expect(login.error).toBeVisible();
});