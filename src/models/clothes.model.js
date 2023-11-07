const mongoose = require("mongoose");

const  clothesSchema = new mongoose.Schema(
    {
        catogry :{
            type : "String",
            require : true,
        },
        stock :{
            type : "String",
            require : true,
        },
        price :{
            type : "Number",
            require : true,
        },
        size :{
            type : "String",
            require : true,
        }
    }
);

const user = mongoose.model(" clothes", clothesSchema);

module.exports = clothes;