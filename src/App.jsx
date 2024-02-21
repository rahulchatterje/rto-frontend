// import { useState } from 'react'

import 'bootstrap/dist/css/bootstrap.min.css';
// import { Button } from 'react-bootstrap';

// import Pass from './Pass';
// import NewPass from './NewPass';
// import CustomNavbar from './assets/components/CustomNavbar';
import {
  BrowserRouter,
  Routes,
  Route
} from "react-router-dom";

import Home from './assets/components/Home/Home';
import RegisterForm from './assets/components/Home/RegistrationForm';
import AboutUs from './assets/components/Home/About';
import Services from './assets/components/Home/Services';
import ContactUs from './assets/components/Home/ContactUs';

import UserDashboard from './assets/components/DashBoard/UserDashboard';
import MyResult from './assets/components/DashBoard/MyResult';

import RegisterNVL from './assets/components/VehicleReg/RegisterNVL';
import RegisterVL from './assets/components/VehicleReg/RegisterVL';

import PersonalInfo from './assets/components/PersonalD/PersonalDetails';
import CorresP from './assets/components/PersonalD/CorresAdd';
import PermantAd from './assets/components/PersonalD/PermAdd';

import License from './assets/components/License/licenceDash';
import Learning_license from './assets/components/License/LearningLicense';
import BeforeExam from './assets/components/License/BeforeExam';
import License_Renew from './assets/components/License/LicenseRenew'
import Permanent_license from './assets/components/License/PermanentLicense';

import Exam_data from './assets/components/Exam/Exam_Questions';

import AdminDashboard from './assets/components/DashAdmin/AdminDashboard';
import PersonalAdminInfo from './assets/components/AdminPer/PersonalDetails';
import Approve_List from './assets/components/AdminLists/ApproveLic';
import License_list from './assets/components/AdminLists/LicenseList';
import  Vehregister_list from './assets/components/AdminLists/VehicleList';
import Status from './assets/components/License/Status';


function App() {

  return (
    <>
      <BrowserRouter>
        <Routes>

          <Route path="/" exact element={<Home />} />
          <Route path="/dashboard" exact element={<UserDashboard />} />
          <Route path="/register" element={<RegisterForm />} />
          <Route path="/about" element={<AboutUs />} />
          <Route path="/service" exact element={<Services />} />
          <Route path="/contact" exact element={<ContactUs />} />

          <Route path="/dashboard/registerVL" element={<RegisterVL />} />
          <Route path="/dashboard/registerNVL" element={<RegisterNVL />} />
          <Route path="/dashboard/personalInfo" element={<PersonalInfo />} />
          <Route path="/dashboard/correspondenceAddress" element={<CorresP />} />
          <Route path='/dashboard/permanentAddress' element={<PermantAd />} />
          <Route path="/dashboard/myResult" element={<MyResult />} />

          <Route path="/dashboard/license" element={<License />} />
          <Route path='/dashboard/license/learning' element={<Learning_license />} />
          <Route path="/dashboard/lic" element={<BeforeExam />} />
          <Route path='/dashboard/license/permanent' element={<Permanent_license />} />
          <Route path='/dashboard/LicenseRenew' element={<License_Renew/>}/>
          <Route path='/dashboard/license/status' element={<Status/>}/>
          <Route path='/dashboard/test/exam' element={<Exam_data/>}/>

          <Route path="/admin_dash" element={<AdminDashboard/>} />
          <Route path="/admin_dash/personalInfo" element={<PersonalAdminInfo/>} />
          <Route path="/admin_dash/approve" element={<Approve_List/>}/>
          <Route path="/admin_dash/list" element={<License_list />} />
          <Route path="/admin_dash/vehicle_list" element={<Vehregister_list/>}/>
        </Routes>
      </BrowserRouter>
    </>
  )
}

export default App
