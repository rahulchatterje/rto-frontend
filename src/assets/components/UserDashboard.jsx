// UserDashboard.jsx
import React from 'react';
import { Link } from 'react-router-dom'; // Import Link from react-router-dom
import CustomNavbar from './CustomNavbar';
import Footer from './Footer';
import 'bootstrap/dist/css/bootstrap.min.css';
import SideBar from './SideBar';
import MainUserInfo from './MainUserInfo';
import UserNavBar from './UserNavBar';
const UserDashboard = ({ username }) => {
    const myStyle={
       
    };
  return (
  <>
   <UserNavBar/> 
   
      <div className="row">
        {/* Left Form */}
        <div className="col-sm-3" style={{marginLeft:'1%',marginBottom:"2%"}}>
    <SideBar/>
    </div>
    <div className="col-sm-8" style={{marginRight:'5%'}}>
     <MainUserInfo/>
     </div>
     </div>
    
    <Footer/>
    </>
  );
};

export default UserDashboard;
