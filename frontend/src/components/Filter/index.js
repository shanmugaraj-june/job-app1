import React, { useState } from 'react';
import { RiUserVoiceLine } from "react-icons/ri";
import { BsSearch } from "react-icons/bs";
import { CiLocationOn } from "react-icons/ci"; 
import { IoChevronDown } from "react-icons/io5"; 

import "./index.css"



const Filter = () =>  {   
   
  
  const [isOpen, setIsOpen] = useState(false);
  const [selectedType, setSelectedType] = useState('Job type');

  const jobTypes = ['Full-time', 'Part-time', 'Contract', 'Internship'];

  const toggleDropdown = () => {
    setIsOpen(!isOpen);
  };

  const handleSelect = (type) => {
    setSelectedType(type);
    setIsOpen(false);
  }; 

 const [minVal, setMinVal] = useState(0);
  const [maxVal, setMaxVal] = useState(80);

 
 

 return (<div className = "filter-con"> 
    <div className = "input-con"  >  
        <BsSearch className = "search-icon"/>
        <input type = "text"  placeholder = "Search By Job Title, Role" className = "search-input" 
       /> 
        <div> <hr  className = "line" /></div>
    </div> 
    <div className = "input-con">  
        <CiLocationOn className = "search-icon"/>
        <input type = "text"  placeholder = "Preferred Location" className = "search-input"/> 
        <IoChevronDown  className = "down-logo"/>
        <div> <hr  className = "line" /></div>
    </div> 
   <div className = "input-con">  
       <div className="dropdown-container">
      <div className="dropdown-header" onClick={toggleDropdown}>
       <div> <RiUserVoiceLine className="icon" />
        <span>{selectedType}</span></div>
        <IoChevronDown className="dropdown-icon" />
      </div>
      {isOpen && (
        <ul className="dropdown-list">
          {jobTypes.map((type, index) => (
            <li key={index} onClick={() => handleSelect(type)}>
              {type}
            </li>
          ))}
        </ul>
      )}
    </div>
        <div> <hr  className = "line" /></div>
    </div> 
    <div className = "input-con">  
        <div className="salary-slider-container">
      <div className="salary-slider-labels">
        <span>Salary Per Month</span>
        <span>₹{minVal}k - ₹{maxVal}k</span>
      </div>

      <div className="slider-track">
        <input
          type="range"
          min="0"
          max="200"
          value={minVal}
          onChange={(e) =>
            setMinVal(Math.min(Number(e.target.value), maxVal - 1))
          }
          className="thumb thumb-left"
        />
        <input
          type="range"
          min="0"
          max="200"
          value={maxVal}
          onChange={(e) =>
            setMaxVal(Math.max(Number(e.target.value), minVal + 1))
          }
          className="thumb thumb-right"
        />
        <div className="slider">
          <div
            className="slider-range"
            style={{
              left: `${(minVal / 200) * 100}%`,
              width: `${((maxVal - minVal) / 200) * 100}%`,
            }}
          ></div>
        </div>
      </div>
    </div>
    </div> 

 </div>
 )
    }

export default Filter 