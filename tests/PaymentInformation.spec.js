import { test, expect,describe } from '@playwright/test';
import { validData, invalidData } from '../data/registrationData.json' assert { type: 'json' };

// Import your Page Object classes
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

test.describe('Registration - Payment Information Page', () => {
test('Should validate all payment input errors during registration', async ({ page }) => {
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
  await paymentPage.selectAmount(invalidData.Amount);
  await paymentPage.fillCardName(validData.CardName);
  await paymentPage.fillCardNumber(validData.CardNumber);
  await paymentPage.fillExpiryDate(validData.Date);
  await paymentPage.fillSecurityCode(validData.SecurityCode);
  await paymentPage.clickDeposit();
  await paymentPage.maxAmountError()
  await paymentPage.fillCardNumber('');
  await paymentPage.fillCardNumber(invalidData.CardNumber);
  await paymentPage.clickDeposit();
  await paymentPage.invalidCardNumberError()
  await paymentPage.fillCardNumber(validData.CardNumber);
  await paymentPage.fillExpiryDate('');
  await paymentPage.fillExpiryDate(invalidData.Date);
  await paymentPage.clickDeposit();
  await paymentPage.ccExpInvalid();
  await paymentPage.fillExpiryDate('');
  await paymentPage.fillExpiryDate(validData.Date);
  await paymentPage.fillSecurityCode('');
  await paymentPage.fillSecurityCode(invalidData.SecurityCode);
  await paymentPage.clickDeposit();
  await paymentPage.cvcInvalid();
})

test('Should display "Amount above max limit" error when entering amount exceeding limit during registration', async ({ page }) => {
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
  await paymentPage.selectAmount(invalidData.Amount);
  await paymentPage.fillCardName(validData.CardName);
  await paymentPage.fillCardNumber(validData.CardNumber);
  await paymentPage.fillExpiryDate(validData.Date);
  await paymentPage.fillSecurityCode(validData.SecurityCode);
  await paymentPage.clickDeposit();
  await paymentPage.maxAmountError()
})


test('should display "Invalid card number" error when using an invalid card', async ({ page }) => {
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
  await paymentPage.selectAmount(validData.Amount);
  await paymentPage.fillCardName(validData.CardName);
  await paymentPage.fillCardNumber(invalidData.CardNumber);
  await paymentPage.fillExpiryDate(validData.Date);
  await paymentPage.fillSecurityCode(validData.SecurityCode);
  await paymentPage.clickDeposit();
  await paymentPage.invalidCardNumberError()
})

test('Should display "Invalid expiration date" error when cc-exp is invalid during registration', async ({ page }) => {
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
  await paymentPage.selectAmount(validData.Amount);
  await paymentPage.fillCardName(validData.CardName);
  await paymentPage.fillCardNumber(validData.CardNumber);
  await paymentPage.fillExpiryDate(invalidData.Date);
  await paymentPage.fillSecurityCode(validData.SecurityCode);
  await paymentPage.clickDeposit();
  await paymentPage.ccExpInvalid();
})

test('Should display "Invalid CVC" error when CVC is invalid during registration', async ({ page }) => {
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
  await paymentPage.selectAmount(validData.Amount);
  await paymentPage.fillCardName(validData.CardName);
  await paymentPage.fillCardNumber(validData.CardNumber);
  await paymentPage.fillExpiryDate(validData.Date);
  await paymentPage.fillSecurityCode(invalidData.SecurityCode);
  await paymentPage.clickDeposit();
  await paymentPage.cvcInvalid();
})
})