var check=false 
function notifyDownload(){
    check=true
    return new Promise(function(resolve, reject){
        if (check==true)
        {
                resolve("Download completed")
        }
        else {
            reject("Download not completed")
        }
    });
}

notifyDownload().then(function(result){
 console.log(result)
 console.log("Start another download")
}).catch(function(error){
    console.log(error)

})
// notifyDownload().then(
//   function(result){
//     console.log(result)
//    },
//    function(error){
//     console.log(error)
// })