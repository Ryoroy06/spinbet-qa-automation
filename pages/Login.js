export class Login {
  constructor(page) {
    this.page = page;
    this.username = page.getByRole('button', { name: 'Sign up' });
  }

  async Cli() {
    await this.page.goto('https://stage.spinbet.com/en-nz');
  }

  async ReloadPage() {
    await this.page.reload();
  }

  async clickSignUp() {
    await this.signUpButton.click();
  }
}
