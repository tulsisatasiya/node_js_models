const mongoose = require("mongoose");

const collegeSchema = new mongoose.Schema({

    collegename : {
        type :"string",
        require : true,
    },
    collegetime: {
        type :"string",
        require : true,
    },
    collegestream : {
        type :"string",
        require : true,
    },
    collegefees : {
        type :"Number",
        require : true,
    },



}
);

const user = mongoose.model("college",collegeSchema);

module.exports = college;