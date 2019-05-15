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
        res.json(todo);
    });
});

// PUT  update an Item - UPDATE
router.put('/:id', function(req, res) {
    Todo.findOneAndUpdate({id: req.params.id}, req.body, {new: true}, (err, todo) => {
        if (err) {
            res.status(404).send("Something wrong when updating data!");
        }
        res.json(todo);
    });
});

// POST - add a new Item - CREATE
router.post('/', function(req, res) {
    let todo = new Todo(req.body);
    todo.save(err => {
        if (err) return res.status(500).send(err);
        return res.status(200).send(todo);
    });
});

// Delete an Item - not workjing so good check it!
router.delete('/:id', function (req, res) {
    Todo.deleteOne({ id: req.params.id},  err => {
        if(err) return res.status(400).send(err);
        return res.json({success: true});

    });
});


// Delete All Items -- Watch out!!
router.delete('/', function(req, res){
   Todo.remove({}, err => {
       if(err)
           return res.status(400).send(err);
       else
           return res.json({success: true});
   })
});
module.exports = router;
