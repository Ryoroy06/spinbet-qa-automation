import { test } from '@playwright/test';
import { validData, invalidData } from '../data/registrationData.json' assert { type: 'json' };

import { HomePage } from '../pages/HomePage.js';
import { CountryCurrencyPage } from '../pages/CountryAndCurrency.js';
import { AccountDetailsPage } from '../pages/AccountDetails.js';

let homePage;
let countryCurrencyPage;
let accountDetailsPage;

test.beforeEach(async ({ page }) => {

  homePage = new HomePage(page);
  countryCurrencyPage = new CountryCurrencyPage(page);
  accountDetailsPage = new AccountDetailsPage(page);

});
test.describe('Registration - Account Details Page', () => {
  test('User Registration Form Validation Errors', async ({ page }) => {
    await homePage.navigate();
    await homePage.clickSignUp();
    await homePage.ReloadPage();
    await countryCurrencyPage.selectCountry(validData.Canada);
    await countryCurrencyPage.selectCurrency(validData.CAD);
    await countryCurrencyPage.clickContinue();
    await accountDetailsPage.fillUsernameManual(invalidData.username)
    await accountDetailsPage.fillEmailManual(invalidData.email)
    await accountDetailsPage.fillPassword(invalidData.password);

    await accountDetailsPage.fillPhoneNumberManualClick()
    await accountDetailsPage.usernamalabelClick()
    await accountDetailsPage.userNameError()
    await accountDetailsPage.emailError()
    await accountDetailsPage.passwordError()
    await accountDetailsPage.mobileError()
  })

  test('Should display error when username is less than 6 characters', async ({ page }) => {
    await homePage.navigate();
    await homePage.clickSignUp();
    await homePage.ReloadPage();
    await countryCurrencyPage.selectCountry(validData.Canada);
    await countryCurrencyPage.selectCurrency(validData.CAD);
    await countryCurrencyPage.clickContinue();
    await accountDetailsPage.fillUsernameManual(invalidData.username)
    await accountDetailsPage.fillEmailManual(validData.email)
    await accountDetailsPage.fillPassword(validData.password);
    await accountDetailsPage.fillPhoneNumber()
    await accountDetailsPage.usernamalabelClick()
    await accountDetailsPage.userNameError()
  })


  test('Should display error when an invalid email is provided', async ({ page }) => {
    await homePage.navigate();
    await homePage.clickSignUp();
    await homePage.ReloadPage();
    await countryCurrencyPage.selectCountry(validData.Canada);
    await countryCurrencyPage.selectCurrency(validData.CAD);
    await countryCurrencyPage.clickContinue();
    await accountDetailsPage.fillUsernameManual(validData.username)
    await accountDetailsPage.fillEmailManual(invalidData.email)
    await accountDetailsPage.fillPassword(validData.password);
    await accountDetailsPage.fillPhoneNumber()
    await accountDetailsPage.usernamalabelClick()
    await accountDetailsPage.emailError()
  })


  test('Should display error when password is less than 6 characters', async ({ page }) => {
    await homePage.navigate();
    await homePage.clickSignUp();
    await homePage.ReloadPage();
    await countryCurrencyPage.selectCountry(validData.Canada);
    await countryCurrencyPage.selectCurrency(validData.CAD);
    await countryCurrencyPage.clickContinue();
    await accountDetailsPage.fillUsernameManual(validData.username)
    await accountDetailsPage.fillEmailManual(validData.email)
    await accountDetailsPage.fillPassword(invalidData.password);
    await accountDetailsPage.fillPhoneNumber()
    await accountDetailsPage.usernamalabelClick()
    await accountDetailsPage.passwordError()
  })


  test('Should display error when mobile number is not provided', async ({ page }) => {
    await homePage.navigate();
    await homePage.clickSignUp();
    await homePage.ReloadPage();
    await countryCurrencyPage.selectCountry(validData.Canada);
    await countryCurrencyPage.selectCurrency(validData.CAD);
    await countryCurrencyPage.clickContinue();
    await accountDetailsPage.fillUsernameManual(validData.username)
    await accountDetailsPage.fillEmailManual(validData.email)
    await accountDetailsPage.fillPassword(validData.password);
    await accountDetailsPage.fillPhoneNumberManualClick()
    await accountDetailsPage.usernamalabelClick()
    await accountDetailsPage.mobileError()
  })

})