//importing Contact model
const Tasks = require('../models/Tasklist');

//exporting home controller
module.exports.home = function(req, res){
    Tasks.find({})
    .then(function(tasks){
        return res.render('home', {  //rendering home page
            tasks_list : tasks
        });
    })
    .catch((err) => {
        console.log('Error in fetching tasks from db!');
    });
}

//exporting createTask controller , this is used to create a new task
module.exports.createTask = function(req, res){
    Tasks.create({
        description: req.body.description,
        date: req.body.date,
        category: req.body.category,
        done: false
    })
    .then(function(newTask){
        console.log('*********', newTask);
        res.redirect('back');
    })
    .catch((err) => {
        console.log('Error in creating a task!');
    });
}


//exporting deleteTask controller, this is used to delete tasks
module.exports.deleteTask = function(req, res){
    let ids = req.query.id; //getting ids from query in url
    ids = ids.split(',');  //splitting ids into array

    ids.forEach((id) => {
        Tasks.findByIdAndDelete(id)  //finding task by id and deleting it
        .catch((err) => {
            console.log('Error in deleting task from db!');
        });
    });

    res.redirect('back');
}