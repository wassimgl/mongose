const mongoose = require ('mongoose');

const personSchema= mongoose.Schema({
    name : String, 
    age : Number,
    favoriteFoods : [String],
});

module.exports = mongoose.model('Person',personSchema);