

//Chat app Schema 

const mongoose = require('mongoose')
mongoose.connect("URL of Your DB")

const userCollectionSchema = mongoose.Schema({
    username : {
        type : String,
        unique:true,
        required:true
    },
    email : {
        type:String,
        unique:true,
        required:true,
        match: /.+\@.+\..+/ 
    },
    password : {
        type:String,
        unique:false,
        required:true
    },
    profilePics : {
        type:String,
        required:false
    },
    friends : [{type: mongoose.Schema.Types.ObjectId, ref : "usersCollections"}]
},
{timestamps:true})



const postCollectionSchema = mongoose.Schema({
    author:[{type : mongoose.Schema.Types.ObjectId, ref :"usersCollections", required:true}],
    content:{
        type:String,
        unique:false,
        required:true
    },
    likes: [{type : mongoose.Schema.Types.ObjectId, ref :"usersCollections"}],
    comments:[{
        author : {type: mongoose.Schema.Types.ObjectId, ref:"usersCollections"},
        text: String, 
        createdAt: {type:Date, default:Date.now}
}]
},{timestamps:true})



const messageCollectionSchema = mongoose.Schema({
    sender:{
        type:mongoose.Schema.Types.ObjectId,
        ref:"usersCollections",
        required: true
    },
    reciever : {
        type:mongoose.Schema.Types.ObjectId,
        ref:"usersCollections",
        required: true
    }, 
},{timestamps:true})

const users = mongoose.model("usersCollections",userCollectionSchema)
const post = mongoose.model("postCollections",postCollectionSchema)
const message = mongoose.model("messageCollections", messageCollectionSchema)

module.exports = {
    users,
    post,
    message
}