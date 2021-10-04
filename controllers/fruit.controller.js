'use strict';
const { fruitsModel } = require('../models/fruit.model');
const axios = require('axios');

let fruitController = (req, res) => {
    axios.get(`${process.env.THIRD_PARTY_API}`).then(results => {

        //console.log('results'+results.data);
        res.status(200).json(results.data);
    });

};

let getAllFruitsController = (req,res)=> {
    fruitsModel.find({}).then(data => {
        res.status(200).json(data);
    });
};




let getFruitController = (req, res) => {
    let fruitId = req.quiry.id;
    fruitsModel.findOne({ _id: fruitId }).then(data => {
        res.status(200).json(data);

    });
};

const createFruitController = async (req, res) => {
    let fruitData = req.body;
    let newFruit = new fruitsModel(fruitData);
    newFruit.save();
    fruitsModel.find({}).then(data => {
        res.status(200).json(data);
    });

};

const updateFruitController = async (req, res) => {
    let fruitData = req.body;
    let fruitId = req.params.id;
    fruitsModel.findOne({ _id: fruitId }).then(updatedData => {
        updatedData.name = fruitData.name;
        updatedData.image = fruitData.image;
        updatedData.price = fruitData.price;
        updatedData.email = fruitData.email;
        updatedData.save();
    });
    let updatedFruitList = await fruitsModel.find({});
    res.status(200).json(updatedFruitList);

};

const deleteFruitController = async (req, res) => {
    
    let fruitId = req.params.id;
    //console.log(fruitId);
    fruitsModel.findByIdAndDelete(fruitId, (err) => {
        if (err) {
            res.status(500).json('an error occured during delete');
        }

    });
    let fruitsList = await fruitsModel.find({});
    res.status(200).json(fruitsList);
};

module.exports = {
    fruitController,
    getFruitController,
    createFruitController,
    updateFruitController,
    deleteFruitController,
    getAllFruitsController
}
