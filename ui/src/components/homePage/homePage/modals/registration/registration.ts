import {Component} from '@Core/component';

export class Registration extends Component {
    private LOCATORS = {
        firstName: this.locator.locator('//input[@name="firstName"]'),
        lastName: this.locator.locator('//input[@name="lastName"]'),
        email: this.locator.locator('//input[@name="email"]'),
        password: this.locator.locator('//input[@name="password"]'),
        submitBtn: this.locator.locator('//span[text()="Create UHCGlasses.com Account"]'),
    };

    public async fillRegistrationForm(data: any) {
        await this.LOCATORS.firstName.fill(data.firstName);
        await this.LOCATORS.lastName.fill(data.lastName);
        await this.LOCATORS.email.fill(data.email);
        await this.LOCATORS.password.fill(data.password);
    }

    public async register() {
        await this.LOCATORS.submitBtn.click();
    }
}
