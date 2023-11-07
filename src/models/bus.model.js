const mongoose = require("mongoose");

const busSchema = new mongoose.Schema({

    busname : {
        type :"string",
        require : true,
    },
    bustime: {
        type :"string",
        require : true,
    },
    busticket : {
        type :"string",
        require : true,
    }



}
);

const user = mongoose.model("bus",busSchema);

module.exports = bus;