//Find the Maximum number in the array using foreach

console.log("The array is:")

let numberArray = [23, 45, 36, 85, 14]

console.log (numberArray)

let maxNum = numberArray[0]

numberArray.forEach((n) => {
	
	/*if(n>maxNum)
	{
		maxNum = n
	}*/
	
	(maxNum < n) && (maxNum = n)
})

console.log ("Maximum number is: " + maxNum)

