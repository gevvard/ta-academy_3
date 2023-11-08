import { Component } from '@Core/component';

export class CartItem extends Component {
    protected selectors = {
        fullPrice: './/div[contains(@class, "fullprice")]',
        priceForOne: './/div[contains(@class, "price-for-one")]',
        addButton: './/button[text()="+"]',
        deleteButton: './/button[@data-testId="delete-btn"]',
    };

    public async getPriceForAll(): Promise<number> {
        const [priceElement] = await this.element.waitForXpath(this.selectors.fullPrice);
        return Number(priceElement.textContent.replace('$', ''));
    }

    public async addOne(): Promise<void> {
        await this.element.clickByXpath(this.selectors.addButton);
    }

    public async delete(): Promise<void> {
        await this.element.clickByXpath(this.selectors.deleteButton);
    }
}
