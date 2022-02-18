import {cal} from './import1.mjs'
console.log(`Sum of 2 number =${cal.sum(12,34)}`)
console.log(`Multiply of 2 number =${cal.mul(12,34)}`)
document.getElementById("sum").innerText=cal.sum(12,34)