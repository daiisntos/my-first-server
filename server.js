const express = require("express");

const app = express();
const door = 3333;

function showDoor() {
    console.log("Server created and running on the port:", door);
}

app.listen(door, showDoor);