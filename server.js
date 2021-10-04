'use strict';
const express = require('express');
const cors = require('cors');
const app = new express();
app.use(cors());
const mongoose = require('mongoose');
require('dotenv').config();
app.use(express.json());
const PORT = process.env.PORT;
const MONGO_SERVER = process.env.MONGO_SERVER;

mongoose.connect(`${MONGO_SERVER}`, { useNewUrlParser: true, useUnifiedTopology: true });
const { getAllFruitsController, fruitController,  getFruitController,   createFruitController,  updateFruitController,  deleteFruitController}=require('./controllers/fruit.controller')


app.get('/getAPI',fruitController);
app.get('/getAll',getAllFruitsController);
app.get('/getOneFruit',getFruitController);
app.post('/addFruit',createFruitController);
app.put('/updateFruit/:id',updateFruitController);
app.delete('/deleteFruit/:id',deleteFruitController);

app.listen(PORT, () => {
    console.log(`listening to port ${PORT}`);
});
