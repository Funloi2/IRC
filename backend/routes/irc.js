const express = require("express");

// import controllers functions
const {
    getAllChannels,
    updateChannel,
    createChannel,
    deleteChannel,
} = require("../controllers/channelController");
const {
    getMessages,
    postMessage,
} = require("../controllers/messageController");

const router = express.Router();

// GET user by id

// GET all user conected to the channel selected

// GET all channels
router.get("/", getAllChannels);

// GET 500 last message from a chanel

router.get("/getMessage/:channelId", getMessages);

// POST a new message

router.post("/postMessage", postMessage);

// POST a new channel
router.post("/", createChannel);

// DELETE a channel
router.delete("/:id", deleteChannel);

// DELETE: exit a channel

// UPDATE: join a channel

// UPDATE a channel
router.patch("/:id", updateChannel);

module.exports = router;
