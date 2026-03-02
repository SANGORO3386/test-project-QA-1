import { test } from '@playwright/test';
import { LoginPage } from '../pages/LoginPage';
import { validUser, invalidUser } from '../utils/testData';

test.describe('@smoke @login Login Tests', () => {

  test('Login with invalid credentials', async ({ page }) => {
    const login = new LoginPage(page);
    await login.goto();
    await login.login(invalidUser.username, invalidUser.password);
    await login.expectError();
  });

  test('Login button color check', async ({ page }) => {
    const login = new LoginPage(page);
    await login.goto();
    await login.checkButtonColor('rgb(0, 123, 255)');
  });

});
