const {Schema, model} = require('../connection');
const contactSchema = new Schema({
    name:String,
    email: String,
    phone:Number,
    details:String
});

module.exports = model('contact', contactSchema)