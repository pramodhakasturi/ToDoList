//importing express
const express = require('express');
const app = express();

//setting up the port
const port = 8000;

//setting up the view engine and views folder
app.set('view engine', 'ejs');
app.set('views', './views');

//setting up the static files
app.use(express.static('static'));

//setting up the parser middleware
app.use(express.urlencoded({
    extended: true
}));

//importing mongoose
const db = require('./config/mongoose');

//setting up the router
app.use('/', require('./routes/index'));

//fire up the server
app.listen(port, function(err){
    if(err){
        console.log(`Error in running the server: ${err}`);
    }
    console.log(`Server is running on port: ${port}`);
});