import { Component } from '@Core/component';
import { MyAccount } from './topSide/myAccount';

export class TopSide extends Component {
    private LOCATORS = {
        myAccount: this.locator.locator('//div[text()="My Account"]/../..'),
    };

    public async openMyAccountDropdown() {
        await this.LOCATORS.myAccount.hover();
    }

    public MyAccount = new MyAccount(this.LOCATORS.myAccount, this.page);
}
