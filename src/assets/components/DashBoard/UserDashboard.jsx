// UserDashboard.jsx
import React from 'react';
import Footer from '../Home/Footer';
import 'bootstrap/dist/css/bootstrap.min.css';
import SideBar from './SideBar';
import MainUserInfo from './MainUserInfo';
import UserNavBar from './UserNavBar';
import { useLocation } from 'react-router-dom';

const UserDashboard = () => {

  const location = useLocation();
  const username = location?.state?.name;

  return (
    <>
      <UserNavBar />

      <div className="row">
        {/* Left Form */}
        <div className="col-sm-3" style={{ marginLeft: '1%', marginBottom: "2%" }}>
          <SideBar />
        </div>
        <div className="col-sm-8" style={{ marginRight: '5%' }}>
          <MainUserInfo username={username} />
        </div>
      </div>

      <Footer />
    </>
  );
};

export default UserDashboard;
