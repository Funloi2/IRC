const express = require("express");

const {
    getChannels,
    getChannel,
    postChannel,
    updateChannel,
    deleteChannel,
} = require("../controllers/channelController");
const router = express.Router();

// GET all Channels
router.get("/getChannels", getChannels);

// GET a Channel
router.get("/getChannel/:id", getChannel);

// Update a Channel
router.patch("/updateChannel/:id", updateChannel);

// DELETE a Channel
router.delete("/deleteChannel/:id", deleteChannel);

// POST a new Channel
router.post("/postChannel", postChannel);

module.exports = router;
