
import React from 'react';
import 'bootstrap/dist/css/bootstrap.min.css';
import Login from './Login';
import Footer from './Footer';
import CustomNavbar from './CustomNavbar';

const Home = () => (
   
  <>
  <CustomNavbar/>
    <div className="row">
    <div className="col-md-4 mt-4">
          <Login />
        </div>
        <div className="col-md-6 col-lg-8">
          <img src="/img/user.jpg" alt="Background" className="w-100 h-0" />
        </div>
        </div>
<Footer/>
    </>
  );
  export default Home