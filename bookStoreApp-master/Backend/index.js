import express from "express";
import mongoose from "mongoose";
import dotenv from "dotenv";
import cors from "cors";
// cors -> allows the frontEnd running at some port to
// call the backend running at some other port, without causing the 
// cors error in browser


import bookRoute from "./route/book.route.js";
import userRoute from "./route/user.route.js";
// import { useCallback } from "react";

const app = express();

app.use(cors());  /*middleware that allows frontEnd and backend
to talk if they're on different ports*/

app.use(express.json()); 
/*middleware to parse JSON data in requrest bodies*/

dotenv.config();

const PORT = process.env.PORT || 8000;
const URI = process.env.MongoDBURI;

// connect to mongoDB
try {
    mongoose.connect(URI, {
        useNewUrlParser: true,
        useUnifiedTopology: true,
    });
    console.log("Connected to mongoDB");
} catch (error) {
    console.log("Counldn't connect to MongoDB: ", error);
}

// defining routes
app.use("/book", bookRoute);
app.use("/user", userRoute);

app.listen(PORT, () => {
    console.log(`Server is listening on port ${PORT}`);
});