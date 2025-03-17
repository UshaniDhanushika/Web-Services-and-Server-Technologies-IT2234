// arr = [1,2,3,4,5,6]
// target = 7
// write a code find the all pairs that sum up to the target

console.log("All pairs that sum up to the target: ")
let ar = [1,2,3,4,5,6]
let target = 7
for(let i=0; i<ar.length; i++)
 {
	 for(let j=0; j< ar.length; j++)
	 {
		 if(ar[i]+ar[j]>=target)
		 {
			 console.log(ar[i] + "," + ar[j])
		 }
	 }
	 
 }
 
 