const mongoose = require("mongoose");

const danceacademySchema = new mongoose.Schema(
    {
        firstname :{
            type : "String",
            require : true,
        },
        lastname :{
            type : "String",
            require : true,
        },
        email :{
            type : "String",
            require : true,
        },
        fees :{
            type : "Number",
            require : true,
        },
        time :{
            type : "string",
            require : true,
        }
    }
);

const user = mongoose.model("danceacademy",danceacademySchema);

module.exports = danceacademy;