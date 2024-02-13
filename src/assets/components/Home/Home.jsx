
import React from 'react';
import 'bootstrap/dist/css/bootstrap.min.css';
import Login from './Login';
import Footer from './Footer';
import CustomNavbar from './CustomNavbar';

const Home = () => (

  <>
    <CustomNavbar />


    {/* <div className='row' style={{boxsizing: "border-box"}}>
      <img src='/img/road.jpg' alt='road' style={{ height: "120px" }}></img>
      <img src="/img/truck-removebg-preview.png" id='car' style={{ height: "50px", width:"100px", position:"relative", marginTop:"-55px",marginLeft:"100px", animationTimingFunction:"linear"}}></img>
      <img src="/img/bike-removebg-preview.png"  id='car' style={{ height: "70px", width:"120px", position:"relative", marginTop:"-140px", marginLeft:"-1200px"}}></img>
    </div> */}

    <div className="row">
      <img src='/img/akam-saath-prayas.jpg' className="w-100 h-0" alt="..." />
    </div>
    <div className="row">

      <div className="col-md-4 mt-4">
        <Login />
      </div>
      <div className="col-md-6 col-lg-8">
        <img src="/img/user.jpg" alt="Background" className="w-100 h-0" />
      </div>
    </div>
    <Footer />
  </>
);
export default Home