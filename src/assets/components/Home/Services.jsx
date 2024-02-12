// Services.jsx
import React from 'react';
import Footer from './Footer';
import CustomNavbar from './CustomNavbar';

const Services = () => {
  
  return (
    <>
    <CustomNavbar/>
    
    <div className="container mt-5">
      <h2 style={{textAlign:'center'}}>Our Services</h2>
      <div className="row mt-4">
       
          <div className="col-md-4 mb-4">
            <div className="card">
            <div className="card-img-half">
              <img
                src="/img/car.jpg" // Replace with your actual image source
                alt="Your Image"
                className="card-img-top img-fluid"
              />
            </div>
            <div className="card-info-half">
              <div className="card-body">
                <hr/>
                <h5 className="card-title" style={{textAlign:"center"}}>Liccence</h5>
                <p className="card-text">Who can apply
Any person after completion 18 years is eligible to apply for a Driving license (Learner/Permanent). 
Any person after attaining the age of 16 yrs is eligible to apply for license for motorcycle without gear engine capacity not exceeding 50cc with written consent of parent/guardian.
The eligible age to apply for license to drive a transport vehicle in any public place is 20 yrs. 
No person shall be granted a learner’s license to drive a transport vehicle unless he has held a driving license to drive .

.</p>
</div>
              </div>
            </div>
          </div>

          <div className="col-md-4 mb-4">
            <div className="card">
            <div className="card-img-half">
              <img
                src="/img/vehicalR.jpg" // Replace with your actual image source
                alt="Your Image"
                className="card-img-top img-fluid"
              />
            </div>
            <div className="card-info-half">
              <div className="card-body">
              <hr/>
                <h5 className="card-title" style={{textAlign:"center"}}>vehicles Registration</h5>
                <p className="card-text">The adoption of electric vehicles (EVs) contributes to a wide range of
sustainability goals. These include better air quality, reduced noise pollution,
enhanced energy security, and reduced greenhouse gas emissions.
Maharashtra was one of the first states in the country to design and notify an EV
policy. Maharashtra’s first EV policy was released in February 2018. To
accelerate EV sales and stimulate manufacturing in the state, Maharashtra has
updated its EV Policy on 27 July 2021. </p>
</div>
              </div>
            </div>
          </div>

          <div className="col-md-4 mb-4">
            <div className="card">
            <div className="card-img-half">
              <img
                src="/img/contact us.jpg" // Replace with your actual image source
                alt="Your Image"
                className="card-img-top img-fluid"
              />
            </div>
            <div className="card-info-half">
              <div className="card-body">
              <hr/>
                <h5 className="card-title" style={{textAlign:"center"}}>Customer Support 24 *7</h5>
                <p className="card-text">The adoption of electric vehicles (EVs) contributes to a wide range of
sustainability goals. These include better air quality, reduced noise pollution,
enhanced energy security, and reduced greenhouse gas emissions.
Maharashtra was one of the first states in the country to design and notify an EV
policy. Maharashtra’s first EV policy was released in February 2018. To
accelerate EV sales and stimulate manufacturing in the state, Maharashtra has
updated its EV Policy on 27 July 2021. .</p>
</div>
              </div>
            </div>
          </div>
        
      </div>
    </div>
    <Footer/>
    </>
  );
};

export default Services;
