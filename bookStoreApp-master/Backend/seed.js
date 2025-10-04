import mongoose from "mongoose";
import dotenv from "dotenv";
import Book from "./model/book.model.js"; // adjust path if needed

dotenv.config();

const URI = process.env.MongoDBURI;

const books = [
    {
        name: "The Alchemist",
        price: 299,
        category: "Fiction",
        image: "https://example.com/alchemist.jpg",
        title: "A journey of self-discovery"
    },
    {
        name: "Atomic Habits",
        price: 499,
        category: "Self-help",
        image: "https://example.com/atomic_habits.jpg",
        title: "Small changes, remarkable results"
    },
    {
        name: "Clean Code",
        price: 799,
        category: "Programming",
        image: "https://example.com/clean_code.jpg",
        title: "A Handbook of Agile Software Craftsmanship"
    },
    {
        name: "The Lean Startup",
        price: 599,
        category: "Business",
        image: "https://example.com/lean_startup.jpg",
        title: "How Today's Entrepreneurs Use Continuous Innovation"
    },
    {
        name: "Harry Potter and the Sorcerer's Stone",
        price: 399,
        category: "Fantasy",
        image: "https://example.com/harry_potter1.jpg",
        title: "The boy who lived"
    }
];

const seedDB = async () => {
    try {
        await mongoose.connect(URI);
        console.log("Connected to MongoDB");

        // Clear previous data
        await Book.deleteMany({});
        console.log("Old books cleared");

        // Insert sample books
        await Book.insertMany(books);
        console.log("Sample books inserted");

        mongoose.connection.close();
    } catch (err) {
        console.log("Error: ", err);
    }
};

seedDB();
