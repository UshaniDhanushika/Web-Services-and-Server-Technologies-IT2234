//Print the nested array
//[[1,2,30], [5,6], [8,5,3]]

console.log("Nasted Array: ")

let nesArr = [[1,2,30], [5,6], [8,5,3]]

/*for(let i = 2 ; i < nesArr.length; i++)
{
	for(let j = 0 ; j < 3; j++)
	{
		console.log(nesArr[j]);
	}
}*/

nesArr.forEach( (n) => {
	console.log(n);
})

console.log("Nasted Array Elements: ")
nesArr.forEach( (n) => {
	n.forEach((i) => {
		console.log(i);
	})
	
})

