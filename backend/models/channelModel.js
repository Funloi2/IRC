const mongoose = require("mongoose");

const Schema = mongoose.Schema;

const channelSchema = new Schema(
    {
        description: {
            type: String,
            required: true,
        },
        name: {
            type: String,
            required: true,
            unique: true,
        },
    },
    { timestamps: true}
);

module.exports = mongoose.model("Channel", channelSchema);
