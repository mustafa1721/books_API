const mongoose = require("mongoose");

const bookSchema = new mongoose.Schema({
    title : {
        type: String,
        required: true
    },
    author : {
        type: String,
        required: true
    },
    summary : {
        type: String,
        required: true  
    }
}, { timestamps: true });

const book = mongoose.model("books", bookSchema);

module.exports = book;