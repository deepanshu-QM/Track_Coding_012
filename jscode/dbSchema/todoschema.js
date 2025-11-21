
const mongoose = require("mongoose");
//mongodb url 

mongoose.connect("URL of Your mongoDB server")

const todoSchema = mongoose.Schema({
    title:String,
    description: String,
    completed: Boolean
})

const todo = mongoose.model("todos", todoSchema);

module.exports = {
    todo : todo    
}