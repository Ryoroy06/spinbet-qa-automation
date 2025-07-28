import { test } from '@playwright/test';
import { validData, invalidData, } from '../data/registrationData.json' assert { type: 'json' };

import { HomePage } from '../pages/HomePage.js';
import { CountryCurrencyPage } from '../pages/CountryAndCurrency.js';
import { AccountDetailsPage } from '../pages/AccountDetails.js';



let homePage;
let countryCurrencyPage;
let accountDetailsPage;
const currencies = ['NZD', 'CAD', 'EUR', 'MXN', 'NOK', 'USD'];

test.beforeEach(async ({ page }) => {

  homePage = new HomePage(page);
  countryCurrencyPage = new CountryCurrencyPage(page);
  accountDetailsPage = new AccountDetailsPage(page);
});

test('select Canada as country, then iterate all currencies', async ({ page }) => {
  await homePage.navigate();
  await homePage.clickSignUp();
  await homePage.ReloadPage();
  for (const currency of currencies) {
    await countryCurrencyPage.selectCurrency(currency);
    await countryCurrencyPage.clickContinue();
    await accountDetailsPage.usernamalabel();
    await countryCurrencyPage.backBtn();
  }

})
test('select Cannada as country, then iterate all currencies', async ({ page }) => {
  await homePage.navigate();
  await homePage.clickSignUp();
  await homePage.ReloadPage();
  await countryCurrencyPage.selectCountry(validData.Canada);
  for (const currency of currencies) {
    await countryCurrencyPage.selectCurrency(currency);
    await countryCurrencyPage.clickContinue();
    await accountDetailsPage.usernamalabel();
    await countryCurrencyPage.backBtn();
  }
})
