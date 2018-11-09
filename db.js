var mongoose=require("mongoose");
mongoose.connect("mongodb://localhost:27017/onlinelibrary")

//Create schema
var bookSchema=mongoose.Schema({
    title: {
        type:String,
        required:true
    },
    author: String,
    picture: String,
    dateAdded: {
        type:Date,
        default:Date.now
    }
})

//Create model
exports.Book=mongoose.model("Book",bookSchema,"books")

var userSchema=mongoose.Schema({
    firstName:String,
    lastName:String,
    email:String,
    password:String,
    phone: String,
    role: {
        type:String,
        default:'learner'
    },
    books:[String]
})

exports.User=mongoose.model('User',userSchema,'users')