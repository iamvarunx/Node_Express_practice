//asynchronous -- Non Blocking code -- Non blocking I/O Model 
const fs = require('fs')

fs.readFile('./async.txt','utf-8',(err,data1) => {
    if(err) return console.log("ERROR! ");

    fs.readFile(`./${data1}`,'utf-8',(err,data2) => {
        console.log(data2);
        fs.readFile('./async-txt2.txt','utf-8',(err,data3) => {
            console.log(data3);
            fs.writeFile('asyncOut-txt.txt',`${data2}.\n${data3}`,'utf-8',err =>{
                console.log('Your File HAs been written');

            })
        })
    })
})

console.log("Reading File!!!");