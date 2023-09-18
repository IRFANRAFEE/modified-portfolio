const mongoose = require("mongoose");
const validator = require("validator");
 const contactSchema =   mongoose.Schema({
    name:{
        type:String,
        required:true
    },
    email:{
        type:String,
        required:true,
        unique:true,
    validate(value){
        if (!validator.isEmail(value)) {
            throw new Error("Invalid Email id");
        }
    }
    },
    subject:{
        type:String,
        required:true
    },
    message:{
        type:String,
        required:true
    }
 });
  const ContactModel =  mongoose.model("ContactModel" ,contactSchema);
  module.exports = ContactModel;