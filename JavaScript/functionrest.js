function Calculation(Operation, ...values)//rest operator
{
    if (Operation==="sum")
    {
        console.log(`Sum of numbers =${values.reduce((a,b)=>a+b)}`)
    } else if (Operation==="mul")
    {
        console.log(`Multiply of numbers =${values.reduce((a,b)=>a*b)}`)
    }   else if (Operation==="sort")
    {
        console.log(`Sorting of numbers =${values.sort((a,b)=>a-b)}`)
    }
}
Calculation("sum",12,344,55,78,90,34,67,89)
Calculation("mul",12,23,12,456,3)
Calculation("sort",12,344,55,78,90,34,67,89)
// var obj={
// num1:10,
// num2:20,
// }
// console.log(`${obj.num1} and ${obj.num2}`)
// function swap(obj){
//     var temp=obj.num1;
//     obj.num1=obj.num2;
//     obj.num2=temp;
// }
// swap(obj)
// console.log(`${obj.num1} and ${obj.num2}`)
