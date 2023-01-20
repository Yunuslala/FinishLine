const express=require("express");
const {ProductMenMOdel}=require("../models/product.model.men");
const {ProductWomenMOdel}=require("../models/product.model.women")
const { authentication}=require("../middleware/user.authentication");
const productRoute=express.Router();
const cors=require('cors');
const { loginRoute } = require("./login.router");
loginRoute.use(cors())
productRoute.use(authentication)

productRoute.post("/Men/shoes/",async(req,res)=>{
    try {
        let obj=req.body;
        let data=await ProductMenMOdel.find(obj);
        res.send(data);
    } catch (error) {
        console.log(error);
        res.send({"msg":"something went wrong"})
    }
});
productRoute.post("/Men/clothes/",async(req,res)=>{
    try {
        let obj=req.body;
        let data=await ProductMenMOdel.find(obj);
        res.send(data);
    } catch (error) {
        console.log(error);
        res.send({"msg":"something went wrong"})
    }
})

productRoute.post("/Women/shoes/",async(req,res)=>{
    try {
        let obj=req.body;
       
        let data=await ProductWomenMOdel.find();
        res.send(data);
    } catch (error) {
        console.log(error);
        res.send({"msg":"something went wrong"})
    }
});

productRoute.post("/Women/clothes/",async(req,res)=>{
    try {
        let obj=req.body;
        let data=await ProductWomenMOdel.find(obj);
        res.send(data);
    } catch (error) {
        console.log(error);
        res.send({"msg":"something went wrong"})
    }
});
productRoute.post("/boys/shoes/",async(req,res)=>{
    try {
        let obj=req.body;
        let data=await ProductMenMOdel.find(obj);
        res.send(data);
    } catch (error) {
        console.log(error);
        res.send({"msg":"something went wrong"})
    }
});
productRoute.post("/boys/clothes/",async(req,res)=>{
    try {
        let obj=req.body;
        let data=await ProductMenMOdel.find(obj);
        res.send(data);
    } catch (error) {
        console.log(error);
        res.send({"msg":"something went wrong"})
    }
});
productRoute.post("/girls/shoes/",async(req,res)=>{
    try {
        let obj=req.body;
        let data=await ProductMenMOdel.find(obj);
        res.send(data);
    } catch (error) {
        console.log(error);
        res.send({"msg":"something went wrong"})
    }
});
productRoute.post("/Men/clothes/",async(req,res)=>{
    try {
        let obj=req.body;
        let data=await ProductMenMOdel.find(obj);
        res.send(data);
    } catch (error) {
        console.log(error);
        res.send({"msg":"something went wrong"})
    }
});
//Sorting
productRoute.get("/Men/clothes",async(req,res)=>{
    try {
        if(req.query.sort=="asc"){
            var data=await ProductMenMOdel.find();
            data.sort((a,b)=> a.price-b.price);
        }else if(req.query.sort=="desc"){
            var data=await ProductMenMOdel.find();
            data.sort((a,b)=> b.price-a.price);
        };
        res.send(data)
    } catch (error) {
        console.log(error);
        res.send({"msg":"something went wrong"})
    }
});
productRoute.get("/Women/clothes",async(req,res)=>{
    try {
        if(req.query.sort=="asc"){
            var data=await ProductWomenMOdel.find();
            data.sort((a,b)=> a.price-b.price);
        }else if(req.query.sort=="desc"){
            var data=await ProductWomenMOdel.find();
            data.sort((a,b)=> b.price-a.price);
        };
        res.send(data)
    } catch (error) {
        console.log(error);
        res.send({"msg":"something went wrong"})
    }
});
productRoute.get("/kids/clothes",async(req,res)=>{
    try {
        if(req.query.sort=="asc"){
            var data=await ProductMenMOdel.find();
            data.sort((a,b)=> a.price-b.price);
        }else if(req.query.sort=="desc"){
            var data=await ProductMenMOdel.find();
            data.sort((a,b)=> b.price-a.price);
        };
        res.send(data)
    } catch (error) {
        console.log(error);
        res.send({"msg":"something went wrong"})
    }
});
productRoute.get("/girls/shoes",async(req,res)=>{
    try {
        if(req.query.sort=="asc"){
            var data=await ProductMenMOdel.find();
            data.sort((a,b)=> a.price-b.price);
        }else if(req.query.sort=="desc"){
            var data=await ProductMenMOdel.find();
            data.sort((a,b)=> b.price-a.price);
        };
        res.send(data)
    } catch (error) {
        console.log(error);
        res.send({"msg":"something went wrong"})
    }
});
productRoute.get("/Men/shoes",async(req,res)=>{
    try {
        if(req.query.sort=="asc"){
            var data=await ProductMenMOdel.find(); 
            data.sort((a,b)=> a.price-b.price);
        }else if(req.query.sort=="desc"){
            var data=await ProductMenMOdel.find();
            data.sort((a,b)=> b.price-a.price);
        };
        res.send(data)
    } catch (error) {
        console.log(error);
        res.send({"msg":"something went wrong"})
    }
});
productRoute.get("/women/shoes",async(req,res)=>{
    try {
        if(req.query.sort=="asc"){
            var data=await ProductWomenMOdel.find();
            data.sort((a,b)=> a.price-b.price);
        }else if(req.query.sort=="desc"){
            var data=await ProductWomenMOdel.find();
            data.sort((a,b)=> b.price-a.price);
        };
        res.send(data)
    } catch (error) {
        console.log(error);
        res.send({"msg":"something went wrong"})
    }
});
productRoute.get("/kids/shoes",async(req,res)=>{
    try {
        if(req.query.sort=="asc"){
            var data=await ProductMenMOdel.find();
            data.sort((a,b)=> a.price-b.price);
        }else if(req.query.sort=="desc"){
            var data=await ProductMenMOdel.find();
            data.sort((a,b)=> b.price-a.price);
        };
        res.send(data)
    } catch (error) {
        console.log(error);
        res.send({"msg":"something went wrong"})
    }
});

module.exports={
    productRoute
}


