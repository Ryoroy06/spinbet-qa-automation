import { test } from '@playwright/test';
import { credentials, games} from '../data/registrationData.json' assert { type: 'json' };
import { HomePage } from '../pages/HomePage.js';
import { UserAccountPage } from '../pages/UserAccountPage.js';

let homePage;
let accountPage

test.beforeEach(async ({ page }) => {

    homePage = new HomePage(page);
    accountPage = new UserAccountPage(page);
});

test('Validate Game Search and Launch Functionality', async ({ page }) => {
    await homePage.navigate();
    await homePage.clickLogin();
    await homePage.userNameField(credentials.Username);
    await homePage.passwordfield(credentials.Password);
    await homePage.signInBtn();
    await accountPage.searchBarField(games.releaseTheBison)
    await accountPage.playButton() 
    await accountPage.funButton()
    await accountPage.GetUrl()
    await accountPage.clickCanvasInIframe()
})












test('test', async ({ page }) => {
    await page.goto('https://stage.spinbet.com/en-nz/?overlay=personal-information');
    await page.getByRole('button', { name: 'Login' }).click();
    await page.getByRole('textbox', { name: 'e.g. John Doe' }).click();
    await page.getByRole('textbox', { name: 'e.g. John Doe' }).fill('RoyIgamingAcc');
    await page.getByRole('textbox', { name: 'Min 6 characters' }).click();
    await page.getByRole('textbox', { name: 'e.g. John Doe' }).fill('RoyIgamingAccTest123123');
    await page.getByRole('textbox', { name: 'Min 6 characters' }).fill('Test123123');
    await page.getByRole('button', { name: 'Sign In' }).click();
    await page.getByRole('textbox', { name: 'e.g. John Doe' }).dblclick();
    await page.getByRole('textbox', { name: 'e.g. John Doe' }).click();
    await page.getByRole('textbox', { name: 'e.g. John Doe' }).fill('RoyIgamingAcc');
    await page.getByRole('button', { name: 'Sign In' }).click();
    await page.goto('https://stage.spinbet.com/en-nz/');
    await page.getByTestId('search-button').click();
    await page.getByRole('textbox', { name: 'Search' }).fill('');
    await page.getByRole('textbox', { name: 'Search' }).press('CapsLock');
    await page.getByRole('textbox', { name: 'Search' }).fill('C');
    await page.getByRole('textbox', { name: 'Search' }).press('CapsLock');
    await page.getByRole('textbox', { name: 'Search' }).fill('Country ');
    await page.getByRole('textbox', { name: 'Search' }).press('CapsLock');
    await page.getByRole('textbox', { name: 'Search' }).fill('Country F');
    await page.getByRole('textbox', { name: 'Search' }).press('CapsLock');
    await page.getByRole('textbox', { name: 'Search' }).fill('Country Farming');
    await page.getByRole('link', { name: 'Play now' }).click();
    await page.goto('https://stage.spinbet.com/en-nz/casino-game/country-farming/');
    await page.getByRole('tab', { name: 'FUN' }).click();
    await page.locator('iframe[name="game-launcher-by-url"]').contentFrame().locator('canvas').click({
        position: {
            x: 880,
            y: 595
        }
    });
    await page.locator('iframe[name="game-launcher-by-url"]').contentFrame().locator('canvas').click({
        position: {
            x: 622,
            y: 355
        }
    });
    await page.locator('iframe[name="game-launcher-by-url"]').contentFrame().locator('canvas').click({
        position: {
            x: 306,
            y: 589
        }
    });
});