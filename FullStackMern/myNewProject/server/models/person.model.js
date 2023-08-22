const mongoose = require('mongoose');
const PersonSchema = new mongoose.Schema({
    bookTitle: { type: String },
    bookPrice: { type: Number },
    bookDescription: { type: String }
}, { timestamps: true });
module.exports.Person = mongoose.model('Person', PersonSchema);

