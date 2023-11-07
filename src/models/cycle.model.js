const mongoose = require("mongoose");

const cycleSchema = new mongoose.Schema({

    cyclename : {
        type :"string",
        require : true,
    },
    cyclecompany: {
        type :"string",
        require : true,
    },
    cycleprice : {
        type :"Number",
        require : true,
    },
    cyclelanchdate : {
        type :"Number",
        require : true,
    }



}
);

const user = mongoose.model("cycle",cycleSchema);

module.exports = cycle;