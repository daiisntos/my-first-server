const express = require("express")

const router = express.Router()

const app = express()

const porta = 3333



const mulheres = [

    {
        nome: 'Anita',

        imagem: 'https://bit.ly/4awDgiI',

        minibio: 'Larissa de Macedo Machado, mais conhecida pelo seu nome artístico Anitta, é uma cantora, compositora, atriz, dançarina e empresária brasileira.',

    },

    {

        nome: 'Iza',

        imagem: 'https://bit.ly/3PGtCSS',

        minibio: 'Isabela Cristina Correia de Lima Lima, mais conhecida pelo seu nome artístico IZA, é uma cantora, compositora, apresentadora e publicitária brasileira. Com uma voz potente e credibilidade artística, IZA é um dos maiores nomes da música pop e R&B nacional.',

    },

    {

        nome: 'Gloria Groove',

        imagem: 'https://bit.ly/4czUZrg',

        minibio: 'Daniel Garcia Felicione Napoleão, mais conhecido por seu nome artístico Gloria Groove, é um cantor, rapper, compositor, drag queen e dublador brasileiro. ',

    }

]



function mostraMulheres(request, response) {

    response.json(mulheres)

}



function mostraPorta() {

    console.log("Servidor criado e rodando na porta ", porta)

}



app.use(router.get('/mulheres', mostraMulheres))

app.listen(porta, mostraPorta)