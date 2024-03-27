const express = require("express");
const router = express.Router();

const app = express();
const porta = 3333;

function mostraMulher(request, response){
    response.json({
        nome: 'Anita',
        imagem: 'https://revistacenarium.com.br/wp-content/uploads/2023/02/whatsapp-image-2023-02-19-at-153520-1-1024x576.jpeg',
        minibio: 'Cantora, compositora, atriz, dançarina e empresária brasileira'
    
    });
}
function mostraPorta() {
    console.log("Servidor criado e rodando na porta", porta);
}
app.use(router.get('/mulher',mostraMulher))
app.listen(porta, mostraPorta);