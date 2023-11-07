const mongoose = require("mongoose");

const sstoreSchema = new mongoose.Schema({

    sstoreproductname : {
        type :"string",
        require : true,
    },
    sstoreproductcost: {
        type :"string",
        require : true,
    },
    sstoreproducstock: {
        type :"Number",
        require : true,
    }



}
);

const user = mongoose.model("sstore",sstoreSchema);

module.exports = sstore;