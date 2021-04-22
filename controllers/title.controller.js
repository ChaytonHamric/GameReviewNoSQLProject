const mongoose = require('mongoose');
const Title = require('../models/GameTitle')
 
module.exports = {
    read: async (req, res) => {
        try{
            const titles = await Title.find();
            res.status(201).json({
                titles: titles
            });
        }
        catch (err){
            throw err;
        }
    } 
}

