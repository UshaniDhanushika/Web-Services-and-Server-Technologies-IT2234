// Callback function (u can give funtion to another function)
//A function passed as an argument

const greeting = (msg, newFun) =>{
	console.log("Hi" + msg)
	newFun()
}

greeting("Good Morning! " , () => {console.log("How Are You?")})

console.log("**********************************")


//  Multiplication of numbers:

console.log("Multiplication of numbers:")

const mult = (n) => n*4

const arr = (mul,...n) =>{
	n.forEach((i) => console.log(mul(i)))
}

arr(mult,3,5,2,4,6)