import Home from "./components/Home"
import {BrowserRouter, Routes, Route } from "react-router-dom";
import './App.css';
const App = () => ( 
  <BrowserRouter>
     <Routes>
       <Route exact path="/" element={<Home />} />
        <Route exact path="/search" element={<Home />} />
     </Routes>
  </BrowserRouter>
)


export default App;
