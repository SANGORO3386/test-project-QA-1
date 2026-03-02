import { expect, Page } from '@playwright/test';
import { BasePage } from './BasePage';

export class LoginPage extends BasePage {

  private usernameInput = '#userName';
  private passwordInput = '#password';
  private loginButton = '#login';
  private errorMessage = '#name';

  constructor(page: Page) {
    super(page);
  }

  async goto() {
    await this.navigate('/login');
  }

  async login(username: string, password: string) {
    await this.page.fill(this.usernameInput, username);
    await this.page.fill(this.passwordInput, password);
    await this.page.click(this.loginButton);
  }

  async checkButtonColor(expectedColor: string) {
    const color = await this.page.locator(this.loginButton).evaluate(
      el => window.getComputedStyle(el).backgroundColor
    );
    expect(color).toBe(expectedColor);
  }

  async expectError() {
    await expect(this.page.locator(this.errorMessage)).toBeVisible();
  }
}