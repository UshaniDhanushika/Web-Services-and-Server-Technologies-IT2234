const express = require('express')
const router = express.Router()
const course = require('../models/course')
const mongoose = require('mongoose')

router.get('/', async (req,res)=>{
    try{
        const results = await course.find()
        if(results){
            res.status(200).json(results)
        }

        else{
            res.status(404).send("Sorry,No data found!")
        }
    } catch(error){
        console.error(error);
        res.status(500).send("Server error !")
    }
})

router.get('/:id', async (req,res)=>{
    try{
        const id = req.params.id
        const results = await course.find({code:id})
        if(results){
            res.status(200).json(results)
        }

        else{
            res.status(404).send("Sorry,No data found!")
        }
    } catch(error){
        console.error(error);
        res.status(500).send("Server error !")
    }
})

router.get('/:code/:cid', async (req,res)=>{
    try{
        const id = req.params.cid
        const results = await course.find({code:cid})
        const count = results.length
        console.log(count)
        if(results){
            if(count>0)
            {
                res.status(200).json(results)
            }
            
        }

        else{
            res.status(404).send("Sorry,No data found!")
        }
    } catch(error){
        console.error(error);
        res.status(500).send("Server error !")
    }
})

//Insert a new data
//get --> post

router.post('/', async (req,res)=>{
    try{
        //Get data from the user , request don't worry
        const {code,name,credits,description} = req.body  // get data from request body
        
        if(!code || !name || !credits){
            res.status(400).send("Please Provide the reqires fields")
        }

        else{
            const results = await course.create({code,name,credits,description})
            res.status(200).json(results)
        }

    } catch(error){
        console.error(error);
        res.status(500).send("Server error !")
    }
})


//Update data  --> using put command


router.put('/:id', async (req,res)=>{
    try{
        const id = req.params.id
        if(!mongoose.Types.ObjectId.isValid(id)){ 
            return res.status(400).send("Invalid ID!")
        }
      
        const ucourse = await course.findById(id)
        const {code,name,credits,description} = req.body  // get data from request body
        
        if(!code || !name || !credits){
            res.status(400).send("Please Provide the reqires fields")
        }
        else{
           const results = await ucourse.updateOne({code,name,credits,description})
           res.status(200).json(results)
        }
    } catch(error){
        console.error(error);
        res.status(500).send("Server error !")
    }
})


//Delete a data  -> using delete method

router.delete('/:id', async (req,res)=>{
    try{
        const id = req.params.id
        if(!mongoose.Types.ObjectId.isValid(id)){ 
            return res.status(400).send("Invalid ID!")
        }
      
        const dcourse = await course.findById(id)
        const results = await dcourse.deleteOne(dcourse).catch(

            (eroor)=>{return res.status(500).json(error)}
        )

        res.status(200).json(results)
       
    } catch(error){
        console.error(error);
        res.status(500).send("Server error !")
    }
})



module.exports=router  




