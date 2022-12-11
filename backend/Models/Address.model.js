const mongoose=require("mongoose");

const addressSchema=mongoose.Schema({
pin_code:{type:Number, required:true},
city:{type:String, required:true},
state:{type:String, required:true},
flat_street_name:{type:String, required:true},
area_locality:{type:String, required:true},
landmark:{type:String},
address_as:{type:String},
name:{type:String, requried:true},
number:{type:String, requried:true}


})


const AddressModel=mongoose.model("address",addressSchema);


module.exports={AddressModel}
