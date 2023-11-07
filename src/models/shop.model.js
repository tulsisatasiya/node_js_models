const mongoose = require("mongoose");

const shopSchema = new mongoose.Schema({

    productname : {
        type :"string",
        require : true,
    },
    productcost: {
        type :"string",
        require : true,
    },
    producstock: {
        type :"Number",
        require : true,
    }



}
);

const user = mongoose.model("shop",shopSchema);

module.exports = shop;