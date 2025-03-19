//write recursive function to print numbers from 1 to n

function rFunctions(n) {
    if (n < 1) return; 
    rFunctions(n - 1)
    console.log(n); 
}

rFunctions(6);
