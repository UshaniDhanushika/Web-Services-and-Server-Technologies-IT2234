const express = require('express'); 
const router = express.Router(); 
const Tasks = require('../models/Task'); 
const Projects = require('../models/Project'); 
const mongoose = require('mongoose'); 
const getAllDocuments = require('../service/getall'); 

//Postman Query : localhost:3006/Task
router.get('/', async (req, res) => { 
    getAllDocuments(res,Tasks) 
}); 

// Additional endpoint: GET task by ID with validation 
// Postman Query : localhost:3006/Task/60b8d295fbd1c33e8c8af9b6

router.get('/:taskId', async (req, res) => { 
    const { taskId } = req.params; 
    // Validation for taskId 
    if (!mongoose.Types.ObjectId.isValid(taskId)) { 
        return res.status(400).json({ 
            success: false, 
            error: 'Invalid task IDc format.' 
        }); 
    } 
    try { 
        const task = await Task.findById(taskId) 
            .populate('assignedTo', 'name email') 
            .populate('project', 'name description'); 
        if (!task) { 
            return res.status(404).json({ 
                success: false, 
                message: 'Task not found.' 
            });} 
        res.status(200).json({ 
            success: true, 
            data: task 
        }); 
    } catch (err) { 
        console.error('Error fetching task:', err); 
        res.status(500).json({ 
            success: false, 
            error: 'Server error while retrieving task.', 
            details: err.message 
        }); 
    } 
}); 
module.exports = router;