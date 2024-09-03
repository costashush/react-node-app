import express from 'express';
import cors from 'cors';
//multipart formdata for file uploads
import bodyParser from 'body-parser';
// import multer from 'multer';
const multer  = require('multer');
const myCache = require('./data.ts');
// const bodyParser = require('body-parser');

const jsonParser = bodyParser.json();
const urlencodedParser = bodyParser.urlencoded({ extended: false })



let mykeys = myCache.keys();
let data = myCache.mget( mykeys )
// console.log( data );


const app = express();
const PORT = process.env.PORT || 8080;

app.use(cors());


app.get('/', (req, res) => {
    res.json({ message: 'Hello from the backend!' });
});

app.get('/recipes',jsonParser, (req, res) => {
    //get list of recipes
    res.json(data)
    // res.json({ message: 'recipeis GET' });
});

app.post('/recipes',jsonParser, (req, res) => {

    console.log("id",req.query ,req.body);
    res.json({ message: req.body, todo:"add new recipe"});
});
app.put('/recipes/:id', jsonParser , (req, res) => {
    
    console.log("params",req.params.id ,"body",req.body);

    res.json({ message: 'recipeis put ' + req.params.id } );
});
app.delete('/recipes/:id', (req, res) => {
    console.log("params",req.params ,"body",req.body);
    res.json({ message: 'recipeis delete '+ req.params.id });
});

app.listen(PORT, () => {
    console.log(`Server running on http://localhost:${PORT}`);
});
