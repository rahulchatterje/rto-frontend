// App.js (React Component)

import React, { useState, useEffect } from 'react';
import { allVehRegister } from '../axiosMA';
import AdminNavBar from '../DashAdmin/AdminNavBar';
import Footer from '../Home/Footer';

const Vehregister_list = () => {
  const [data, setData] = useState([]);

  useEffect(() => {
    // Fetch data from your backend API when the component mounts
    fetchData();
  }, []);

  const fetchData = async () => {
    try {
      // Make a GET request to your backend API endpoint
      const response = await allVehRegister();
      // Set the fetched data to the state
      setData(response.data);
    } catch (error) {
      console.error('Error fetching data:', error);
    }
  };
  const mystyle = {
    marginTop: "20px", marginBotton: "30px", marginLeft: "30px"
}

  return (
    <>
    <AdminNavBar />
    <h3 style={mystyle}>Registered Vehicles</h3><hr />
    <div className="container">

        <table className='table table-bordered'>
            <thead className='table-dark'>
                 <tr>
            <th>ID</th>
            <th>User Id</th>
            <th>Registration No. </th>
            <th>Date Of Application</th>
            <th>Vehicle Type</th>
            <th>Purchase Date</th>
            <th>Vehical Company</th>
            <th>Number Plate</th>
            <th>Vehical Model</th>
            <th>Renew Registration No</th>

            {/* Add more table headings as needed */}
          </tr>
        </thead>
        <tbody>
          {/* Render the data in your table */}
          {data.map((item) => (
            <tr key={item.id}>
              <td>{item.id}</td>
              <td>{item.userId}</td>
              <td>{item.registrationNo}</td>
              <td>{item.dateOfAppl}</td>
              <td>{item.vehicleType}</td>
              <td>{item.purchaseDate}</td>
              <td>{item.vehicalCompany}</td>
              <td>{item.numberPlate}</td>
              <td>{item.vehicalModel}</td>
              <td>{item.newRegistrationNo}</td>
              {/* Render more table cells as needed */}
            </tr>
          ))}
        </tbody>
      </table>
    </div>
    <Footer />
        </>
  );
}

export default Vehregister_list;
