const mongoose = require("mongoose");
const Schema = mongoose.Schema;
const objectId = mongoose.Types.ObjectId;


const userSchema = new Schema({
    email:{type:String , unique:true},
    password:String,
    firsName:String,
    lastName:String
});

const adminSchema = new Schema({
    email:{type:String , unique:true},
    password:String,
    firsName:String,
    lastName:String
});

const courseSchema = new Schema({
    title:String,
    description: String, 
    imageUrl: String,
    price: String,
    creatorId:objectId
});

const purchaseSchema = new Schema({
    userId:objectId,
    courseId:objectId
});



const userModel = mongoose.model("user",userSchema);
const adminModel = mongoose.model("admin",adminSchema);
const courseModel = mongoose.model("course",courseSchema);
const purchaseModel = mongoose.model("purchase",purchaseSchema); 


module.exports={
    userModel,
    adminModel,
    courseModel,
    purchaseModel
}