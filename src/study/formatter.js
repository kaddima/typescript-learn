//@ts-nocheck
/**  
* Format something that has a money value
* @param {string} thing - the name of the item
* @param {number} cost - the value associated with the item
*/
export function sizeFormatter(thing, count){
    writeMsg(`the ${thing} has ${count} items`)
}

export function costFormatter(thing, cost){
    writeMsg(`The ${thing} cost $${cost.toFixed(2)}`)
}

export function writeMsg(message){

    console.log(message)
}