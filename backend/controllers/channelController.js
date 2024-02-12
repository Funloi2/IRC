const Channel = require('../models/channelModel')
const mongoose = require('mongoose')

//Get all Channels
const getChannels = async(req, res) =>{
    const channels = await Channel.find({}).sort({createdAt: -1})
    res.status(200).json(channels)
}

//Get a single Channel
const getChannel = async(req, res) =>{
    const { id } = req.params
    if (!mongoose.Types.ObjectId.isValid(id)){
        return res.status(404).json({error: 'No such channel'})
    }
    const channel = await Channel.findById(id)
    if (!channel){
        return res.status(404).json({error: 'No such channel'})
    }
    res.status(200).json(channel)

}

//Post a new Channel
const postChannel = async(req, res) =>{
    const {name, description} = req.body

    //add document to collection
    try{
        const channel = await Channel.create({name, description})
        res.status(200).json(channel)
    }catch (err){
        res.status(400).json({msg: err.message})
    }
}

//Delete a Channel
const deleteChannel = async(req, res) =>{
    const { id } = req.params
    if(!mongoose.Types.ObjectId.isValid(id)){
        return res.status(404).json({error: 'No such channel'})
    }
    const channel = await Channel.findOneAndDelete({_id: id})
    if(!channel){
        return res.status(404).json({error: 'No such channel'})
    }
    res.status(200).json({msg: 'channel deleted'})
}


//Update a Channel
const updateChannel = async(req, res)=>{
    const { id } = req.params
    if(!mongoose.Types.ObjectId.isValid(id)){
        return res.status(404).json({error: 'No such Channelt'})
    }

    const channel = await Channel.findOneAndUpdate({_id: id},{
        ...req.body,
    })
    if(!channel){
        return res.status(404).json({error: 'No such channel'})
    }
    res.status(200).json({msg: 'Channel updated'})
}


module.exports = {
    getChannels,
    getChannel,
    postChannel,
    updateChannel,
    deleteChannel,
}
