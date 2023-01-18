const jwt=require("jsonwebtoken");
const authentication=(req,res,next)=>{
    var token=req.headers.authorization;
    var decoded=jwt.verify(token,'masai');
    if(decoded){
        req.body.userid=decoded.dataid;
    
        next()
    }
};


module.exports={
    authentication
}