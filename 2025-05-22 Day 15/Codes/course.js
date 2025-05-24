const mongoose = require('mongoose')
const courseSchema = new mongoose.Schema({
    code:{type:String,require:true},
    name:{type:String,require:true},
    credits:{type:Number,require:true},  // require:true --> You must provide this data
    description:{type:String}
})

const course= mongoose.model('courses',courseSchema)
const webservice = new course({

    code:'IT2234',
    name:'Practical for web services',
    credits:3,
    description:'Build a REST API with NodeJS technology'
})

const osSystem = new course({

    code:'IT2214',
    name:'Practical for operating systems',
    credits:4,
    description:'Linux commands'
})

//osSystem.save()
//webservice.save()
module.exports=course

//const Course = mongoose.model('course',courseSchema)
//module.exports=course;  