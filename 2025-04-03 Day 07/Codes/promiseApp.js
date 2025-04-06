/*

Promise 

It is object from a operation

mention the status of the operation 

has 3  states:
    1. pending / waiting 
    2. fullfiled / resolved - operation is done 
    3. Rejected / error

*/


const fs = require('fs').promises;

const readFile = (filepath) => {

    return fs.readFile('data.txt','utf8') // return a promise

} 

readFile('file.txt').then((data)=> {

    console.log(data)

})

.catch((err)=> {

    console.error(err);

})
