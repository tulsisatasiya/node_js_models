const mongoose = require("mongoose");

const employeeSchema = new mongoose.Schema(
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
        salary :{
            type : "Number",
            require : true,
        },
        phoneno :{
            type : "Number",
            require : true,
        }
    }
);

const user = mongoose.model("employee",employeeSchema);

module.exports = employee;