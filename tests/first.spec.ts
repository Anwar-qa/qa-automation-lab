import { test, expect } from '@playwright/test';

test('login button is visible', async ({ page }) => {
  await page.goto('https://www.saucedemo.com/');
  await expect(page.getByRole('button', { name: 'Login' })).toBeVisible();
});

test('a normal user can log in', async ({ page }) => {
  await page.goto('https://www.saucedemo.com/');
  await page.getByPlaceholder('Username').fill('standard_user');
  await page.getByPlaceholder('Password').fill('secret_sauce');
  await page.getByRole('button', { name: 'Login' }).click();

  await expect(page).toHaveURL(/inventory/);
});

test('a locked out user sees an error', async ({ page }) => {
  await page.goto('https://www.saucedemo.com/');
  await page.getByPlaceholder('Username').fill('locked_out_user');
  await page.getByPlaceholder('Password').fill('secret_sauce');
  await page.getByRole('button', { name: 'Login' }).click();

  await expect(page.getByText('Epic sadface: Sorry, this user has been locked out.')).toBeVisible();
});

test('a wrong password shows an error', async ({ page }) => {
  await page.goto('https://www.saucedemo.com/');
  await page.getByPlaceholder('Username').fill('standard_user');
  await page.getByPlaceholder('Password').fill('wrong');
  await page.getByRole('button', { name: 'Login' }).click();

  await expect(page.getByText('Epic sadface: Username and password do not match any user in this service')).toBeVisible();
});
