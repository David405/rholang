var mongoose = require('mongoose');

var UserSchema=mongoose.Schema({
    Name:String,
    username:{type: String, unique: true},
    email:{type: String, unique: true},
    profile_pics:{type:String, default:"https://res.cloudinary.com/school-fleep/image/upload/v1535357797/avatar-1577909_640.png"},
    profile_pics_id:String,
    time:Date,
    isAdmin:{type:Number, default:0},
    password: String,
})
module.exports= mongoose.model('user', UserSchema);