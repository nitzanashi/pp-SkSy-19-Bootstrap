const express = require('express');
const router = express.Router();
const Todo = require("../model/todo");
import { isEmpty } from '../rules/isEmpty';


// GET list of all TASKS - Read
router.get('/', function(req, res, ){
    Todo.find(function (err, todos) {
        if(err) {
            res.status(404).send("data is not found");
        }
        else{
            res.json(todos);
        }
    });
});

// GET a specific Task by id - Read
router.get('/:id',function(req, res) {
    Todo.find({id: req.params.id}, function(err, todo) {
        if(err || isEmpty(todo)) {
            res.status(404).send("data is not found");
        }
        else{
            res.json(todo);
        }
    });
});

// PUT  update an Item - UPDATE
router.put('/:id', function(req, res) {
    Todo.find({id: req.params.id}, function(err, todo) {
        if (!todo)
            res.status(404).send("data is not found");
        else
            todo.todo_description = req.body.todo_description;
        todo.todo_responsible = req.body.todo_responsible;
        todo.todo_priority = req.body.todo_priority;
        todo.todo_completed = req.body.todo_completed;
        todo.save().then(todo => {
            res.json(todo);
        })
            .catch(err => {
                res.status(400).send(`Update not possible, ${err}`);
            });
    });
});

// POST - add a new Item - CREATE
router.post('/', function(req, res) {
    let todo = new Todo(req.body);
    todo.save()
        .then(todo => {
            res.status(200).json(todo);
        })
        .catch(err => {
            res.status(400).send(`adding new todo failed, ${err}`);
        });
});

// Delete an Item
router.delete('/:id', function (req, res) {
    Todo.findOneAndDelete({ id: req.params.id},  err => {
        if(err) return res.status(400).send(err);
        return res.json({success: true});

    });
});

module.exports = router;
