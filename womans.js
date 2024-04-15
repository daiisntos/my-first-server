const express = require("express");

const router = express.Router();

const cors = require('cors');


const  connectingTheDatabase = require('./womanDatebase');

connectingTheDatabase();

const Woman = require('./modelWoman');

const app = express();
app.use(express.json());
app.use(cors());

const door = 3333;


async function showsWomans(request, response) {
try {
    const womenComingFromTheDatabase = await Woman.find();
    
    response.json(womenComingFromTheDatabase);
} catch (erro) {
    console.log(erro);
} 

}

async function createsWomans(request, response) {
    const newWoman = new Woman({
        name: request.body.name,
        image: request.body.image,
        minibio: request.body.minibio,
        quote: request.body.quote
    })
    try {
        const raisedWoman = await newWoman.save();
       
        response.status(201).json(raisedWoman);
    } catch (erro) {
        console.log(erro);
        
    }
}

async function correctWoman(request, response) {
   try {
    const womanFound = await Woman.findById(request.params.id);

    if (request.body.name) {
        womanFound.name = request.body.name;
    }
    if (request.body.minibio) {
        womanFound.minibio = request.body.minibio;
    }
    if (request.body.image) {
        womanFound.image = request.body.image;
    }
    if (request.body.quote) {
        womanFound.quote = request.body.quote;
    }
    const womanUpdatedinTheDatabase = await womanFound.save();
    response.json(womanUpdatedinTheDatabase);
    
   } catch (erro) {
    console.log(erro);
   }
}
async function deleteWoman(request, response) {
    try {
        await Woman.findByIdAndDelete(request.params.id);
        response.json({message: 'Woman successfully deleted.'});
        
    } catch (erro) {
        
        console.log(erro);
    }
}   


app.use(router.get('/womans', showsWomans));
app.use(router.post('/womans', createsWomans));
app.use(router.patch('/womans/:id', correctWoman));
app.use(router.delete('/womans/:id', deleteWoman));

function showDoor() {

    console.log("Server created and running on Port:", door);

}

app.listen(door, showDoor);