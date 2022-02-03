var check=true
var myPromise=new Promise((resolve,reject)=>{
    if (check){
        resolve("Promise completed")
    }else {
        reject("Promose not completed")
    }
});
async function display(){
    console.log("I am in display function")
    try {
    var result =await myPromise
    console.log(result)
    } catch{
        console.log("Not completed")
    }
}
display()