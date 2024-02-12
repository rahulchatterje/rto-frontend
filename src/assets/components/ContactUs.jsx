// ContactUs.jsx
import React, { useState } from 'react';
import CustomNavbar from './CustomNavbar';
import Footer from './Footer';
import 'bootstrap/dist/css/bootstrap.min.css';
const ContactUs = () => {
  
    const myStyles = {
        marginTop: "40px" ,marginLeft:'3%' ,marginBottom:"40px"
      };

  return (
    <>
    <CustomNavbar/>
    <div className="row shadow mt-4" style={{background:'white'}}>
    
		
		<h4 style={{textAlign:'center'}} className="card-title">Contact Us &nbsp; </h4> 

        <div className="col-sm-4">
			
					<img src='/img/contact us.jpg' style={{height:'100%',width:'100%'}}></img>
				
			
		</div>


		<div className="col-sm-8 mt-4 ">
			
					{/* <h6 className="card-title"
                    style={{textAlign:'center',color:'#084298'}}
						>
						Sunbeam CDAC 
					</h6> */}
					<p className="card-text"
						style={{textAlign:'center'}}>
						<b>Contact Person<br/></b> Mrs. Akanksha Aage,<br/>
						Project Owner<br/>
						<br/> <b>Address</b><br/> Sunbeam Hinjewadi phase 2 ,Pune<br/>
						<br/> <b>Email</b><br/>akanksha@gmail.com<br/>
						<br/> <b>Phone</b><br/> +91-11-1231313
					</p>

				</div>
		

	</div>
    <Footer/>
    </>
  );
};

export default ContactUs;
