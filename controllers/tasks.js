const Task = require('../models/tasks.js')
const asyncWrapper = require('../middlewares/asyncWrapper.js')
const {createCustomError} = require('../errors/custom-error.js')

const getAllTasks = asyncWrapper( async (req, res) => {
        const tasks = await Task.find({});
        return res.status(200).json({tasks});
})

const getTask = asyncWrapper(async (req, res,next) => {
        const {id:taskID} = req.params;
        const task = await Task.findOne({_id:taskID});
        if(!task){
            return next(createCustomError(`Task ID not found: ${taskID}`,404))
        }
        return res.status(200).json({task});
})

const createTask = asyncWrapper(async (req, res) => {
        const task = await Task.create(req.body);
        return res.status(201).json(task); 
})

const updateTask = asyncWrapper(async (req, res,next) => {
        const {id:taskID} = req.params
        const task = await Task.findOneAndUpdate({_id:taskID},req.body,{
            new: true,
            runValidators: true
        })
        if(!task){
            return next(createCustomError(`Task ID not found: ${taskID}`,404))
        }
        
        return res.status(200).json({task})
})

const deleteTask = asyncWrapper(async (req, res,next) => {
        const {id:taskID} = req.params
        const task = await Task.findOneAndDelete({_id:taskID})

        if(!task){
            return next(createCustomError(`Task ID not found: ${taskID}`,404))
        }

        return res.status(200).json({success: true})
})
 
module.exports = {
    getAllTasks, createTask, getTask, updateTask, deleteTask
}