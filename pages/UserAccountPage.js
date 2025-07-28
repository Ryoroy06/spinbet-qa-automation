import { expect } from '@playwright/test';

export class UserAccountPage {
  constructor(page) {
    this.page = page;
    this.searchBarfield = page.getByRole('textbox', { name: 'Search' });
    this.searchBarClick = page.getByTestId('search-button');
    this.playBtn = page.getByRole('link', { name: 'Release the Bison' });
    this.funBtn = page.getByRole('tab', { name: 'FUN' });
  }

  async funButton() {
    await this.funBtn.click();
  }

  async searchBarField(gameName) {
    await this.searchBarClick.click();
    await this.searchBarfield.fill(gameName);
  }

  async playButton() {
    await this.playBtn.first().click();
  }

  async GetUrl() {
    await expect(this.page).toHaveURL(/\/casino-game\/release-the-bison\//);
  }

  async clickCanvasInIframe() {
    await this.page.waitForTimeout(20000);
    const frame = await this.page.frameLocator('iframe[name="game-launcher-by-url"]');
    const canvas = frame.locator('canvas');

    await expect(canvas).toBeVisible();

    await canvas.click({
      position: { x: 880, y: 595 }
    });
  }
}
