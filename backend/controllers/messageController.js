const Message = require("../models/messageModel");
const {getChannels} = require("./channelController");
const Channel = require('../models/channelModel')


// Post a message on a channel

const postMessage = async (req, res) => {
    try {
        if(req.body.message === '/list'){
            const channels = await Channel.find({}).sort({createdAt: -1})
            res.status(200).json(channels)
        }else{
            const message = await Message.create(req.body);
            res.status(200).json(message);
        }



    } catch (err) {
        res.status(400).json({error: err.message});
    }
};

// Get 500 last messages from a channel

const getMessages = async (req, res) => {
    try {
        const messages = await Message.find(/*{ channelId: channelId }*/)
            .sort({createdAt: -1})
            .limit(500);
        res.status(200).json(messages);
    } catch (err) {
        res.status(400).json({error: err.message});
    }
};

module.exports = {
    postMessage,
    getMessages,
};