import { test } from '@playwright/test';
import { WebTablesPage } from '../pages/WebTables.Page';
import { newClient } from '../utils/testData';

test.describe('@regression @webtables WebTables Tests', () => {

  test('Add and delete record', async ({ page }) => {
    const table = new WebTablesPage(page);

    await table.goto();
    await table.addRecord(newClient.firstName, newClient.lastName, newClient.email);
    await table.expectRecordExists(newClient.email);

    await table.deleteRecord(newClient.email);
    await table.expectRecordNotExists(newClient.email);
  });

});