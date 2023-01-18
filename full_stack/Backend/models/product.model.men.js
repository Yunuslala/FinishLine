const mongoose=require("mongoose");
const ProductSchema=mongoose.Schema({
    image:{type:String, require:true},
    type:{type:String, require:true},
    Brand:{type:String, require:true},
    price:{type:String, require:true},
    for:{type:String, require:true},
    des:{type:String, require:true},
    Rating:{type:String, require:true},
    category:{type:String, require:true},
    numbering:{type:String, require:true}
});

const ProductMenMOdel=mongoose.model("Productofmen",ProductSchema);

module.exports={
    ProductMenMOdel
}