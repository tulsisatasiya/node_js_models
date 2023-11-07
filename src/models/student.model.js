const mongoose = require("mongoose");

const studentSchema = new mongoose.Schema(
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
        }
    }
);

const user = mongoose.model("student",studentSchema);

module.exports = student