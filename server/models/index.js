const User = require('./User');
const bookSchema = require("./Book");
const {model} = require("mongoose");

const Book = model('Book', bookSchema);

module.exports = { User, Book };
