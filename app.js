//load express
const express = require("express"); 

//store result of the express module in a variable
const app = express();



// create dummy categories

const categories = [
    {name: "comedy"},
    {name: "thriller"},
    {name: "drama"}
]

//get method 

app.get('/app/categories', (req,res) => {
    res.send(categories)
})






//listen on a port

const port = process.env.port;
app.listen(port, () => console.log(`We are listening on port ${port}`));

