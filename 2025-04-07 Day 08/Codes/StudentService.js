const student = require('./StudentDB')

function getStudents(){
    return student;
}

function getStudent(id){
    return student.find((student)=>student.RegNO == id)
}

function getByGender(gender){
    return student.filter((student)=>student.Gender == gender)
}

module.exports = {getStudents,getStudent,getByGender}