const  express = require('express')
const router = express.Router()
const studentService = require('./StudentService')

router.get('/', (req, res)=>{
    const results = studentService.getStudents()
    if(results){
        res.status(200).json(results)
    }
    else{
        res.status(404).send("Sorry, No data found !")
    }
})

router.get('/:id', (req, res)=>{
    const id = req.params.id
    const results = studentService.getStudent(id)
    if(results){
        res.status(200).json(results)
    }
    else{
        res.status(404).send("Sorry, No data found !")
    }
})

router.get('/gender/:gen', (req, res)=>{
    const gender = req.params.gen == 'm'?'Male':'Female'
    const results = studentService.getByGender(gender)
    if(results){
        res.status(200).json(results)
    }
    else{
        res.status(404).send("Sorry, No data found !")
    }
})

module.exports = router