const express = require("express");

const {
    getMessages,
    postMessage,
} = require("../controllers/messageController");
const router = express.Router();

// GET all messages
router.get("/getMessage", getMessages);

// POST a new message

router.post("/postMessage", postMessage);

module.exports = router;
