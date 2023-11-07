const mongoose = require("mongoose");

const travelSchema = new mongoose.Schema({

    place : {
        type :"string",
        require : true,
    },
    arrivaldate: {
        type :"string",
        require : true,
    },
    dipa : {
        type :"string",
        require : true,
    }



}
);

const user = mongoose.model("travel",travelSchema);

module.exports = travel;