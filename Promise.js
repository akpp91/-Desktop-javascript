const myPromise =  new Promise((resolve,reject) =>
{
    setTimeout(() => {
        const data ="p resolved"
        resolve(data);
    }, 1000);
 
});

myPromise.then((result)=>{
    console.log("promise :"+result);
}).catch((error)=>{
    console.error("log :"+error);
})