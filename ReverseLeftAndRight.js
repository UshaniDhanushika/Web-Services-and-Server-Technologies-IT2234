//Reverse the numbers in left and right 1234-5-6789
console.log("Print the numbers in left to right 1234-5-6789: ")

var i = 9
var mid = parseInt(i/2) + 1;


for(var j= mid - 1; j>0; j--)
{
	console.log(j)
}

console.log(mid);

for(var j = i; j>mid; j--)
{
	console.log(j)
}

/*Output:

	Print the numbers in left to right 1234-5-6789:
	4
	3
	2
	1
	5
	9
	8
	7
	6
	
*/