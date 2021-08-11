const mongoose=require("mongoose");


const promocafeSchema= new mongoose.Schema({

title:{
    type:String,
    minlength:3,
    required:true,
},

type:{
    type:String,
    minlength:3,
    required:true,
},

promocode:{
    type:String,
    minlength:2,
    required:true,
},

restaurant:{
    type:String,
    minlength:4,
    required:true,
},

beforeprice:{
    type:Number,
    minlength:2,
    required:true,
},

afterprice:{
    type:Number,
    minlength:2,
    required:true,
},

expirydate:{
    type:String,
    minlength:2,
    required:true,
}


})

const Promocafe=mongoose.model('Promocafe',promocafeSchema);

module.exports=Promocafe;