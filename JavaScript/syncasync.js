function msg1(){
    console.log("Message 1...")
}
function msg3(){
console.log("Message 3...")
}
function msg4(){
   // for (var i=0;i<9999999;i++)
    setTimeout(function(){
            console.log("Message 4...")
    },1000)
}
msg1()
msg4()//asynchronous programming
console.log("Message 2")   //synchronous programming
msg3()
console.log("Message 5")
console.log("Message 6")