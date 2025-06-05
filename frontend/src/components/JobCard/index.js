import React from 'react'; 
import { FaUser, FaBriefcase, FaMoneyBill } from 'react-icons/fa'; 
import "./index.css" 

export default function JobCard ({jobDetails}) { 

    return (
         <div className="job-card">
      <div className="job-card-header">
        <img src= {jobDetails.logoUrl} alt="Amazon" className="company-logo" />
        <span className="badge">{jobDetails.postedAt}h Ago</span>
      </div>

  <div className= "header-con">
        <h2 className="job-title">{jobDetails.title}</h2>
  </div>

      <div className="job-info">
        <span><FaUser />{jobDetails.experience} yr Exp</span>
        <span><FaBriefcase /> {jobDetails.type}</span>
        <span><FaMoneyBill /> {jobDetails.salary}LPA</span>
      </div>

      <ul className="job-description">
              {jobDetails.descriptions.map(each => <li>
                 {each.description}
              </li>)}
      </ul>

      <button className="apply-btn">Apply Now</button>
    </div>
    )
}  

