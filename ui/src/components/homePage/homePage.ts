import { Container } from '@Core/container';
import { Header } from '@Components/homePage/homePage/header';
import { Modals } from './homePage/modals/modals';
import { Welcome } from './homePage/welcome/welcome';

export class HomePage extends Container {
    protected LOCATORS = {
        header: this.page.locator('//div[contains(@class, "header__wrapHeader")]'),
        modals: this.page.locator('//div[contains(@class, "ReactModal__Content")]'),
        welcomePopup: this.page.locator('//div[@class="rc-dialog welcomePopup"]'),
    };

    public welcomeModalContainer = this.LOCATORS.welcomePopup;

    public Header = new Header(this.LOCATORS.header, this.page);
    public Modals = new Modals(this.LOCATORS.modals, this.page);
    public Welcome = new Welcome(this.LOCATORS.welcomePopup, this.page);

    public async open(): Promise<void> {
        await this.page.goto('/', { waitUntil: 'domcontentloaded' });
    }
}
