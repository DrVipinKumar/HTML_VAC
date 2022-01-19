function sum(num1, num2){
    return num1+num2;
}
function result(sum){
    console.log("Sum of 2 number is ="+sum)
}
var s =sum(23,56)
result(s)
function mul(num1, num2, resultfun){
    var m=num1*num2; 
    resultfun("Multiply of 2 number is ="+m)
}
function output(info){
    console.log(info)
}
function div (num1, num2, resultfun){
    var d =num1/num2
    resultfun("Divsion is ="+d)
}
mul(23,34,output)  //callback function
div(234,45,output) //callback function