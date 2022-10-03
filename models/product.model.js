const mongoose  = require("mongoose");

const productSchema = mongoose.Schema({
    id: {
        type: String,
        require: true,
    },
    name: {
        type: String,
        require: true,
    },
    qty: {
        type: Number,
        require: true,
    },
    price: {
        type: Number,
        require: true,
    },
    image: {
        type: String,
        require: true,
    },
    createdOn: {
        type: Date,
        default: Date.now,
    },
});

module.exports = mongoose.model("Product", productSchema);