console.log("Print Array:")

let charArr = ['a', 'b', 'c', 'd']
let numArr = [1, 2, 3, 4, 5]
let stringArr = ["John", "Zane", 'Michel']

console.log(charArr)
console.log(numArr)
console.log(stringArr)

console.log("Print array uusing for loop: ")

for( let i=0; i<charArr.length; i++)
{
	console.log(charArr[i])
}

console.log("Print array using foreach loop: ")

numArr.forEach((n) => {
	console.log(n)
	
})

