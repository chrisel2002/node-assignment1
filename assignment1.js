function displaymessage(message){
    return new Promise((resolve,reject)=>{
        setTimeout(()=>{
            console.log(message);
            resolve();
            
        },2000);
    });
}

displaymessage("Hello, this is a promise!")
.then(()=>{
    console.log("promise resolved successfully.");

})
.catch((error)=>{
    consolve.error("An error occurred:",error);
});