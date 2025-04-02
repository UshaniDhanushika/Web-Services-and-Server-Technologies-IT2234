let num = 9310;
let digits = [];
let temp = num;

// Extract digits
while (temp > 0) {
    digits.push(temp % 10);  // Get the last digit
    temp = (temp - (temp % 10)) / 10;  // Remove the last digit 
}

// sorting in descending order
for (let i = 0; i < digits.length; i++) {
    for (let j = i + 1; j < digits.length; j++) {
        if (digits[i] < digits[j]) {
            let swap = digits[i];
            digits[i] = digits[j];
            digits[j] = swap;
        }
    }
}

// Construct the maximum number
let maxNum = 0;
for (let i = 0; i < digits.length; i++) {
    maxNum = maxNum * 10 + digits[i];
}

console.log(maxNum);
