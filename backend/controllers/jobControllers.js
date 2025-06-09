const  jobModel = require("../models/jobModels")

exports.getjobs = async (req , res , next) => { 
   const query  = req.query.keyword?{title :{ 
      $regex :req.query.keyword , 
      $options : "i"
   }} :{}
 
 const  jobs = await jobModel.find(query) ;
 res.json ({
    sucess : true ,
    jobs 
 })
}