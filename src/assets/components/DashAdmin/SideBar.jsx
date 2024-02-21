import React from 'react'
import 'bootstrap/dist/css/bootstrap.min.css';
import { Link } from 'react-router-dom'; // Import Link from react-router-dom
import '../../css/list.css'

const SideBar = () => {
  return (
    <>
      <div className="row mt-5 " >
        <div className="">
          <div className="card">
            <div className='card-body'>
              <h5 className='card-title'>Profile</h5>
              <ul className="list-group">
                <li className='list-group-item'>
                  <Link to="/admin_dash/personalInfo">Personal Details </Link>
                </li>
              </ul>
            </div>
            <div className="card-body">
              <h5 className="card-title">Licence</h5>
              <ul className="list-group">
                <li className="list-group-item">
                  <Link to="/admin_dash/approve">Approve_License</Link>
                </li>
                <li className="list-group-item">
                  <Link to="/admin_dash/list">Licence</Link>
                </li>
              </ul>
            </div>
            <div className="card-body">
              <h5 className="card-title">Vehical Registration</h5>
              <ul className="list-group">
                <li className="list-group-item">
                  <Link to="/admin_dash/vehicle_list">Vehical Registered</Link>
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
