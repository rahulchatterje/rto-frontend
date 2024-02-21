import React from 'react'
import 'bootstrap/dist/css/bootstrap.min.css';
import { Link } from 'react-router-dom'; // Import Link from react-router-dom
import '../../css/list.css'

const SideBar = ({ username }) => {
  return (
    <>
      <div className="row mt-5 " >
        <div className="">
          <div className="card">
            <div className='card-body'>
              <h5 className='card-title'>Profile</h5>
              <ul className="list-group">
                <li className='list-group-item'>
                  <Link to="/dashboard/personalInfo">Personal Details </Link>
                </li>
                <li className='list-group-item'>
                  <Link to="/dashboard/correspondenceAddress">Add Corresponding Address </Link>
                </li>
                <li className='list-group-item'>
                  <Link to="/dashboard/permanentAddress">Add Permanent Address </Link>
                </li>
              </ul>
            </div>
            <div className="card-body">
              <h5 className="card-title">Licence</h5>
              <ul className="list-group">
                <li className="list-group-item">
                  <Link to="/dashboard/license">Apply For  Licence</Link>
                </li>

                <li className="list-group-item">
                  <Link to="/dashboard/LicenseRenew">Apply For Renew Licence</Link>
                </li>
              </ul>
            </div>
            <div className="card-body">
              <h5 className="card-title">Vehical Registration</h5>
              <ul className="list-group">
                <li className="list-group-item">
                  <Link to="/dashboard/registerVL">Apply For New Vehical Registration</Link>
                </li>
                <li className="list-group-item">
                  <Link to="/dashboard/registerNVL">Apply For Renew Vehical Registration</Link>
                </li>
              </ul>
            </div>
            <div className="card-body">
              <h5 className="card-title">Test</h5>
              <ul className="list-group">
                <li className="list-group-item">
                  <Link to="/dashboard/lic">Apply For Test</Link>
                </li>

              </ul>
            </div>
          </div>
        </div>
      </div>

    </>
  )
}

export default SideBar
