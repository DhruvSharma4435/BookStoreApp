import mongoose from "mongoose";

const bookSchema = mongoose.Schema({
    /* defining the Structure of the book*/

    name: String,
    price: Number,
    category: String,
    image: String,
    title: String,
});
const Book = mongoose.model("Book", bookSchema);

export default Book;

// /*Note:- MongoDB automatically makes the collection
// plural (book -> books). So inside MongoDB, data 
// will be stored int he "books" collection"*/