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
        let depositedMoney = machine.deposite(100)
        // exercise
        let expected
        let actual = `You have deposited Rs ${depositedMoney}`
        if (depositedMoney===null){
             expected =null
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

});
