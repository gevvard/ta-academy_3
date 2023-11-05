import {Component} from '@Core/component';
import {Registration} from './registration/registration';

export class Modals extends Component {
    private LOCATORS = {
        loginDlgTitle: this.locator.locator('//h2[text()="Access your vision benefits"]'),
        regModalTitle: this.locator.locator('//h2[text()="No vision insurance? We got you!"]'),
        regBtn: this.locator.locator('//span[text()="Create UHCGlasses.com Account"]'),
        regModal: this.locator.locator('//h2[text()="No vision insurance? We got you!"]'),
    };

    public async openRegModal() {
        await this.LOCATORS.regBtn.click();
    }

    public loginDlgTitle = this.LOCATORS.loginDlgTitle;
    public regModalTitle = this.LOCATORS.regModalTitle;

    public Registration = new Registration(this.locator, this.page);

}
