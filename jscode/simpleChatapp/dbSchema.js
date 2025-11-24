
const mongoose = require('mongoose')

const messageSchema = mongoose.Schema({
    sender : String,
    receiver : String,
    text :String,
}, {timestamps : true});

const photoSchema = mongoose.schema({
    user : String,
    url :  String,
    caption: String,
},{timestamps : true});

const Message = mongoose.model("message", messageSchema);
const Photo = mongoose.model("photo", photoSchema);

module.exports = {
    Message,
    Photo
}