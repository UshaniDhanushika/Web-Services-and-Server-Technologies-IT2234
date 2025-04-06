//Async / Await 
//This is the better way to fine errors


const fs = require('fs').promises;

const readFile = async() => {

    try{
        //Second way - for execute multiple operations 
        const[data,data2,data3] = await Promise.allSettled([  // If you want to find individual data status of the operations you should use "Promise.allSettled"
            fs.readFile('file.txt','utf8'),
            fs.readFile('data.txt','utf8'),
            fs.readFile('data2.txt','utf8') // if you put wrong path(there is no file named data2.txt) data3.status will be rejected 
              
        ])
        
        
        console.log(data.value) // value = you will get the output
        console.log(data2.value)
        console.log(data)
        console.log(data2)
        console.log(data.status);  // status = you can get fullfilled or rejected 
        console.log(data2.status)
        console.log(data3.status)
 
    
    } catch (err){
      
        console.error(err);
    }

}

readFile()
