const express = require("express");
const router = express.Router();

const app = express();
const door = 3333;

function showWoman(request, response){
    response.json({
        name: 'Anita',
        image: 'https://revistacenarium.com.br/wp-content/uploads/2023/02/whatsapp-image-2023-02-19-at-153520-1-1024x576.jpeg',
        minibio: 'Cantora, compositora, atriz, dançarina e empresária brasileira'
    
    });
}
function showDoor() {
    console.log("Server created and running on the port:", door);
}
app.use(router.get('./woman',showWoman))
app.listen(door, showDoor);