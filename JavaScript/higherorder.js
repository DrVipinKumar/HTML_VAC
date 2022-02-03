function msg(){  //function statement
    console.log("Welcome to callback function")
}

function DisplayMsg(Display){ //higher order function
  Display();
}
DisplayMsg(msg)//first class function
//var obj=()=>{}//function expression
var sum = function (n1, n2){  //function expression/function named expression
    return n1+n2;
}
console.log(sum(12,34))