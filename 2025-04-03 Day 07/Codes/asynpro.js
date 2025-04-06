/*Syn  
1
2
3

async

event driven and non I/O bloking programme

1 - Read a File
2 - reqest data form an api form internet
3 - print message

213

*/

const fs = require('fs');
fs.readFile('file.txt','utf8',(err,data) => {

    if(err) 
    {
        console.error(err);
        return 0;

    }

    console.log(data);

});

console.log("File reading id done...")


