import { test } from '@playwright/test';
import { validData, invalidData } from '../data/registrationData.json' assert { type: 'json' };
import { HomePage } from '../pages/HomePage.js';
import { CountryCurrencyPage } from '../pages/CountryAndCurrency.js';
import { AccountDetailsPage } from '../pages/AccountDetails.js';
import { BonusSelectionPage } from '../pages/BonusSelection.js';
import { PersonalInformationPage } from '../pages/PersonalInformation.js';

let homePage;
let countryCurrencyPage;
let accountDetailsPage;
let bonusSelectionPage;
let personalInformationPage;

test.beforeEach(async ({ page }) => {

    homePage = new HomePage(page);
    countryCurrencyPage = new CountryCurrencyPage(page);
    accountDetailsPage = new AccountDetailsPage(page);
    bonusSelectionPage = new BonusSelectionPage(page);
    personalInformationPage = new PersonalInformationPage(page);
});
test.describe('Registration - Personal Information Page', () => {
test('Personal Information Form Validation Errors', async ({ page }) => {
    await homePage.navigate();
    await homePage.clickSignUp();
    await homePage.Reload();
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
    await personalInformationPage.firstNameLabelClick()
    await personalInformationPage.firstNameEmptyError()
    await personalInformationPage.fillFirstNameManual(invalidData.firstame)
    await personalInformationPage.firstNameLabelClick()
    await personalInformationPage.firstNameIntegerAndSpecialError()
    await personalInformationPage.fillLastNameManualClick()
    await personalInformationPage.firstNameLabelClick()
    await personalInformationPage.lastNameEmptyError()
    await personalInformationPage.fillLastNameManualClick()
    await personalInformationPage.firstNameLabelClick()
    await personalInformationPage.fillLastNameManual(invalidData.lastName)
    await personalInformationPage.fillLastNameManualClick()
    await personalInformationPage.firstNameLabelClick()
    await personalInformationPage.lastNameIntegerAndSpecialError()
    await personalInformationPage.fillBirthDate(invalidData.DOBInvalid)
    await personalInformationPage.dobInvalidDate()
    await personalInformationPage.clearBirthDate()
    await personalInformationPage.fillBirthDate(invalidData.DOBPastDate)
    await personalInformationPage.DobYear1990orLaterError()
    await personalInformationPage.clearBirthDate()
    await personalInformationPage.fillBirthDate(invalidData.DOBFutureDate)
    await personalInformationPage.dobFutureDateError()
})

test('Should display error when First Name field is empty during registration', async ({ page }) => {
    await homePage.navigate();
    await homePage.clickSignUp();
    await homePage.Reload();
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
    await personalInformationPage.firstNameLabelClick()
    await personalInformationPage.firstNameEmptyError()
})

test('Should display error when Fist Name contains numbers or special characters', async ({ page }) => {
    await homePage.navigate();
    await homePage.clickSignUp();
    await homePage.Reload();
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
    await personalInformationPage.firstNameLabelClick()
    await personalInformationPage.fillFirstNameManual(invalidData.firstame)
    await personalInformationPage.firstNameLabelClick()
    await personalInformationPage.firstNameIntegerAndSpecialError()
})

test('Should display error when Last Name field is empty during registration', async ({ page }) => {
    await homePage.navigate();
    await homePage.clickSignUp();
    await homePage.Reload();
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
    await personalInformationPage.firstNameLabelClick()
    await personalInformationPage.fillLastNameManualClick()
    await personalInformationPage.firstNameLabelClick()
    await personalInformationPage.lastNameEmptyError()
})

test('Should display error when Last Name contains numbers or special characters', async ({ page }) => {
    await homePage.navigate();
    await homePage.clickSignUp();
    await homePage.Reload();
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
    await personalInformationPage.firstNameLabelClick()
    await personalInformationPage.fillLastNameManual(invalidData.lastName)
    await personalInformationPage.fillLastNameManualClick()
    await personalInformationPage.firstNameLabelClick()
    await personalInformationPage.lastNameIntegerAndSpecialError()
})

test('Should validate Date of Birth with errors for invalid year, future date, and format', async ({ page }) => {
    await homePage.navigate();
    await homePage.clickSignUp();
    await homePage.Reload();
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
    await personalInformationPage.fillBirthDate(invalidData.DOBInvalid)
    await personalInformationPage.dobInvalidDate()
    await personalInformationPage.clearBirthDate()
    await personalInformationPage.fillBirthDate(validData.DOBPastDate)
    await personalInformationPage.DobYear1990orLaterError()
    await personalInformationPage.clearBirthDate()
    await personalInformationPage.fillBirthDate(invalidData.DOBFutureDate)
    await personalInformationPage.dobFutureDateError()
})
})