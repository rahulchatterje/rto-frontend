import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import { Toast, toast } from '../toast';
import { login } from './../axiosMA';

const Login = () => {
  const navigate = useNavigate();
  const [username, setUsername] = useState('');
  const [password, setPassword] = useState('');

  const handleLogin = async (e) => {
    e.preventDefault(); // Prevent default form submission behavior

    try {
      const response = await login(username, password);
      console.log(response)

      if (response && response.data) {
        const string=response.data.split(",");
        sessionStorage.setItem("id", string[0]);
        toast.success(`${string[1] }! Great to have you with us`);
        setTimeout(() => {
          navigate('/dashboard', { state: { name: string[1] } });
        }, 3000);
      } else {
        toast.error("Invalid details or something went wrong!");
      }
    } catch (error) {
      toast.error("Invalid details or something went wrong!");
    }
  };

  const myStyles={
    marginBottom:"40px",marginLeft:"40px",marginRight:"40px",marginTop:"40px"
  }
  return (
    <div className="row" style={{marginLeft:'10px'}}>
      <div className="card col-12 shadow">
        <div className="card-body" style={{ marginBottom: '30px' }}>
          <div className="container-md mt-4">
            <h2 style={{ textAlign: 'center' }}>Login</h2>
            <form onSubmit={handleLogin}>
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
              </div>
              <div className="d-grid gap-2">
                <button type="submit" className="btn btn-primary mt-3">Login</button>
                <button type="button" className="btn btn-primary mt-3" onClick={() => navigate("/register")}>Register</button>
              </div>
              <Toast />
            </form>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Login;
