// RegisterForm.jsx
import React, { useState } from 'react';
import CustomNavbar from './CustomNavbar';
import Footer from './Footer';
import { Link, useNavigate } from 'react-router-dom'; // Import Link from react-router-dom
import { addUserDetails } from './axiosMA';
import { toast } from 'react-toastify'; 


const RegisterForm = () => {

  const [formData, setFormData] = useState({
    userName: '',
    s_d_w: '',
    email: '',
    password: '',
    birthDate: '',
    phoneNo: '',
    gender: '',
  });
  const navigate=useNavigate()

  const handleChange = (e) => {
    
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };


  const handleSubmit = async (e) => {
    e.preventDefault();
    console.log(formData);
    try {
      const response = await addUserDetails(formData);
       // Call the addUserDetails function
      navigate('/')
    toast.success("Congradulations! You are registered successfully..");
      
      // Handle the response or perform any other actions upon successful submission
    } catch (error) {
      // Handle errors, display error messages, etc.
      console.error('Error adding user details:', error);
      toast.error("Oops! Something went wrong.");
    }
  };


  const myStyles = {
    marginTop: "40px", marginLeft: '3%', marginBottom: "40px"
  };
  return (<>
    <CustomNavbar />

    <div className="row" >
      <div className="card col-sm-6 shadow "
        style={myStyles}>
        <div className="card-body" style={{ marginBottom: '30px' }}>
          <div className="container  mt-4">
            <h2 style={{ textAlign: 'center' }}>Registration Form</h2>
            <form onSubmit={handleSubmit}> 
            <div className="mb-3 ">
              <label htmlFor="username" className="form-label">
                Username
              </label>
              <input
                type="text"
                className="form-control"
                id="userName"
                name="userName"
                placeholder='ex: Rohit Sharma'
                value={formData.userName}
                onChange={handleChange}
                required
              />
            </div>
            <div className="mb-3 ">
              <label htmlFor="s_d_w" className="form-label">
                Son/Daughter/Wife-of
              </label>
              <input
                type="text"
                className="form-control"
                id="s_d_w"
                name="s_d_w"
                value={formData.s_d_w}
                onChange={handleChange}
                required
              />
            </div>
            <div className="mb-3">
              <label htmlFor="email" className="form-label">
                Email
              </label>
              <input
                type="email"
                className="form-control"
                id="email"
                name="email"
                placeholder='ex: abc1@gmail.com'
                value={formData.email}
                onChange={handleChange}
                required
              />
            </div>
            <div className="mb-3">
              <label htmlFor="password" className="form-label">
                Password
              </label>
              <input
                type="password"
                className="form-control"
                id="password"
                name="password"
                value={formData.password}
                onChange={handleChange}
                required
              />
            </div>

            <label htmlFor="mobileNumber" className="form-label">
              Mobile Number
            </label>
            <div className="input-group mb-3">
              <span class="input-group-text" id="basic-addon1">+91</span>
              <input
                type="tel"
                className="form-control"
                id="phoneNo"
                name="phoneNo"
                aria-label="phoneNo"
                aria-describedby="basic-addon1"
                value={formData.phoneNo}
                onChange={handleChange}
                required
              />
            </div>
            <div className="mb-3">
              <label htmlFor="birthdate" className="form-label">
                Birthdate
              </label>
              <input
                type="date"
                className="form-control"
                id="birthDate"
                name="birthDate"
                value={formData.birthDate}
                onChange={handleChange}
                required
              />
            </div>

            <div className="mb-3">
              <label htmlFor="gender" className="form-label">
                Gender
              </label>
              <select class="form-select" aria-label="multiple select example" name='gender' value={formData.gender} onChange={handleChange}>
                <option>Select from Below</option>
                <option value="0">Male</option>
                <option value="1">Female</option>
                <option value="2">Transgender</option>
                <option value="3">Prefer Not To Say</option>
              </select>
            </div>

            &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp; &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;
            &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp; &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;
            <Link to="/" className="btn btn-primary mt-3" onClick={handleSubmit}>
              Register
            </Link>  &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;
            <Link to="/" className="btn btn-primary mt-3">
              Login
            </Link>
            </form> 
          </div>
        </div>
      </div>
      <div className="col-sm-5">
        <img src='/img/signup.jpg' style={{ height: '100%', width: '100%' }}></img>
      </div>
    </div>

    <Footer />
  </>
  );
};

export default RegisterForm;
