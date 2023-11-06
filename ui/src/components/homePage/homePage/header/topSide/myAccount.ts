import { Component } from '@Core/component';

export class MyAccount extends Component {
    private LOCATORS = {
        loginBtn: this.locator.locator(`//button[text()="Log in"]`),
    };

    public async openLoginDialog() {
        await this.LOCATORS.loginBtn.click();
    }
}
