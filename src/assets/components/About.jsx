import React from 'react';
import Footer from './Footer';
import CustomNavbar from './CustomNavbar';

const AboutUs = () => {
    const myStyles = {
        marginTop: "40px" ,marginLeft:'3%' ,marginBottom:"40px"
      };
  return (
    <>
    <CustomNavbar/>
    <div className="row" >
           <div className="card col-11 shadow "
				style={myStyles}>
				<div className="card-body" style={{marginBottom:'30px'}}>
      <div className="container  mt-2" >
      <h2 style={{textAlign:'center'}}>About Us</h2>
      <p className='mt-4'>
        Welcome to our website! We are a team of passionate individuals dedicated to providing
        valuable information and services to our users.
      </p>
      <h3>Vision</h3>
      <ul>
        <li>Safe Transportation of Goods & Passengers</li>
        <li>Prompt & Citizen friendly services relating to Motor Vehicles</li>
      </ul>
      <h3>Mission</h3>
      <ul>
        <li>To aim for stricter compliance of provisions of Motor Vehicle Act & Rules there under</li>
        <li>To establish user friendly front end facilities for visiting public</li>
        <li>To strengthen the Department by providing equipments, manpower & Training</li>
        <li>To create effective grievance redressed mechanism</li>
      </ul>
      <h3>Meet Our Team</h3>
      <ul>
        <li>Akanksha Aage- Founder & CEO</li>
        <li>Unnati Kurekar - Head of Operations</li>
        {/* Add more team members as needed */}
      </ul>
      <p>
        If you have any questions or feedback, feel free to contact us at abc@gmail.com.
      </p>
      <img 
      src='/img/r.jpg'></img>
    </div>
    </div>
    </div>
    </div>
    <Footer/>
    </>

  );
};

export default AboutUs;
