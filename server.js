const express = require("express");
const { v4: uuidv4} = require('uuid');
const router = express.Router();

const app = express();
const door = 3333;

function createWoman(request,response){
    const newWoman = {
        id: uuidv4(),
        name: request.body.name,
        image: request.body.image,
        minibio: request.body.minibio

    }
    womans.push(newWoman);
    response.json(womans);
}

function showDoor() {
    console.log("Servidor criado e rodando na Door", door);
}


app.use(router.post('womans'), createWoman);
app.listen(door, showDoor);