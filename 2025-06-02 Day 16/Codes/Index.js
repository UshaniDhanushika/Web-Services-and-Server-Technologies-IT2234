const express=require('express'); 
const app=express(); 
const port=3006; 
const mongoose= require('mongoose'); 
const errorHandleMid=require('./middlewares/errorHandler') 
const projectert=require('./route/ProjectRoute') 
const taskert=require('./route/TaskRoute') 
const userert=require('./route/UserRoute') 
app.use(express.json()) 
app.use(errorHandleMid) 
app.use('/Project',projectert) 
app.use('/Task',taskert) 
app.use('/User',userert) 
app.use(errorHandleMid) 
mongoose.connect('mongodb://localhost:27017/taskDB').then(()=>{ 
console.log("Database connected") 
}).catch((error)=>{ 
console.error(error); 
}) 
app.listen(port,()=>{ 
console.log(`server is running on ${port}`); 
})