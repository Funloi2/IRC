require("dotenv").config(); // Load environment variables from .env file

const express = require("express");

// Express app
const app = express();
const mongoose = require("mongoose");
const MessageRoutes = require("./routes/message");
const ChannelRoutes = require("./routes/channel");

// Middleware

// Parse JSON data
app.use(express.json());
app.use((req, res, next) => {
    console.log(req.path, res.method);
    next();
});

// Routes
app.use("/chat/", MessageRoutes);
app.use("/chat/", ChannelRoutes)

// Connect to MongoDB
mongoose
    .connect(process.env.MONGODB_URI)
    .then(() => {
        console.log("Connected to MongoDB");

        // Lisen for requests
        app.listen(process.env.PORT, () => {
            console.log(`Server running on http://localhost:${process.env.PORT}`);
        });
    })
    .catch((err) => {
        console.log("Error connecting to MongoDB", err);
    });
