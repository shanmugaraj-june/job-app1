
import { useEffect , useState } from "react"
import JobCard from "../JobCard"
import Filter from "../Filter"
import Header from "../Header" 
import "./index.css"
import { useSearchParams } from "react-router-dom"

const Home  = () => { 
    const [jobs ,setJobs] = useState([])  ; 
    const [searchParams , setSearchParams] = useSearchParams()

    useEffect(() => {
        fetch(process.env.REACT_APP_API_URL+'/api/v1/jobs?'+searchParams)
        .then(res => res.json()) 
        .then(res => setJobs(res.jobs))
    },[searchParams])
    return ( 
    <>  
     <Header /> 
     <Filter /> 
     <div className  = "home-con"> 
        {jobs.map(jobsItem => <JobCard jobDetails = {jobsItem}/> )}
     </div>
    </>
    )
} 

export default Home 