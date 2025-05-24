
const express = require('express');
const app =express();
const port = 3002;
const mongoose = require('mongoose')
const coursert = require('./routes/courseRoute')
const Degreert = require('./routes/degreeRoute')
const Studentrt = require('./routes/studentRoute')


app.use(express.json())
app.use('/course',coursert)
app.use('/Degree',Degreert)
app.use('/Student',Studentrt)
mongoose.connect('mongodb://localhost:27017/StudentDB').then(()=>{
console.log("Database Connected")

}).catch ((error)=>{
    console.error(error);
})

app.listen(port,()=>{
    console.log(`Server is running on ${port}`);

})