import { Component } from '@Core/component';

export class Welcome extends Component {
    private LOCATORS = {
        welcomePopupTitle: this.locator.locator('//h2[contains(text(), "Welcome")]'),
        welcomePopupSubTitle: this.locator.locator('//p[text()="You can start enjoying everything we have to offer"]'),
    };

    public welcomePopupTitle = this.LOCATORS.welcomePopupTitle;
    public welcomePopupSubTitle = this.LOCATORS.welcomePopupSubTitle;
}
