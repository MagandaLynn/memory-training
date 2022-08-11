const Goal = require('../models/goals')

// @desc Get goals
// @route GET api/goals
// Private

const getGoals = (req, res, next) =>{
    Goal.find()
    .then(goals =>{
        res.statusCode = 200;
        res.setHeader('Content-Type', 'application/json');
        res.json(goals);
    })
    .catch(err => next(err))
}

// @desc Get goal by id
// @route GET api/goals
// Private

const getGoalById = (req, res, next) =>{
    Goal.findById(req.params.id)
    .then(goal =>{
        res.statusCode = 200;
        res.setHeader('Content-Type', 'application/json');
        res.json(goal);
    })
    .catch(err => next(err))
}
// @desc Set goal
// @route POST api/goals
// Private

const setGoal = (req, res)=>{
    Goal.create(req.body)
    .then(goal => {
        res.statusCode = 200;
        res.setHeader('Content-Type', 'application/json');
        res.json(goal);
    })
    .catch(err => next(err));
}

// @desc Update goal
// @route PUT api/goals/:id
// Private

const updateGoal = (req,res) =>{
    Goal.findByIdAndUpdate(req.params.id, {$set: req.body},{new: true})
    .then(goal => {
        res.statusCode = 200;
        res.setHeader('Content-Type', 'application/json');
        res.json(goal);
    })
    .catch(err => next(err));
}


// @desc Delete goal
// @route DELETE api/goals/:id
// Private

const deleteGoal = (req,res) =>{
    Goal.findByIdAndDelete(req.params.id)
    .then(response =>{
        res.statusCode = 200;
        res.setHeader('Content-Type', 'application/json');
        res.json(response);
    })
    
}

module.exports = {
    getGoals,
    getGoalById,
    setGoal,
    updateGoal,
    deleteGoal
}