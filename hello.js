const express = require("express");
const router = express.Router();

const app = express();
const door = 3333;

function showHello(request, response){
    response.send("Hello my litle cod!");
}

function showDoor() {
    console.log("Servidor criado e rodando na Door", door);
}
app.use(router.get('/hello', showHello));
app.listen(door, showDoor);