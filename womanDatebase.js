const mongoose = require('mongoose');

require('dotenv').config();

async function connectingTheDatabase(){
   try {
    console.log('Database connection started.');

    await mongoose.connect(process.env.MONGO_URL);
     
    console.log('Connection to the database was made successfully.');
   } catch(erro){
    console.log(erro);
   }

}

module.exports =  connectingTheDatabase;