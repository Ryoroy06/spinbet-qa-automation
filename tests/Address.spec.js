import { test } from '@playwright/test';
import { validData, invalidData } from '../data/registrationData.json' assert { type: 'json' };

// Import your Page Object classes
import { HomePage } from '../pages/HomePage.js';
import { CountryCurrencyPage } from '../pages/CountryAndCurrency.js';
import { AccountDetailsPage } from '../pages/AccountDetails.js';
import { BonusSelectionPage } from '../pages/BonusSelection.js';
import { PersonalInformationPage } from '../pages/PersonalInformation.js';
import { AddressDetailsPage } from '../pages/AddressDetails.js';


let homePage;
let countryCurrencyPage;
let accountDetailsPage;
let bonusSelectionPage;
let personalInformationPage;
let addressDetailsPage;

test.beforeEach(async ({ page }) => {
  homePage = new HomePage(page);
  countryCurrencyPage = new CountryCurrencyPage(page);
  accountDetailsPage = new AccountDetailsPage(page);
  bonusSelectionPage = new BonusSelectionPage(page);
  personalInformationPage = new PersonalInformationPage(page);
  addressDetailsPage = new AddressDetailsPage(page);
});

test.describe('Registration - Address Details Page', () => {
  test('Address Form Validation Errors', async ({ page }) => {
    await homePage.navigate();
    await homePage.clickSignUp();
    await homePage.ReloadPage();

    await countryCurrencyPage.selectCountry(validData.Canada);
    await countryCurrencyPage.selectCurrency(validData.CAD);
    await countryCurrencyPage.clickContinue();

    await accountDetailsPage.fillUsername();
    await accountDetailsPage.fillEmail();
    await accountDetailsPage.fillPassword(validData.password);
    await accountDetailsPage.phoneNumberOptions()
    await accountDetailsPage.phoneNumberNewZealand()
    await accountDetailsPage.fillPhoneNumber()
    await accountDetailsPage.clickContinue();
    await bonusSelectionPage.termsAndCondition()
    await bonusSelectionPage.clickContinue();
    await personalInformationPage.fillFirstName();
    await personalInformationPage.fillLastName();
    await personalInformationPage.fillBirthDate(validData.DOB)
    await personalInformationPage.clickContinue();
    await addressDetailsPage.clickfillAddress()
    await addressDetailsPage.ClickAddressLbl()
    await addressDetailsPage.addressError()
    await addressDetailsPage.clickfillCity()
    await addressDetailsPage.ClickAddressLbl()
    await addressDetailsPage.cityError()
    await addressDetailsPage.clickfillZipCode()
    await addressDetailsPage.ClickAddressLbl()
    await addressDetailsPage.zipcodeError()
  })

  test('Should display error when Address field is empty during registration', async ({ page }) => {
    await homePage.navigate();
    await homePage.clickSignUp();
    await homePage.ReloadPage();
    await countryCurrencyPage.selectCountry(validData.Canada);
    await countryCurrencyPage.selectCurrency(validData.CAD);
    await countryCurrencyPage.clickContinue();
    await accountDetailsPage.fillUsername();
    await accountDetailsPage.fillEmail();
    await accountDetailsPage.fillPassword(validData.password);
    await accountDetailsPage.phoneNumberOptions()
    await accountDetailsPage.phoneNumberNewZealand()
    await accountDetailsPage.fillPhoneNumber()
    await accountDetailsPage.clickContinue();
    await bonusSelectionPage.termsAndCondition()
    await bonusSelectionPage.clickContinue();
    await personalInformationPage.fillFirstName();
    await personalInformationPage.fillLastName();
    await personalInformationPage.fillBirthDate(validData.DOB)
    await personalInformationPage.clickContinue();
    await addressDetailsPage.clickfillAddress()
    await addressDetailsPage.ClickAddressLbl()
    await addressDetailsPage.addressError()
  })

  test('Should display error when City field is empty during registration', async ({ page }) => {
    await homePage.navigate();
    await homePage.clickSignUp();
    await homePage.ReloadPage();
    await countryCurrencyPage.selectCountry(validData.Canada);
    await countryCurrencyPage.selectCurrency(validData.CAD);
    await countryCurrencyPage.clickContinue();
    await accountDetailsPage.fillUsername();
    await accountDetailsPage.fillEmail();
    await accountDetailsPage.fillPassword(validData.password);
    await accountDetailsPage.phoneNumberOptions()
    await accountDetailsPage.phoneNumberNewZealand()
    await accountDetailsPage.fillPhoneNumber()
    await accountDetailsPage.clickContinue();
    await bonusSelectionPage.termsAndCondition()
    await bonusSelectionPage.clickContinue();
    await personalInformationPage.fillFirstName();
    await personalInformationPage.fillLastName();
    await personalInformationPage.fillBirthDate(validData.DOB)
    await personalInformationPage.clickContinue();
    await addressDetailsPage.clickfillCity()
    await addressDetailsPage.ClickAddressLbl()
    await addressDetailsPage.cityError()

  })

  test('Should display error when Postal Code field is empty during registration', async ({ page }) => {
    await homePage.navigate();
    await homePage.clickSignUp();
    await homePage.ReloadPage();
    await countryCurrencyPage.selectCountry(validData.Canada);
    await countryCurrencyPage.selectCurrency(validData.CAD);
    await countryCurrencyPage.clickContinue();
    await accountDetailsPage.fillUsername();
    await accountDetailsPage.fillEmail();
    await accountDetailsPage.fillPassword(validData.password);
    await accountDetailsPage.phoneNumberOptions()
    await accountDetailsPage.phoneNumberNewZealand()
    await accountDetailsPage.fillPhoneNumber()
    await accountDetailsPage.clickContinue();
    await bonusSelectionPage.termsAndCondition()
    await bonusSelectionPage.clickContinue();
    await personalInformationPage.fillFirstName();
    await personalInformationPage.fillLastName();
    await personalInformationPage.fillBirthDate(validData.DOB)
    await personalInformationPage.clickContinue();
    await addressDetailsPage.clickfillZipCode()
    await addressDetailsPage.ClickAddressLbl()
    await addressDetailsPage.zipcodeError()
  })
})