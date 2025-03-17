// Array Operation
 //push & pop
 
 arr3 = ['a', 'b', 'd']
 console.log(arr3)
 arr3.push('e')
 console.log(arr3)
 arr3.pop()
 console.log(arr3)
 
 // reverse array using push and pop
 //a b c d -> d c b a
 
console.log("-----reverse array using push and pop -----") 

 let arr1 = ['a', 'b', 'c', 'd']
 let arr2 = []

 console.log("Array : " + arr1)

 
 while(arr1.length > 0)
{
	arr2.push(arr1.pop());
}
 console.log("Reverse array: " + arr2)
 