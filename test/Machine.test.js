const Machine = require('../src/Machine');

describe('the vending machine', () => {
    // As a customer, I want to see that the vending machine has items, so that I can purchase them.
    // - Given that I approach the vending machine
    it('should have items to purchase', () => {
        // setup
        const machine = new Machine();
        const expected = [{'crisps': 100}, {'chocolate': 350}, {'mints': 70}];
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
        let depositedMoney = machine.deposite(25)
        // exercise
        let expected
        if (depositedMoney===null){
             expected =null
        }
        else {
             expected = `You have deposited Rs ${depositedMoney}`
        }
        
        // assert
        expect(expected).toEqual(depositedMoney);
    });

});
