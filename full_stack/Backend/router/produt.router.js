const express=require("express");
const {ProductMenMOdel}=require("../models/product.model.men");
const {ProductWomenMOdel}=require("../models/product.model.women")

const productRoute=express.Router();

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
productRoute.post("/Men/clothes/?sort",async(req,res)=>{
    try {
        if(req.query.sort=="asc"){
            let data=await ProductMenMOdel.sort({"price":1})
        }else if(req.query.sort=="desc"){
            let data=await ProductMenMOdel.sort({"price":-1})
        };
        res.send(data)
    } catch (error) {
        console.log(error);
        res.send({"msg":"something went wrong"})
    }
});
productRoute.post("/Women/clothes/?sort",async(req,res)=>{
    try {
        if(req.query.sort=="asc"){
            var data=await ProductWomenMOdel.sort({"price":1})
        }else if(req.query.sort=="desc"){
            var data=await ProductWomenMOdel.sort({"price":-1})
        };
        res.send(data)
    } catch (error) {
        console.log(error);
        res.send({"msg":"something went wrong"})
    }
});
productRoute.post("/kids/clothes/?sort",async(req,res)=>{
    try {
        if(req.query.sort=="asc"){
            var data=await ProductMenMOdel.sort({"price":1})
        }else if(req.query.sort=="desc"){
            var data=await ProductMenMOdel.sort({"price":-1})
        };
        res.send(data)
    } catch (error) {
        console.log(error);
        res.send({"msg":"something went wrong"})
    }
});
productRoute.post("/girls/shoes/?sort",async(req,res)=>{
    try {
        if(req.query.sort=="asc"){
            var data=await ProductMenMOdel.sort({"price":1})
        }else if(req.query.sort=="desc"){
            var data=await ProductMenMOdel.sort({"price":-1})
        };
        res.send(data)
    } catch (error) {
        console.log(error);
        res.send({"msg":"something went wrong"})
    }
});
productRoute.post("/Men/shoes/?sort",async(req,res)=>{
    try {
        if(req.query.sort=="asc"){
            var data=await ProductMenMOdel.sort({"price":1})
        }else if(req.query.sort=="desc"){
            var data=await ProductMenMOdel.sort({"price":-1})
        };
        res.send(data)
    } catch (error) {
        console.log(error);
        res.send({"msg":"something went wrong"})
    }
});
productRoute.post("/Women/shoes/?sort",async(req,res)=>{
    try {
        if(req.query.sort=="asc"){
            var data=await ProductWomenMOdel.sort({"price":1})
        }else if(req.query.sort=="desc"){
            var data=await ProductWomenMOdel.sort({"price":-1})
        };
        res.send(data)
    } catch (error) {
        console.log(error);
        res.send({"msg":"something went wrong"})
    }
});
productRoute.post("/kids/shoes/?sort",async(req,res)=>{
    try {
        if(req.query.sort=="asc"){
            var data=await ProductMenMOdel.sort({"price":1})
        }else if(req.query.sort=="desc"){
            var data=await ProductMenMOdel.sort({"price":-1})
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


