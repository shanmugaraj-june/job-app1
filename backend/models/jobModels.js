const mongoose = require("mongoose");

const JobSchema = new mongoose.Schema({
    title: String,
   
    logoUrl: String,
    experience: String,
   
    type: String, // e.g., 'Onsite'
    salary: String,
    postedAt: Date,
    descriptions: [
        {
            description : String
        }
    ],
  });
  const jobModel =  mongoose.model('Job', JobSchema);   

  module.exports = jobModel ;