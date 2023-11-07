const mongoose = require("mongoose");

const carSchema = new mongoose.Schema({

    carname : {
        type :"string",
        require : true,
    },
    carcompany: {
        type :"string",
        require : true,
    },
    carprice : {
        type :"Number",
        require : true,
    },
    carlanchdate : {
        type :"Number",
        require : true,
    }



}
);

const user = mongoose.model("car",carSchema);

module.exports = car;