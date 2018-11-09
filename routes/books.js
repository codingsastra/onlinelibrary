var express=require("express");
var router=express.Router();

var db=require("../db")

router.route("/")
.get((req,res)=>{
    db.Book.find({},(err,books)=>{
        if(err) res.status(500).send("Error");
        res.status(200).send(books)
    })
})
.post((req,res)=>{
    var newBook=new db.Book(req.body);
    newBook.save((err,book)=>{
        if(err) res.status(500).send(err);
        res.status(200).send(book)
    })
})

router.route("/:id")
.get((req,res)=>{
    var id=req.params.id;
    db.Book.findById(id,(err,book)=>{
        if(err) res.status(500).send("Error");
        res.status(200).send(book)
    })
})
.put((req,res)=>{
    db.Book.findByIdAndUpdate(req.params.id,req.body,(err,book)=>{
        if(err) res.status(500).send(err);
        res.status(200).send(book)
    })
})
.delete((req,res)=>{
    db.Book.findByIdAndDelete(req.params.id,(err,book)=>{
        if(err) res.status(500).send(err);
        res.status(200).send(book)
    })
})

module.exports=router;