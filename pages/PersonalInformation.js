import { DataGenerator } from '../utils/DataGenerators.js';
import { expect } from '@playwright/test';

export class PersonalInformationPage {
  constructor(page) {
    this.page = page;
    this.firstNameInput = page.getByRole('textbox', { name: 'First Name' });
    this.lastNameInput = page.getByRole('textbox', { name: 'Last Name' });
    this.birthDateInput = page.getByPlaceholder('DD/MM/YYYY');
    this.continueButton = page.getByRole('button', { name: 'Next' });
    this.errorFirstNameEmpty = page.getByText('First name cannot be empty')
    this.errorFirstNameIntegerAndSpecial = page.getByText('First name should not consist')
    this.errorLastNameEmpty = page.getByText('Last name cannot be empty')
    this.errorLastNameIntegerAndSpecial = page.getByText('Last name should not consist')
    this.errorDOB1990andLater = page.getByText('Invalid year. Year should be')
    this.errorDOBfuture = page.getByText('Date of birth cannot be in')
    this.errorInvalidDate = page.getByText('Invalid date value.')
    this.labelfirstName = page.getByText('First Name', { exact: true })
  }

  async fillFirstName() {
    const firstName = DataGenerator.generateFirstAndLastName();
    await this.firstNameInput.fill(firstName);
    return firstName;
  }

  async fillFirstNameManual(firstname) {
    await this.firstNameInput.fill(firstname);
  }

    async fillFirstNameManualclick() {
    await this.firstNameInput.click();
  }

   async fillLastNameManualClick() {
    await this.lastNameInput.click();
  }

  async fillLastNameManual(lastname) {
    await this.lastNameInput.fill(lastname);
  }

  async fillLastName() {
    const lastName = DataGenerator.generateFirstAndLastName();
    await this.lastNameInput.type(lastName);
    return lastName;
  }

  async fillBirthDate(date) {
    await this.birthDateInput.click()
    await this.birthDateInput.type(date, { delay: 1000 });

  }

  async clearBirthDate() {
    await this.birthDateInput.clear()
   
  }


  async firstNameLabelClick() {
    await this.labelfirstName.click()
  }




  async firstNameEmptyError() {
    await expect(this.errorFirstNameEmpty).toHaveText('First name cannot be empty');
  }


  async firstNameIntegerAndSpecialError() {
    await expect(this.errorFirstNameIntegerAndSpecial).toHaveText('First name should not consist an integer or special characters');
  }


  async lastNameIntegerAndSpecialError() {
    await expect(this.errorLastNameIntegerAndSpecial).toHaveText('Last name should not consist an integer or special characters');
  }

  async lastNameEmptyError() {
    await expect(this.errorLastNameEmpty).toHaveText('Last name cannot be empty');
  }

  async DobYear1990orLaterError() {
    await expect(this.errorDOB1990andLater).toHaveText('Invalid year. Year should be 1900 or later.');
  }

  async dobFutureDateError() {
    await expect(this.errorDOBfuture).toHaveText('Date of birth cannot be in the future.');
  }

  async dobInvalidDate() {
    await expect(this.errorInvalidDate).toHaveText('Invalid date value.');
  }


  async dobError() {
    await this.continueButton.click({ delay: 1500 });
  }




  async clickContinue() {
    await this.continueButton.click({ delay: 2000 });
  }
}
