import { test } from '@playwright/test';
import { validData } from '../data/registrationData.json' assert { type: 'json' };

import { HomePage } from '../pages/HomePage.js';
import { CountryCurrencyPage } from '../pages/CountryAndCurrency.js';
import { AccountDetailsPage } from '../pages/AccountDetails.js';
import { BonusSelectionPage } from '../pages/BonusSelection.js';
import { PersonalInformationPage } from '../pages/PersonalInformation.js';
import { AddressDetailsPage } from '../pages/AddressDetails.js';
import { PaymentPage } from '../pages/PaymentInformation.js';


let homePage;
let countryCurrencyPage;
let accountDetailsPage;
let bonusSelectionPage;
let personalInformationPage;
let addressDetailsPage;
let paymentPage;

test.beforeEach(async ({ page }) => {
  homePage = new HomePage(page);
  countryCurrencyPage = new CountryCurrencyPage(page);
  accountDetailsPage = new AccountDetailsPage(page);
  bonusSelectionPage = new BonusSelectionPage(page);
  personalInformationPage = new PersonalInformationPage(page);
  addressDetailsPage = new AddressDetailsPage(page);
  paymentPage = new PaymentPage(page);
});

test('full signup flow', async ({ page }) => {
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
  await addressDetailsPage.fillAddress(validData.Address);
  await addressDetailsPage.fillCity(validData.City);
  await addressDetailsPage.selectRegion(validData.Region);
  await addressDetailsPage.fillZipCode(validData.ZipCode);
  await addressDetailsPage.clickContinue();
  await paymentPage.clickCreditCard()
  await paymentPage.selectAmount(validData.selectAmount);
  await paymentPage.fillCardName(validData.CardName);
  await paymentPage.fillCardNumber(validData.CardNumber); 
  await paymentPage.fillExpiryDate(validData.Date);
  await paymentPage.fillSecurityCode(validData.SecurityCode);
  await paymentPage.clickDeposit();
}
);


