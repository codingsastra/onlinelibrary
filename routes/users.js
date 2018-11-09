var express=require("express");
var router=express.Router();
var verifyToken=require('./verifyToken')
var bcrypt=require("bcryptjs");
var jwt=require("jsonwebtoken")
var db=require("../db")

//Get user books
router.get("/books",verifyToken,(req,res)=>{
    db.Book.find({},(err,books)=>{
        if(err) res.status(500).send("Error");
        res.status(200).send(books)
    })
})

router.route("/register")
    .post((req,res)=>{

        //encrypt password before save
        var hashedPassword=bcrypt.hashSync(req.body.password, 8);
        req.body.password=hashedPassword;

        var newUser=new db.User(req.body);
        newUser.save()
        .then((user)=>{

            //create jwt token
            var token = jwt.sign({ id: user._id },
                                    "supersecret", {
                                    expiresIn: 86400 // expires in 24 hours
                                });
            console.log(token);
            res.status(200).send({auth:true,token: token});
        })
        .catch((err)=>{
            res.status(500).send(err);
        })
    })

//Login User
router.route("/login")
    .post((req,res)=>{
        db.User.findOne({
            email:req.body.email
        })
        .then((user)=>{
            if (!user) return res.status(404).send('No user found.');
            
            //Check password matches
            var passwordIsValid = bcrypt.compareSync(req.body.password, user.password);
            if (!passwordIsValid) return res.status(401).send({ auth: false, token: null });
    
            var token = jwt.sign({ id: user._id }, "supersecret", {
                expiresIn: 86400 // expires in 24 hours
            });

            res.status(200).send({ auth: true, token: token });
        })
        .catch((err)=>{
            res.status(500).send({
                message:"Unable to login. Try again later"
            });
        })
    })

router.route("/books/:bookid")
.post(verifyToken,(req,res)=>{
    //
})
.delete(verifyToken,(req,res)=>{
    //
})

module.exports=router;