export class BonusSelectionPage {
  constructor(page) {
    this.page = page;
    this.noBonusOption = page.getByText('I don’t want a bonus');
    this.termsAndConditioncheck = page.getByRole('checkbox', { name: 'I agree and understand the' })
    this.continueButton = page.getByRole('button', { name: 'Next' });

  }  


  async selectNoBonus() {
    await this.noBonusOption.click();
  }

  async termsAndCondition() {
    await this.termsAndConditioncheck.check();
  }

  async clickContinue() {
    await this.continueButton.click({ delay: 3000 });
  }
}
