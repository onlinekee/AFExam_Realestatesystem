const mongoose = require("mongoose");
const { ObjectId } = mongoose.Schema;

const houseProductSchema = new mongoose.Schema(
    {
        name: {
            type: String,
            trim: true,
            required: true,
            maxlength: 32
        },
        description: {
            type: String,
            required: true,
            maxlength: 3000
        },
        price: {
            type: Number,
            trim: true,
            required: true,
            maxlength: 20
        },
        photo: {
            data: Buffer,
            contentType: String
        },
       
    },
    { timestamps: true }
);

module.exports = mongoose.model("HouseProduct", houseProductSchema);
