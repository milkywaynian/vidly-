//load express
const express = require("express"); 

//store result of the express module in a variable
const app = express();

const Joi = require('joi');
app.use(express.json());

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

// post method 

app.post('/app/genres', (req, res) => {
    //validate the input 

    const {error} = validateGenre(req.body);
    //if valid - add a new genre
    if(error) {
        res.status(400).send(error)
    } else {
        const newGenre = {
            name: req.body.name,
            id: genres.length +1
        }

        genres.push(newGenre);
        res.send(newGenre);
    }
})

app.put('/app/genres/:name', (req,res) => { 
    //find the genre
    const genre = genres.find(g => g.name === (req.params.name));
    if (!genre) {
          // if unavailable - show error
        res.status(400).send("Genre not found")
    } else {
          // if found - input validation 

        const {error} = validateGenre(req.body);
        //if valid - add a new genre
            if(error) {
                res.status(400).send(error)
            } else {
                genre.name = req.body.name;
                res.send(genre);
            }
    }

    

    // if found - input validation 


})


//input validation 

function validateGenre (genre) {
    const schema = Joi.object({
        name: Joi.string().min(2).required()
    });

    return schema.validate(genre);
}





//listen on a port

const port = process.env.port;
app.listen(port, () => console.log(`We are listening on port ${port}`));

