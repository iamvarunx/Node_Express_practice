// const fetchData = (callback)=>{
//     callback('Data Feetched!')
// }
const fetchData = (callback)=>{
    setTimeout(()=>{
        callback('Data Feetched!')

    },1000)
}

setTimeout(()=>{
    fetchData((result)=>{
        console.log(result)
    })
},2000);

console.log("Hi");
console.log("Hello");