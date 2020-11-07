const express = require('express')
const app = express()
const port = 3000
const path = require('path')
const bodyParser = require('body-parser')

//Parse application/x-www-form-urlencoded
app.use(bodyParser.urlencoded({ extended: false}))

//Parse application JSON
app.use(bodyParser.json())

app.get('/', (req, res) => {
    //When going to localhost:3000/
    //Message is displayed
  res.send('Welcome to Data Representation & Querying')
})

app.get('/hello/:name', (req, res) =>{
    console.log(req.params.name)
    res.send('Hello ' + req.params.name)
})

app.get('/api/movies', (req, res) =>{
    //JSON list
    const mymovies = [
           {
              "Title":"Avengers: Infinity War",
              "Year":"2018",
              "imdbID":"tt4154756",
              "Type":"movie",
              "Poster":"https://m.media-amazon.com/images/M/MV5BMjMxNjY2MDU1OV5BMl5BanBnXkFtZTgwNzY1MTUwNTM@._V1_SX300.jpg"
           },
           {
              "Title":"Captain America: Civil War",
              "Year":"2016",
              "imdbID":"tt3498820",
              "Type":"movie",
              "Poster":"https://m.media-amazon.com/images/M/MV5BMjQ0MTgyNjAxMV5BMl5BanBnXkFtZTgwNjUzMDkyODE@._V1_SX300.jpg"
           }
     ];
    res.json({movies:mymovies});
})

app.get('/test', (req, res) =>{
    //Checks the current directory and redirects user to index.html
    res.sendFile(__dirname + '/index.html');
})

//Get updates localhost:3000/name? with params and '?' to show query
app.get('/name', (req, res) =>{
    res.send('Hello ' + req.query.fname + ' ' + req.query.lname)
})

//Post doesn't update localhost:3000/name with paramters
app.post('/name', (req, res) =>{
    res.send('Hello ' + req.body.fname + ' ' + req.body.lname)
})

app.listen(port, () => {
  console.log(`Example app listening at http://localhost:${port}`)
})