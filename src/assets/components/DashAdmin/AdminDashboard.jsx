
import React from 'react';
import Footer from '../Home/Footer';
import 'bootstrap/dist/css/bootstrap.min.css';
import SideBar from './SideBar';
import MainAdminInfo from './MainAdminInfo';

import { useLocation } from 'react-router-dom';
import AdminNavBar from './AdminNavBar';


const AdminDashboard = () => {

  const location = useLocation();
  const username = location?.state?.name;

  return (
    <>
    
      <AdminNavBar/>
      <div className="row">

        <div className="col-sm-3" style={{ marginLeft: '1%', marginBottom: "2%" }}>
          <SideBar />
        </div>
        <div className="col-sm-8" style={{ marginRight: '5%' }}>
          <MainAdminInfo username={username} />
        </div>
      </div>

      <Footer />
    </>
  );
};

export default AdminDashboard;
