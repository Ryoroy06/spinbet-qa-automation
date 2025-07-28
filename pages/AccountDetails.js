import { DataGenerator } from '../utils/DataGenerators.js';
import { expect } from '@playwright/test';

export class AccountDetailsPage {
  constructor(page) {
    this.page = page;
    this.usernameInput = page.getByRole('textbox', { name: 'e.g. John Doe' });
    this.emailInput = page.getByRole('textbox', { name: 'your@email.address' });
    this.phoneInput = page.getByTestId('phone_number');
    this.password =  page.getByRole('textbox', { name: 'Min 6 characters' });
    this.numberOption = page.getByLabel('+').locator('div').filter({ hasText: '+' })
    this.canadaNumb = page.getByRole('option', { name: 'flag +1' })
    this.newZealandNumb = page.getByRole('option', { name: 'flag +64' })
    this.continueButton = page.locator('[data-testid="next-button"]');
    this.usernamelbl = page.getByText('Username', { exact: true })
    this.errorUsername = page.getByText('Your username must be at')
    this.errorEmail = page.getByText('Email provided is invalid.')
    this.errorPassword = page.getByText('Password should be at least 6');
    this.errorMobileNumber = page.getByText('Mobile number is required')
  
  }

  async fillUsername() {
    const username = DataGenerator.generateNameWithRoy();
    await this.usernameInput.fill(username);
    return username;
  }

  async fillUsernameManual(username) {
    await this.usernameInput.fill(username);
  }

  
  async fillPassword(password) 
    {
  await this.password.fill(password);
}

  async fillEmail() {
    const email = DataGenerator.generateEmailNoSpecialChars();
    await this.emailInput.fill(email);
    return email;
  }
   async fillEmailManual(email) {
    await this.emailInput.fill(email);
  }
  async fillPhoneNumberManualClick() {
    await this.phoneInput.click();
  }

  async fillPhoneNumber() {
    const phone = DataGenerator.generateNZPhoneNumberLocal();
    await this.phoneInput.fill(phone);
    return phone;
  }
   async phoneNumberOptions() {
    await this.numberOption.click();
  }

  async phoneNumberCanada() {
    await this.canadaNumb.click();
  }

   async phoneNumberNewZealand() {
    await this.newZealandNumb.click();
  }

   async phoneNumberCanada () {
    await this.canadaNumb.click();
  }

  async clickContinue() {
    await this.continueButton.click({ delay: 3000 });
  }

  async usernamalabel() {
  await expect(this.usernamelbl).toHaveText('Username');
  }
  async usernamalabelClick() {
  await this.usernamelbl.click()
  }

  

  async userNameError() {
  await expect(this.errorUsername).toHaveText('Your username must be at least 6 characters long.');
  }

   async emailError() {
  await expect(this.errorEmail).toHaveText('Email provided is invalid.');
  }

    async passwordError() {
  await expect(this.errorPassword).toHaveText('Password should be at least 6 characters.');
  }
    async mobileError() {
  await expect(this.errorMobileNumber).toHaveText('Mobile number is required');
  }


}
