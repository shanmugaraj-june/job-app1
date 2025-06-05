const mongoose = require("mongoose");

const JobSchema = new mongoose.Schema({
    title: String,
   
    logoUrl: String,
    experience: String,
   
    type: String, // e.g., 'Onsite'
    salary: String,
    postedAt: String,
    descriptions: [
        {
            description : String
        }
    ],
  });
  const jobModel =  mongoose.model('Job', JobSchema);   

  module.exports = jobModel ;