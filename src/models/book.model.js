const mongoose = require("mongoose");

const bookSchema = new mongoose.Schema({

    bookname : {
        type :"string",
        require : true,
    },
    bookauthore : {
        type :"string",
        require : true,
    },
    bookprice : {
        type :"Number",
        require : true,
    }



}
);

const user = mongoose.model("book",bookSchema);

module.exports = book;