import { expect } from '@playwright/test';
export class AddressDetailsPage {
  constructor(page) {
    this.page = page;
    this.addressInput = page.getByRole('textbox', { name: 'Address' });
    this.cityInput = page.getByRole('textbox', { name: 'City' });
    this.regionDropdown = page.getByRole('combobox', { name: 'Region' });
    //this.regionDropdownBayOfPlenty = page.getByText('Bay of Plenty Region');
    this.zipCodeInput = page.getByRole('textbox', { name: 'Zip Code' });
    this.continueButton = page.getByRole('button', { name: 'Next' });
    this.lblAddress = page.getByText('Address', { exact: true })
    this.errorAddress = page.getByText('Address cannot be empty')
    this.errorCity = page.getByText('City cannot be empty')
    this.errorZipcode = page.getByText('Postal Code cannot be empty')
  }

  async fillAddress(address) {
    await this.addressInput.fill(address);
  }

    async clickfillAddress() {
    await this.addressInput.click();
  }

   async ClickAddressLbl() {
    await this.lblAddress.click();
  }

  async fillCity(city) {
    await this.cityInput.fill(city);
  }

  async clickfillCity() {
    await this.cityInput.click();
  }

  async selectRegion(regionName) {
    await this.regionDropdown.click();
    await this.page.getByRole('option', { name: regionName }).click();
  }

  async fillZipCode(zip) {
    await this.zipCodeInput.fill(zip);
  }

   async clickfillZipCode() {
    await this.zipCodeInput.click();
  }
async addressError() {
    await expect(this.errorAddress).toHaveText('Address cannot be empty');
  }

  async cityError() {
      await expect(this.errorCity).toHaveText('City cannot be empty');
    }


    async zipcodeError() {
        await expect(this.errorZipcode).toHaveText('Postal Code cannot be empty');
      }

 async clickContinue() {
  await this.continueButton.click({ delay: 3000 });  }
  
}
