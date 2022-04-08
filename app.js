const express = require('express');
const app =  express();
const mongoose = require('mongoose');
const Note = require('./models/notes');


mongoose.connect('mongodb://localhost:27017/notes', { useNewUrlParser: true, useUnifiedTopology: true })
    .then(() => {
        console.log("MONGO CONNECTION OPEN")
    })
    .catch(err => {
        console.log("MONGO CONNECTION ERROR")
        console.log(err)
    })




app.use(express.static('public'));

app.set('view engine', 'ejs');

app.get('/', (req,res)=>{
    res.render('landing.ejs');
})
app.get('/notes', (req, res)=>{
    res.render('notes.ejs');
})
app.get('/notes/:id', (req, res)=>{
    const {id} = req.params;

    res.send(`note number ${id}`);
})
app.get('/todo', (req,res)=>{
    res.send("ToDo app!")
})
app.get('/search', (req,res)=>{
    console.log(req.query);
    res.send("Hi!");
})
//Catch all
app.get('*', (req,res)=>{
    res.send("Webpage does not exist!")
})

app.listen(3000, ()=>{
    console.log("On 3000!");
})
