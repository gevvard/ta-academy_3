import { Component } from '@Core/component';
import { everySeries } from 'p-iteration';


export class MyAccount extends Component {
    private LOCATORS = {
        loginBtn: this.locator.locator(`//button[text()="Log in"]`),
    };


    public async openLoginDialog() {
        await this.LOCATORS.loginBtn.click(); 
    }
}
