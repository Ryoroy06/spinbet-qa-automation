import { expect } from '@playwright/test';
export class CountryCurrencyPage {
  constructor(page) {
    this.page = page;
    this.countryDropdown = page.getByLabel('Country');
    this.currencyDropdown = page.getByLabel('Currency');
    this.continueButton = page.getByTestId('next-button')
    this.btnback = page.locator('#back-button-id')
  }

  async selectCountry(countryName) {
    await this.countryDropdown.click();
    await this.page.getByRole('option', { name: `flag ${countryName}` }).click();
  }

  async selectCurrency(currency) {
    await this.currencyDropdown.click();
    await this.page.getByRole('option', { name: currency }).click();
    await expect(this.currencyDropdown).toHaveText(currency);
  }

  async clickContinue() {
    await this.continueButton.click({ delay: 3000 });
  }

  async backBtn() {
    await this.btnback.click()

  }
}
