var mongoose = require('mongoose');

var VideoSchema=mongoose.Schema({
    name:String,
    description:String,
    video:String,
    transcript:String,
    time:Date,
    videoID:String,
    comment:[{type:mongoose.Schema.Types.ObjectId, ref:'comment'}]
})
module.exports= mongoose.model('video', VideoSchema);