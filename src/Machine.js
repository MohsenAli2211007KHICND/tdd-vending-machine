let items = [{'crisps': 100}, {'chocolate': 350}, {'mints': 70}]
const acceptAmount = [10,20,50,100,500]
let amount
module.exports = class Machine {
   
    constructor() {
   

    }
    seeSelections() {
        return items
    }
    deposite(depositeMoney){
        amount += depositeMoney;
        if (acceptAmount.includes(depositeMoney)){
        return depositeMoney
        }
        return null
    }
    selectItem(code) {
        
        for (let i=0; i<items.length; i++){
            for(let k in items[i]){
                if (k==code){
                    if (items[i][k]< amount){
                        return `Your deposit is insufficient.  Please add Rs ${amount-items[i][k]} for this item`
                    }
                    return  `${code} is available`
                }
            }
            return 'The item you selected is unavailable' 
            }
            
    }
};