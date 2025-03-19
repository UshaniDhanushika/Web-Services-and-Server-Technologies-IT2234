// Arrow function

console.log("Print a message using arrow function:")

const printMsg = () => { return console.log("Hello Js")}
printMsg()


console.log("********************************")

//Write an arrow funtion to sum 2 numbers
console.log("Summing two numbers using an arrow function:")

const add = (a,b) => { return a+b}
console.log(add(3,4))

console.log("********************************")

//default parameter
console.log("Using default parameters in an arrow function:")

const mul = (a, b=2) => { return a*b}
console.log(mul(2,3))
console.log(mul (5))


console.log("********************************")

//Rest Parameter( It is like an array)

console.log("Use of rest parameters:")
const num = (...n) => {
	console.log(n)
}

num(3,6,4,86,32)

console.log("********************************")


//Find summation of the given argument

console.log("Summing all the arguments using reduce():")

const summation = (...n) => {
	return n.reduce((num, i ) => num = num+i)
}

console.log(summation(2,4,24,60))
