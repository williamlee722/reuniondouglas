const mongoose = require("mongoose");
const blogSchema = new mongoose.Schema({
    title: {
        type:String,
        required: [true, "Title cant be empty"]
    },
    author: {
        type: String,
        required: [true, "Author cant be empty"]
    },
    headerImage: String,
    text: {
        type: String,
        required: [true, "Blog text cant be empty"]
    }
})

const Blog = mongoose.model("Blog",blogSchema)

module.exports = Blog