import { expect, test } from '@Test';

test.describe('UHC-1-POM', () => {
    test('Check registration flow', async ({ page, homePage, categoryPage }) => {
        await test.step('Step 1: Open Login dialog', async () => {
            await homePage.open();
            await homePage.Header.TopSide.openMyAccountDropdown();
            await homePage.Header.TopSide.MyAccount.openLoginDialog();
            await expect(homePage.Modals.loginDlgTitle).toBeVisible();
        });

        await test.step('Step 2: Open Registration dialog', async () => {
            await homePage.Modals.openRegModal();
            await expect(homePage.Modals.regModalTitle).toBeVisible();
        });

        await test.step('Step 3: Register an account', async () => {
            const regData = {
                firstName: 'Ivan',
                lastName: 'Ivanov',
                email: `test${Math.random() * 100}@test.com`,
                password: 'Test1234',
            };
            await homePage.Modals.Registration.fillRegistrationForm(regData);
            await homePage.Modals.Registration.register();
            await expect(homePage.Modals.regModalTitle).toBeHidden();
            await expect(homePage.welcomeModalContainer).toBeVisible();
            await expect(homePage.Welcome.welcomePopupTitle).toBeVisible();
            await expect(homePage.Welcome.welcomePopupSubTitle).toBeVisible();
        });
    });
});
