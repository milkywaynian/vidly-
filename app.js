//load express
const express = require("express"); 

//store result of the express module in a variable
const app = express();



// create dummy genres

const genres = [
    {name: "comedy", id:1},
    {name: "thriller", id:2},
    {name: "drama", id:3}
]

//get method 

app.get('/app/genres', (req,res) => {
    res.send(genres)
})

//get method for an individual genre

app.get('/app/genres/:name', (req, res) => {
    //find the genre
    const genre = genres.find((g) => g.name === (req.params.name));

    //provide a response
    //if none found
    console.log(genre);
    if(!genre) {
        res.status(404).send("Genre not found"); 
        //if genre found
    } else {
        res.send(genre); 
    }
})




//listen on a port

const port = process.env.port;
app.listen(port, () => console.log(`We are listening on port ${port}`));

