const express = require('express'); 
const router = express.Router(); 
const Users = require('../models/User'); 
const getAllDocuments  = require('../service/getall'); 

// GET all departments 
//Postman Query : localhost:3006/User
router.get('/', async (req, res) => { 
    getAllDocuments(res,Users) 
}); 
module.exports = router;


