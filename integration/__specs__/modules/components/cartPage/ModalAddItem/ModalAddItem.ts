import { Component } from '@Core/component';
import { fireEvent } from '@testing-library/react';

export class ModalAddItem extends Component {
    protected selectors = {
        // fullPrice: './/div[contains(@class, "fullprice")]',
        quantity: '//input[@name="quantity"]',
        price: '//input[@name="price"]',
        name: '//input[@name="name"]',
        createButton: './/button[text()="Create"]',
    };

    // public async getPriceForAll(): Promise<number> {
    //     const [priceElement] = await this.element.waitForXpath(this.selectors.fullPrice);
    //     return Number(priceElement.textContent.replace('$', ''));
    // }
    //
    public async fillItemData(data): Promise<void> {
        const [name] = await this.element.waitForXpath(this.selectors.name);
        fireEvent.change(name, { target: { value: data?.name } });

        const [quantity] = await this.element.waitForXpath(this.selectors.quantity);
        fireEvent.change(quantity, { target: { value: data?.quantity } });

        const [price] = await this.element.waitForXpath(this.selectors.price);
        fireEvent.change(price, { target: { value: data?.price } });
    }

    public async create(): Promise<void> {
        const [createButton] = await this.element.waitForXpath(this.selectors.createButton);
        fireEvent.click(createButton);
    }
}
