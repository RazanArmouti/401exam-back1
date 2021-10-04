'use strict';
const mongoose=require('mongoose');

const fruitSchema= new mongoose.Schema({
    name:String,
    image:String,
    price:String,
    email:String
});

const fruitsModel= mongoose.model('fruits',fruitSchema);


module.exports={
    fruitsModel,
 
};