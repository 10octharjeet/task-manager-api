const mongoose = require('mongoose');
require('dotenv').config();
const mongo_url= process.env.mongo_url;
const DB_NAME= process.env.DB_NAME;

mongoose.connect(mongo_url,{
    dbName: DB_NAME
}).then(
    () =>{
        console.log('Connected to database');
    }

).catch((err) => {
    console.log('Database not connnected successfully' + err);
})