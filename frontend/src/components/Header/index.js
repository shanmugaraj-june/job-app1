import "./index.css"
const Header = () => (
    <div className = "nav-con">
        <div className = "nav-item-con"> 
            <img src = "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTVMeV0FEmg-_onLIp9Sn7yCl2OEaFT_fqicA&s" alt  = "logo" className = "nav-log"/> 
            <ul className = "nav-item">  
                <li className = "list-item">Home</li> 
                <li className = "list-item">Find Jobs</li> 
                <li className = "list-item">Find Talenets</li> 
                <li className = "list-item">About us</li> 
                <li className = "list-item">Testimonials</li>
            </ul> 
            <button type = "button" className = "create-job-button">
                Create jobs 
            </button>
        </div>
        
    </div>
) 
export default Header ;