const mongoose = require("mongoose");

const trianSchema = new mongoose.Schema({

    trianname : {
        type :"string",
        require : true,
    },
    triantime: {
        type :"string",
        require : true,
    },
    trianticket : {
        type :"string",
        require : true,
    }



}
);

const user = mongoose.model("trian",trianSchema);

module.exports = trian;