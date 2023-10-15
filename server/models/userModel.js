import  mongoose  from "mongoose";


const UserSchema = mongoose.Schema({
    username:{type:String},
    useremail:{type:String},
    userpassword:{type:String}
})

export const Usermodel = mongoose.model("User",UserSchema)