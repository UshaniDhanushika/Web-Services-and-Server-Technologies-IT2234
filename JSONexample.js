// Define 5 students (reduced from 10 for simplicity)
let students = [
  { name: "Alice", gender: "Female", course: "IT", gpa: 3.8 },
  { name: "Bob", gender: "Male", course: "IT", gpa: 3.2 },
  { name: "Nude", gender: "Male", course: "TEC", gpa: 3.2 },
  { name: "Rocky", gender: "Male", course: "IT", gpa: 3.2 },
  { name: "Michel", gender: "Female", course: "TEC", gpa: 3.2 },
  { name: "Nuvi", gender: "Female", course: "IT", gpa: 3.2 },
  { name: "Charlet", gender: "Female", course: "Business", gpa: 3.2 },
  { name: "Carol", gender: "Female", course: "Business", gpa: 4.0 },
  { name: "David", gender: "Male", course: "IT", gpa: 3.5 },
  { name: "Emma", gender: "Female", course: "Medicine", gpa: 3.9 }
]

// Find female students

console.log("********************")

let femaleStu = []
for(let i = 0; i < students.length; i++) {
  if(students[i].gender == "Female") {
    femaleStu.push(students[i].name)
  }
}
console.log("Female Students:"+ femaleStu)


// Find the students who are following IT courses
console.log("********************")

let itStudents = []
for(let i = 0; i < students.length; i++) {
  if(students[i].course == "IT") {
    itStudents.push(students[i].name)
  }
}
console.log("IT Students:", itStudents)



//Find the max and average GPA among the students

//max GPA
console.log("********************")

let maxGPA = 0;
for(let i = 0; i < students.length; i++) {
  if(students[i].gpa > maxGPA) {
    maxGPA = students[i].gpa;
  }
}

console.log("Max GPA is: " + maxGPA)
 
//average GPA
console.log("********************")

let totalGPA = 0;
for(let i = 0; i < students.length; i++) {
  totalGPA += students[i].gpa;
}
let averageGPA = totalGPA / students.length;

console.log("Average GPA:", averageGPA);
