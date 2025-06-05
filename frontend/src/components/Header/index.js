
import Popup from 'reactjs-popup';

import "./index.css"
const Header = () => {
   

    
   return (<div className = "nav-con">
        <div className = "nav-item-con"> 
            <img src = "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTVMeV0FEmg-_onLIp9Sn7yCl2OEaFT_fqicA&s" alt  = "logo" className = "nav-log"/> 
            <ul className = "nav-item">  
                <li className = "list-item">Home</li> 
                <li className = "list-item">Find Jobs</li> 
                <li className = "list-item">Find Talenets</li> 
                <li className = "list-item">About us</li> 
                <li className = "list-item">Testimonials</li>
            </ul>  

            <Popup
      trigger={<button className="container hover-trigger" type = "button"  >
                    <div className="text create">Create Jobs</div>
                    <div className="text login">Login</div>
                </button>}
      modal
      nested 
      overlayClassName="popup-overlay"
    >
      {close => (
         <div className="modal-container">
      <h2 className="modal-title">Create Job Opening</h2>
      <form className="job-form">
        <div className="form-row">
          <div className="form-group">
            <label>Job Title</label>
            <input type="text" placeholder="Full Stack Developer" />
          </div>
          <div className="form-group">
            <label>Company Name</label>
            <input type="text" placeholder="Amazon, Microsoft, Swiggy" />
          </div>
        </div>

        <div className="form-row">
          <div className="form-group">
            <label>Location</label>
            <select>
              <option>Choose Preferred Location</option>
            </select>
          </div>
          <div className="form-group">
            <label>Job Type</label>
            <select>
              <option>FullTime</option>
            </select>
          </div>
        </div>

        <div className="form-row">
          <div className="form-group">
            <label>Salary Range</label>
            <div className="salary-inputs">
              <input type="text" placeholder="₹0" />
              <input type="text" placeholder="₹12,00,000" />
            </div>
          </div>
          <div className="form-group">
            <label>Application Deadline</label>
            <input type="date" />
          </div>
        </div>

        <div className="form-group full-width">
          <label>Job Description</label>
          <textarea
            rows="4"
            placeholder="Please share a description to let the candidate know more about the job role"
          ></textarea>
        </div>

        <div className="form-actions">
          <button className="save-btn">Save Draft ▾</button>
          <button className="publish-btn">Publish »</button>
        </div>
      </form>
    </div>
      )}
    </Popup>
          
                
           
            </div>
    </div> )
}
export default Header ;