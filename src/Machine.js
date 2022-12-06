let items = [{'crisps': 100}, {'chocolate': 350}, {'mints': 70}]
module.exports = class Machine {
   
    constructor() {
   

    }
    seeSelections() {
        return items
    }
    deposite(depositeMoney){
        if (depositeMoney %10 ===0){
        return depositeMoney
        }
        return null
    }
    selectItem(code) {
        for (let i=0; i<items.length; i++){
            for(let k in items[i]){
                if (k==code){
                    return  `${code} is available`
                }
                else {
                   return 'The item you selected is unavailable' 
                }
            }
            }
            
    }
};