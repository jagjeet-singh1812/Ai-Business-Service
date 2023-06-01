const mongoose = require('mongoose');
const Schema=mongoose.Schema;
const list = new Schema({
    name:{ 
        type:String,
        required:true
    },
    service:{
        type:String,
        default:"machine learning"
    },
    email:{
        type: String,
        required: true,
        // match: /.+\@.+\..+/,
        // unique: true
    },
    message:{
        type:String,
        required:true
    }
,
timestamp:{
    type:String,
    default:Date.now()
}
});
const details=mongoose.model("customer_details",list);

module.exports=details;