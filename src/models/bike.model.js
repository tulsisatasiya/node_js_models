const mongoose = require("mongoose");

const bikeSchema = new mongoose.Schema({

    bikename : {
        type :"string",
        require : true,
    },
    bikecompany: {
        type :"string",
        require : true,
    },
    bikeprice : {
        type :"Number",
        require : true,
    },
    bikelanchdate : {
        type :"Number",
        require : true,
    }



}
);

const user = mongoose.model("bike",bikeSchema);

module.exports = bike;