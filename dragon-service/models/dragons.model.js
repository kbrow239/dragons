const mongoose = require('mongoose');
const Schema = mongoose.Schema;

let DragonSchema = new Schema ({
    dragonId: {type: Number, required: true, unique: true},
    name:{type: String, required: true},
    gender:{type: String, required: true},
    breed:{type: String, required: true},
    primaryColor:{type: String, required: true},
    primaryGene:{type: String, required: true},
    secondaryColor:{type: String, required: true},
    secondaryGene:{type: String, required: true},
    tertiaryColor:{type: String, required: true},
    tertiaryGene:{type: String, required: true},
    flight:{type: String, required: true},
    eyeType:{type: String, required: true},
    generationOne:{type: Boolean, required: true},
    breedingPair:{type: String},
    mate:{type: String}
});

// Export the model
module.exports = mongoose.model('Dragon', DragonSchema);