//Register Schema 

const mongoose = require('mongoose')

mongoose.connect('URL')

const RegisterSchema = mongoose.Schema({
    userName : {
        type : String,
        unique: true,
        required:true
    },
    email : {
        type:String,
        unique:true,
        requied:true
    },
    password : {
        type:String,
        required:true
    },
    date : {
        type:String,
        default:Date.now
    },
    timestamps : true,
})

const Registers = mongoose.Model("RegisterCollection", RegisterSchema)

module.exports = {
    Registers
}