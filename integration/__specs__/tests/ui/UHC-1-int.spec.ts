import {Mock} from '@Core/mock';
import {CartPage} from '@Components/cartPage/cartPage';
import {GetCartItemsMock} from '@Mocks/api/mockio/v2/id/get';
import {screen} from '@testing-library/react';
import '@testing-library/jest-dom';

describe('UHC-1-int', () => {
    const mock = Mock.getInstance();
    let cartPage: CartPage;

    beforeAll(async () => {
        cartPage = new CartPage();
        mock.addMocks(new GetCartItemsMock());
    });

    afterAll(() => {
        cartPage.destroy();
    });

    test('UHC-1', async () => {
        await cartPage.fulfill();
        const cartList = await cartPage.getCartList();

        // Step 1

        reporter.startStep('Open modal to add item');
        const modalAddItem = await cartPage.OpenModalAddItem();
        const modalElement = screen.getByText('Add New Cart Item'); // Adjust this based on your modal content
        expect(modalElement).toBeInTheDocument();
        reporter.endStep();

        //Step 2

        const data = {
            name: 'My first item',
            price: 25,
            quantity: 2,
        };

        reporter.startStep('Add item');
        const itemsListBeforeInsertion = await cartList.getCartItems();
        await modalAddItem.fillItemData(data);
        await modalAddItem.create();
        const itemsListAfterInsertion = await cartList.getCartItems();
        expect(itemsListBeforeInsertion.length === itemsListAfterInsertion.length - 1);

        const lastAddedItem = itemsListAfterInsertion[0];
        for (const value of Object.keys(data)) {
            expect((lastAddedItem[value] = data[value]));
        }
        reporter.endStep();

        //Step 3

        reporter.startStep('Delete item');
        await lastAddedItem.delete();
        const itemsListAfterDeletion = await cartList.getCartItems();
        expect(!itemsListAfterDeletion.includes(lastAddedItem));
        reporter.endStep();
    });
});
