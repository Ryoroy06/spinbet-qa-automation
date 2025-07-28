export class HomePage {
  constructor(page) {
    this.page = page;
    this.signUpButton = page.getByRole('button', { name: 'Sign up' });
    this.loginButton = page.getByRole('button', { name: 'Login' })
    this.username =  page.getByRole('textbox', { name: 'e.g. John Doe' })
    this.password =  page.getByRole('textbox', { name: 'Min 6 characters' })
    this.signInButton = page.getByRole('button', { name: 'Sign In' })
    

  }

  async navigate() {
    await this.page.goto('https://stage.spinbet.com/en-nz');
  }

  async ReloadPage() {
    await this.page.reload();
  }

  async clickSignUp() {
    await this.signUpButton.click();
  }
 async clickLogin() {
    await this.loginButton.click();
  }

   async userNameField(username) {
    await this.username.fill(username);
  }


   async passwordfield(pasword) {
    await this.password.fill(pasword);
  }


   async signInBtn() {
    await this.signInButton.click();
  }



}
