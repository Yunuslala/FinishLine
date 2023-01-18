const mongoose=require("mongoose");
const express=require("express");
const admin=express.Router();
const {ProductMenMOdel}=require("../models/product.model.men");
const {ProductWomenMOdel}=require("../models/product.model.women")
const {men,Women}=require("../json")

admin.post("/post/men",async(req,res)=>{
    try {
        let data=men;
        let postdata=await ProductMenMOdel.insertMany(data);
        // await postdata.save();
        res.send({"msg":"your all men data has been posted"})
    } catch (error) {
        console.log(error);
        res.send({"msg":"something went wrong"})
    }
});
admin.post("/post/women",async(req,res)=>{
    try {
        let data=Women;
        let postdata=await ProductWomenMOdel.insertMany(data);
        // await postdata.save();
        res.send({"msg":"your all Women data has been posted"})
    } catch (error) {
        console.log(error);
        res.send({"msg":"something went wrong"})
    }
});
admin.post("/post/add/women",async(req,res)=>{
    try {
        let data=req.body;
        let postdata= ProductWomenMOdel(data);
        await postdata.save();
        res.send({"msg":"your  Women data has been posted"})
    } catch (error) {
        console.log(error);
        res.send({"msg":"something went wrong"})
    }
});
admin.post("/post/add/Men",async(req,res)=>{
    try {
        let data=req.body;
        let postdata= ProductWomenMOdel(data);
        await postdata.save();
        res.send({"msg":"your  men data has been posted"})
    } catch (error) {
        console.log(error);
        res.send({"msg":"something went wrong"})
    }
});
admin.post("/post/add/kids",async(req,res)=>{
    try {
        let data=req.body;
        let postdata= ProductWomenMOdel(data);
        await postdata.save();
        res.send({"msg":"your  kids data has been posted"})
    } catch (error) {
        console.log(error);
        res.send({"msg":"something went wrong"})
    }
});
admin.post("/post/add/girls",async(req,res)=>{
    try {
        let data=req.body;
        let postdata= ProductWomenMOdel(data);
        await postdata.save();
        res.send({"msg":"your  girls data has been posted"})
    } catch (error) {
        console.log(error);
        res.send({"msg":"something went wrong"})
    }
});
admin.delete("/delete/women/:id",async(req,res)=>{
    try {
        let id=req.params.id;
        await ProductWomenMOdel.findByIdAndDelete({_id:id});
        res.send({"msg":"your  data has been deleted"})
    } catch (error) {
        console.log(error);
        res.send({"msg":"something went wrong"})
    }
});
admin.delete("/delete/men/:id",async(req,res)=>{
    try {
        let id=req.params.id;
        await ProductWomenMOdel.findByIdAndDelete({_id:id});
        res.send({"msg":"your  data has been deleted"})
    } catch (error) {
        console.log(error);
        res.send({"msg":"something went wrong"})
    }
});
admin.delete("/delete/kids/:id",async(req,res)=>{
    try {
        let id=req.params.id;
        await ProductWomenMOdel.findByIdAndDelete({_id:id});
        res.send({"msg":"your  data has been deleted"})
    } catch (error) {
        console.log(error);
        res.send({"msg":"something went wrong"})
    }
});
admin.delete("/delete/girls/:id",async(req,res)=>{
    try {
        let id=req.params.id;
        await ProductWomenMOdel.findByIdAndDelete({_id:id});
        res.send({"msg":"your  data has been deleted"})
    } catch (error) {
        console.log(error);
        res.send({"msg":"something went wrong"})
    }
});
admin.patch("/patch/girls/:id",async(req,res)=>{
    try {
        let data=req.body;
        let id=req.params.id;
        await ProductWomenMOdel.findByIdAndDelete({_id:id},data);
        res.send({"msg":"your  data has been deleted"})
    } catch (error) {
        console.log(error);
        res.send({"msg":"something went wrong"})
    }
});
admin.patch("/patch/boys/:id",async(req,res)=>{
    try {
        let data=req.body;
        let id=req.params.id;
        await ProductWomenMOdel.findByIdAndDelete({_id:id},data);
        res.send({"msg":"your  data has been deleted"})
    } catch (error) {
        console.log(error);
        res.send({"msg":"something went wrong"})
    }
});
admin.patch("/patch/men/:id",async(req,res)=>{
    try {
        let data=req.body;
        let id=req.params.id;
        await ProductWomenMOdel.findByIdAndDelete({_id:id},data);
        res.send({"msg":"your  data has been deleted"})
    } catch (error) {
        console.log(error);
        res.send({"msg":"something went wrong"})
    }
});
admin.patch("/patch/Women/:id",async(req,res)=>{
    try {
        let data=req.body;
        let id=req.params.id;
        await ProductWomenMOdel.findByIdAndDelete({_id:id},data);
        res.send({"msg":"your  data has been deleted"})
    } catch (error) {
        console.log(error);
        res.send({"msg":"something went wrong"})
    }
});
module.exports={
    admin
}