let items = [{'crisps': 100}, {'chocolate': 350}, {'mints': 70}]
module.exports = class Machine {
   
    constructor() {
   

    }
    seeSelections() {
        return items
    }
    deposite(depositeMoney){
        return `You have deposited Rs ${depositeMoney}`
    }
};