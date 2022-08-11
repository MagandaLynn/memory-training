const express = require('express');
const { builtinModules } = require('module');
const goalRouter = express.Router();
const {getGoals, setGoal, updateGoal, deleteGoal, getGoalById} = require('../controllers/goalController');

goalRouter.route('/')
.get(getGoals)
.post(setGoal)


goalRouter.route('/:id')
.get(getGoalById)
.put(updateGoal)
.delete(deleteGoal)

module.exports = goalRouter;