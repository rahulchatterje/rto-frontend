import React from 'react';
import 'bootstrap/dist/css/bootstrap.min.css';
import { useState } from 'react'
import { Link, useNavigate } from 'react-router-dom'; // Import Link from react-router-dom
import { Toast, toast } from '../toast';

// import { Card } from 'react-bootstrap';
import { login } from './../axiosMA';
import { ToastContainer } from 'react-toastify';

const Login = () => {
  const navigate = useNavigate();
  const [username, setUsername] = useState('');
  const [password, setPassword] = useState('');

  const handleLogin = async () => {
    try {
      const response = await login(username, password);
      
        
      
      response.data? toast.success(`${response.data}! Great to have you with us`):toast.error("Invalid details or something went wrong!")
      
      response.data?setTimeout(() => { navigate('/dashboard', { state: { name: response?.data } }) }, 3000):"";
    }
    catch (error) {
      toast.error("Invalid details or something went wrong!");
    }
    // onLogin(username);
  }
  const myStyles = {
    marginTop: "40px", marginLeft: '28%', marginBottom: "40px"
  };

  return (
    <div className="row" >
      <div className="card col-12 shadow "
        style={myStyles}>
        <div className="card-body" style={{ marginBottom: '30px' }}>
          <div className="container-md  mt-4" >
            <h2 style={{ textAlign: 'center' }}>Login</h2>
            <form>
              <div className="mb-4">
                <label htmlFor="username" className="form-label">
                  Username
                </label>
                <input
                  type="text"
                  className="form-control"
                  id="username"
                  value={username}
                  onChange={(e) => setUsername(e.target.value)}
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
                  value={password}
                  onChange={(e) => setPassword(e.target.value)}
                />
              </div> &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp; &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;
              <Link className="btn btn-primary mt-3" onClick={handleLogin}>
                Login
              </Link>  &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;
              <Link to="/register" className="btn btn-primary mt-3">
                Register
              </Link>

              <Toast/>
            </form>
          </div>
        </div>
      </div> </div>
  );
};
export default Login