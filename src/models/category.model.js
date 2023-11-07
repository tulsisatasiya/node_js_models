const mongoose = require("mongoose");

const categorySchema = new mongoose.Schema({

    categoryname : {
        type :"string",
        require : true,
    },
    categorytype: {
        type :"string",
        require : true,
    }



}
);

const user = mongoose.model("category",categorySchema);

module.exports = category;