let myPromise = new Promise((resolve,reject)=>{
    // reject();
    resolve();
})

myPromise.then(()=>{
    console.log("Success");
}).catch(()=>{
    console.log("Failed");
})

let mypromise1 = new Promise((resolve,reject)=>{
    setTimeout(()=>{
        reject("varun")
    },1000)
})

mypromise1.then((name)=>{
    console.log("Hello "+name);
}).catch((name)=>{
    console.log("Failed "+name);
})