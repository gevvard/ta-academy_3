import { test, expect } from '@Test';

test.describe('UHC-1', () => {
    test('check registration ', async ({ page, baseURL }) => {
        await page.goto(baseURL, { waitUntil: 'domcontentloaded' });

        // Step 1
        await page.locator('//div[text()="My Account"]/../..').hover();
      
        const loginBtn = page.getByText("Log in");

        await loginBtn.click();

        const loginDlg = await page.getByText("Access your vision benefits");
      
        await expect(loginDlg).toBeVisible();

        // Step 2
        const regBtn = await page.getByText('Create UHCGlasses.com Account');
        await regBtn.click();

        const regDlg =  await page.getByText('No vision insurance? We got you!');
        await  expect(regDlg).toBeVisible();

        // Step 3
        const firstNameInput = page.getByPlaceholder('First Name');
        await firstNameInput.type('Ivan');

        const lastNameInput = page.getByPlaceholder('Last Name');
        await lastNameInput.type('Ivanov');

        const emailInput = page.getByPlaceholder('Email');

        await emailInput.type(`test${Math.random() * 100}@test.com`);

        const passwordInput = page.getByPlaceholder('Password');
        await passwordInput.type('Test1234');

        const btn = page.getByText('Create UHCGlasses.com Account');
        await btn.click();

        await expect(regDlg).toBeHidden();

        const welcomePopup = page.locator('div.welcomePopup');

        await expect(welcomePopup).toBeVisible();
        const welcomePopupTitle = page.getByText('Welcome, Ivan');
        await expect(welcomePopupTitle).toBeVisible();

        const welcomePopupSubTitle = page.getByText(
            'You can start enjoying everything we have to offer'
        );

        await expect(welcomePopupSubTitle).toBeVisible();
    });
});
