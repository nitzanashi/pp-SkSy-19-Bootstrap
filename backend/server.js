const express = require("express");         // Express is a fast and lightweight web framework for Node.js. Express is an essential part of the MERN stack.
const mongoose = require("mongoose");       // A Node.js framework which lets us access MongoDB in an object-oriented way.
const bodyParser = require("body-parser");  //  Node.js body parsing middleware.

// CORS is a node.js package for providing an Express middleware that can be used to enable CORS with various options.
// Cross-origin resource sharing (CORS) is a mechanism that allows restricted resources on a web page to be requested from another domain outside the domain from which the first resource was served.
const cors = require("cors");



const PORT = 4000;
const app = express();

const router = express.Router();

const Todo = require("./model/todo");



app.use(cors());
app.use(bodyParser.json());

// DB SETUP AND CONNECTION
mongoose.connect('mongodb://127.0.0.1:27017/todos', {
    useNewUrlParser: true
})
    .catch((err) => {
    console.log(err);
    process.exit(1);
});

const connection = mongoose.connection;

connection.once('open', function () {
    console.log("MongoDB connection established :)");
});

// CRUD API

// GET list of all TASKS - Read
router.get('/', function(req, res){
    Todo.find(function (err, todos) {
        if(err) {
            console.log(err);
        }
        else{
            res.json(todos);
        }
    });
});

// GET a specific Task by id - Read
router.get('/:id',function(req, res) {
    let id = req.params.id;
    Todo.findById(id, function(err, todo) {
        res.json(todo);
    });
});

// PUT  update an Item - UPDATE
router.put('/:id', function(req, res) {
    Todo.findById(req.params.id, function(err, todo) {
        if (!todo)
            res.status(404).send("data is not found");
        else
            todo.todo_description = req.body.todo_description;
        todo.todo_responsible = req.body.todo_responsible;
        todo.todo_priority = req.body.todo_priority;
        todo.todo_completed = req.body.todo_completed;
        todo.save().then(todo => {
            res.json('Todo updated!');
        })
            .catch(err => {
                res.status(400).send("Update not possible");
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
            res.status(400).send('adding new todo failed');
        });
});

app.use('/todos', router);

app.listen(PORT, function () {
    console.log(`Server is Running on PORT ${PORT}`);
});
