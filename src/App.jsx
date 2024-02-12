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
import Home from './assets/components/Home';
// import Login from './assets/components/Login';


import UserDashboard from './assets/components/UserDashboard';
import RegisterForm from './assets/components/RegistrationForm';
import RegisterVL from './assets/components/RegisterVL';
import AboutUs from './assets/components/About';
import Services from './assets/components/Services';
import ContactUs from './assets/components/ContactUs';
import RegisterNVL from './assets/components/RegisterNVL';
import PersonalInfo from './assets/components/PersonalDetails';
import MyResult from './assets/components/MyResult';
import License from './assets/components/licenceDash';

function App() {
  // const [color, setColor] = useState('olive')

  // function changeColor(color){
  //   setColor(color)
  // }
  return (
    <>
  <BrowserRouter>
    <Routes>
    
      <Route path="/" exact element={<Home/>} />
      <Route path="/dashboard" exact element={<UserDashboard/>} />
      <Route path="/register"  element={<RegisterForm/>} />
      <Route path="/dashboard/registerVL" element={<RegisterVL/>}/>
      <Route path="/dashboard/registerNVL" element={<RegisterNVL/>}/>
      <Route path="/about"  element={<AboutUs/>} />
      <Route path="/service" exact element={<Services/>} />
      <Route path="/contact" exact element={<ContactUs/>} />
      <Route path="/personalInfo" element={<PersonalInfo/>} />
      <Route path="/dashboard/myResult" element={<MyResult/>}/>
      <Route path="/license" element={<License/>}/>
      </Routes>
  </BrowserRouter>
  
    </>
  )
}

export default App
