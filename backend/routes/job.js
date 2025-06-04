const express = require("express"); 
const { getjobs } = require("../controllers/jobControllers");
const router =  express.Router() ;  


router.route('/jobs').get(getjobs) 

module.exports = router;