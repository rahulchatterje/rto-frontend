
import React from 'react';
import 'bootstrap/dist/css/bootstrap.min.css';
import Login from './Login';
import Footer from './Footer';
import CustomNavbar from './CustomNavbar';
import Carousel from 'react-bootstrap/Carousel';

const Home = () => (

  <>
    <CustomNavbar />

    <div className="row">

      <Carousel interval={1000} controls={false}>
        <Carousel.Item >
          <img src='/img/akam-saath-prayas.jpg' className="w-100 h-0" alt="..." />
        </Carousel.Item>
        <Carousel.Item>
          <img src='/img/Digital-india-black.jpg' className="w-100 h-0" alt="..." />
        </Carousel.Item>
        <Carousel.Item>
          <img src='/img/fast-tag.jpg' className="w-100 h-0" alt="..." />
        </Carousel.Item>
      </Carousel>

    </div>
    <div className="row">
      <div className="col-md-4 mt-4">
        <Login />
      </div>
      <div className="col-md-6 col-lg-7">
        <img src="/img/official-login.jpg" alt="Background" style={{width:"90%", height:"90%"}} />
      </div>
    </div>
    <Footer />
  </>
);

export default Home