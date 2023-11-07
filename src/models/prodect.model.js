const mongoose = require("mongoose");

const productSchema = new mongoose.Schema({

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

const user = mongoose.model("product",productSchema);

module.exports = product;