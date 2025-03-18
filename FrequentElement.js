//[4,8,3,4,3,2,1,8,4]
 //find the most frequent element in the array

let arr = [4, 8, 3, 4, 3, 2, 1, 8, 4];
console.log("The array is: " + arr)


let frequency = {};
let maxCount = 0;
let mostFrequent;

arr.forEach(num => {
    frequency[num] = (frequency[num] || 0) + 1;
    if (frequency[num] > maxCount) {
        maxCount = frequency[num];
        mostFrequent = num;
    }
});


console.log(" The most frequent number is: " + mostFrequent); 
