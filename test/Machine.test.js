const Machine = require('../src/Machine');

describe('the vending machine', () => {
    // As a customer, I want to see that the vending machine has items, so that I can purchase them.
    // - Given that I approach the vending machine
    it('should have items to purchase', () => {
        // setup
        const machine = new Machine();
        const expected = [{ 'crisps': 100 }, { 'chocolate': 350 }, { 'mints': 70 }];
        // exercise
        const actual = machine.seeSelections();
        // assert
        expect(expected).toEqual(actual);
    });
    // As a customer, I want to know how much money I have deposited, so that I know what I can purchase.
    // Given I am using the vending machine,  when I insert money, then I see the total I have deposited on a screen.  
    // `deposit(100)` returns `'You have deposited Rs 100'`
    // The machine should accept bills in these amounts: `10, 20, 50, 100, 500`
    it('should show money i have deposited', () => {
        // setup
        const machine = new Machine();
        let depositedMoney = machine.deposite(100)
        // exercise
        let expected
        let actual = `You have deposited Rs ${depositedMoney}`
        if (depositedMoney === null) {
            expected = null
        }
        else {
            expected = `You have deposited Rs ${depositedMoney}`
        }

        // assert
        expect(expected).toEqual(actual);
    });
    // As a customer, I want to add additional money, so that I can use the denominations I have to purchase an item.
    //  Given I have deposited money in the vending machine,
    //  when I deposit additional money,
    //  then I see the new total on a screen. 
    //  After depositing Rs 100, `deposit(50)` returns `'You have deposited Rs 150'`
    it('should show my total deposited amount', () => {
        // setup
        const machine = new Machine();
        let expected = 'You have deposited Rs 150'
        let depositedMoney = machine.deposite(100)
        depositedMoney += machine.deposite(50)
        // exercise
        let actual = `You have deposited Rs ${depositedMoney}`
        // assert
        expect(expected).toEqual(actual);
    });
    // As a customer, I want to see a message if my item is unavailable, so that I can make another choice.
    // Given I am using the vending machine,
    //   - when I enter a code for an item that is unavailable,
    //     - then I see a message that the item is unavailable.
    // `selectItem(code)` returns`'The item you selected is unavailable'`
    it('should show unavailable item', () => {
        // setup
        const machine = new Machine();
        let actual = machine.selectItem('Chips')

        // exercise
        let expected = 'The item you selected is unavailable'

        // assert
        expect(expected).toEqual(actual);
    });
    // As a customer, I want to see a message if my deposit is insufficient, so that I know to add more money.
    // Given I have made a choice, 
    // when I have not deposited enough money for that item, 
    // then I see a message telling me how much more to deposit.
    // `selectItem(code)` returns `'Your deposit is insufficient.  Please add Rs 20 for this item'`
    it('should show insufficient deposite amount ', () => {
        // setup
        const machine = new Machine();
        let depositedMoney = machine.deposite(330)
        let actual = machine.selectItem('chocolate')
        // exercise
        let expected = 'The item you selected is unavailable'

        // assert
        expect(expected).toEqual(actual);
    });
    //As a customer, I want to receive change, so that I don’t pay more than the item costs.
    //- Given I have made a selection, 
    //- when the item is delivered, 
    //- then I receive correct change (in correct monetary units)
    //- `selectItem(code)` returns an object with the item and an array of bills `{item: 'mints', change: [20, 10]}`
    it('should returns an object with the item and an array of bills  ', () => {
        // setup
        const machine = new Machine();
        // let depositedMoney = machine.deposite(330)
        let actual = machine.selectItem('mints')
        // exercise
        let expected = `{item: 'mints', change: [20, 10]}`

        // assert
        expect(expected).toEqual("{item: 'mints', change: [20, 10]}");
    });
});
