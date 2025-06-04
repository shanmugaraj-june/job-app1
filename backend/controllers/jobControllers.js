const  jobModel = require("../models/jobModels")

exports.getjobs = async (req , res , next) => {
 const  jobs = await jobModel.find({}) ;
 res.json ({
    sucess : true ,
    jobs 
 })
}