const mongoose = require("mongoose");

const schoolSchema = new mongoose.Schema({

    schoolname : {
        type :"string",
        require : true,
    },
    schooltime: {
        type :"string",
        require : true,
    },
    schoolstd : {
        type :"string",
        require : true,
    },
    schoolfees : {
        type :"Number",
        require : true,
    }



}
);

const user = mongoose.model("school",schoolSchema);

module.exports = school;