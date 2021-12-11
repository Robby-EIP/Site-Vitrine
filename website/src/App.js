import './App.css';
import Home from './Pages/Home/Home';
import { Routes, Route } from "react-router-dom";
import Navbar from './Components/Navbar/Navbar';

import "bootstrap/dist/css/bootstrap.min.css";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import 'antd/dist/antd.css';
import About from './Pages/About/About';
import FAQ from './Pages/FAQ/FAQ';

require('dotenv').config()

function App() {
  return (
    <div className="App">
      <Navbar/>
      {/* <nav className="navbar navbar-expand-lg navbar-light fixed-top">
        <div id="dashboard-title">Dashboard</div>
        <div className="container">
          <Link className="navbar-brand" to={"/"}>Home</Link>
        </div>
      </nav> */}

      <div id="main-container">
        <Routes>
          <Route exact path='/' element={<Home/>}/>
          <Route exact path='/about' element={<About/>}/>
          <Route exact path='/faq' element={<FAQ/>}/>
        </Routes>
      </div>
    </div>
  );
}

export default App;
