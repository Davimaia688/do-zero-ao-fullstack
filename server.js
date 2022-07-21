 const express = require('express');
 const bodyParser = require('body-parser');
 require('dotenv').config();

 const api = require('./backend/routes');

 const app = express();

 app.use(express.json());

console.log("Nome do Banco", process.env.MONGO_DB);
console.log("Nome do projeto", process.env.MONGO_USER);


 app.get('/', (req,res) => {
    res.json ({
        'sucess': true,
    });
 });
 

 app.use('/api', api);

 const PORT = process.env.PORT;
 app.listen(PORT);

 