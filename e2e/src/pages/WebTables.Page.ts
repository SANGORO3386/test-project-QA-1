import { expect, Page } from '@playwright/test';
import { BasePage } from './BasePage';

export class WebTablesPage extends BasePage {

  constructor(page: Page) {
    super(page);
  }

  async goto() {
    await this.navigate('/webtables');
  }

  async addRecord(firstName: string, lastName: string, email: string) {
    await this.page.click('#addNewRecordButton');
    await this.page.fill('#firstName', firstName);
    await this.page.fill('#lastName', lastName);
    await this.page.fill('#userEmail', email);
    await this.page.fill('#age', '30');
    await this.page.fill('#salary', '5000');
    await this.page.fill('#department', 'QA');
    await this.page.click('#submit');
  }

  async expectRecordExists(email: string) {
    await expect(this.page.locator(`text=${email}`)).toBeVisible();
  }

  async deleteRecord(email: string) {
    const row = this.page.locator(`text=${email}`).locator('..');
    await row.locator('[title="Delete"]').click();
  }

  async expectRecordNotExists(email: string) {
    await expect(this.page.locator(`text=${email}`)).toHaveCount(0);
  }
}