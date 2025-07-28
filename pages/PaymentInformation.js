import { expect } from '@playwright/test';

export class PaymentPage {
  constructor(page) {
    this.page = page;
    this.CCclick = page.getByText('Credit Card')
    this.cashierIframe = page.frameLocator('#cashierIframe');
    this.amountInput = this.cashierIframe.locator('#amount');
    this.depositButton = this.cashierIframe.getByRole('button', { name: 'Deposit' });
    this.cardNameInput = this.cashierIframe
      .frameLocator('iframe[name="hosted-field-single-iframe"]')
      .getByRole('textbox', { name: 'Name' });
    this.cardNumberInput = this.cashierIframe
      .frameLocator('iframe[name="hosted-field-single-iframe"]')
      .getByRole('textbox', { name: 'Card number' });
    this.expiryInput = this.cashierIframe
      .frameLocator('iframe[name="hosted-field-single-iframe"]')
      .getByRole('textbox', { name: '•• / ••' });
    this.securityCodeInput = this.cashierIframe
      .frameLocator('iframe[name="hosted-field-single-iframe"]')
      .getByRole('textbox', { name: 'Security Code' });
    this.errorBelowMinAmount = page.locator('#cashierIframe').contentFrame().getByText('Amount below min limit')
    this.errorAboveMinAmount = page.locator('#cashierIframe').contentFrame().getByText('Amount above max limit')
    this.errorInvalidAccountNumber = page.locator('#cashierIframe').contentFrame().getByText('Invalid cardnumber.')
    this.errorCCExpInvalid = page.locator('#cashierIframe').contentFrame().getByText('cc-exp is invalid')
    this.errorCvcInvalid = page.locator('#cashierIframe').contentFrame().getByText('cvc is invalid')
  


  

  }

   async clickCreditCard() {
    await this.CCclick.click({ delay: 3000 });
  }

  async selectAmount(amount) {
    await this.amountInput.fill(amount);
  }

  async fillCardName(name) {
    await this.cardNameInput.fill(name);
  }

  async fillCardNumber(number) {
    await this.cardNumberInput.fill(number);
  }

  async fillExpiryDate(date) {
    await this.expiryInput.fill(date);
  }

  async fillSecurityCode(code) {
    await this.securityCodeInput.fill(code);
  }

async aboveAmountError() {
  await this.page.waitForTimeout(3000);
  await expect(this.errorBelowMinAmount).toHaveText('Amount below min limit');
}

async maxAmountError() {
  await this.page.waitForTimeout(3000);
  await expect(this.errorAboveMinAmount).toHaveText('Amount above max limit');
}

async invalidCardNumberError() {
  await this.page.waitForTimeout(3000);
  await expect(this.errorInvalidAccountNumber).toHaveText('Invalid cardnumber.');
}

async ccExpInvalid() {
  await this.page.waitForTimeout(3000);
  await expect(this.errorCCExpInvalid).toHaveText('cc-exp is invalid');
}

async cvcInvalid() {
  await this.page.waitForTimeout(3000);
  await expect(this.errorCvcInvalid).toHaveText('cvc is invalid');
}

  async clickDeposit() {
    await this.depositButton.click({ delay: 3000 });
  }
}
