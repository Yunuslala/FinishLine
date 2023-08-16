const searchingRouter=require("express").Router();
const {ProductMenMOdel}=require("../models/product.model.men");
const {ProductWomenMOdel}=require("../models/product.model.women");
const {ProductgirlMOdel}=require("../models/product.model.girls");
const {ProductboysMOdel}=require("../models/product.model.boys");
const algolia=require("algoliasearch");
const client=algolia('LONXBB8T1T', 'ef81787f92115702d824e8b0e6651588');
const fetch = (...args) => import('node-fetch').then(({default: fetch}) => fetch(...args));


// fetch('https://fakestoreapi.com/products')
//             .then(res=>res.json())
//             .then(json=>{
//               postData(json)
//             })
const postData=async(json)=>{
    try {
      const index = client.initIndex('productIndexs');
      const indexingPromises = json.map(async (item) => {
        const indexingResult = await index.saveObject(item, { autoGenerateObjectIDIfNotExist: true });
        return indexingResult;
      });
  
      const indexingResults = await Promise.all(indexingPromises);
  
      console.log({ "msg": "data is posted", "product": json, "indexingResults": indexingResults });
  
       
    } catch (error) {
      console.log(error)
    }
  
  }
searchingRouter.get("/get",async(req,res)=>{
    try {
        res.send({"msg":"have server"})
    } catch (error) {
        
    }
})
const SearchIndex= client.initIndex("AllProducts");
searchingRouter.post('/post/aloglia',async(req,res)=>{
    try {
        const menData=await ProductMenMOdel.find();
        const womenData=await ProductWomenMOdel.find();
        const girlData=await ProductgirlMOdel.find();
        const boysData=await ProductboysMOdel.find();
        const AllData=[...menData,...womenData,...girlData,...boysData];
        
           const saveData= await SearchIndex.saveObjects(AllData,{autoGenerateObjectIDIfNotExist:true});

        // const AllsaveData=await Promise.all(savedobjects)
        console.log(saveData);
        res.status(201).send({"msg":"all data is stored in algolia-search",saveData})
    } catch (error) {
        console.log(error);
        res.status(500).send({"msg":"something went wrong",error})
    }
})


searchingRouter.get('/get/algolia',async(req,res)=>{
    try {
        const q=req.query.q;
        console.log(q);
        const searchOptions = {
            
           
         
          };
        const data=await SearchIndex.search(`${q}`,{
            queryType: 'prefixAll', 
            typoTolerance: true,
            hitsPerPage:1000,
        });
        console.log(data.hits);
        if(data.hits.length){
            const formattedResults = data.hits.map(hit => ({
                _id:hit._id,image:hit.image,type:hit.type,Brand:hit.Brand,price:hit.price,For:hit.For,des:hit.des,category:hit.category,color:hit.color
              }));
           
            console.log(formattedResults)
            return res.status(200).send(formattedResults);
        }else{
            const queryData=q.split(" ");
            const convertedString = queryData.slice(0, -1).join(' ');
            console.log(queryData);
            const data=await SearchIndex.search(`${convertedString}`,{
                queryType: 'prefixAll', 
                typoTolerance: true,
                hitsPerPage:1000,
            });
            const formattedResults = data.hits.map(hit => ({
                _id:hit._id,image:hit.image,type:hit.type,Brand:hit.Brand,price:hit.price,For:hit.For,des:hit.des,category:hit.category,color:hit.color
              }));
           
            console.log(formattedResults)
            return res.status(200).send(formattedResults);
        }
       
    } catch (error) {
        console.log(error);
        res.status(500).send({"msg":"something went wrong",error})
    }
})

module.exports={
    searchingRouter
}