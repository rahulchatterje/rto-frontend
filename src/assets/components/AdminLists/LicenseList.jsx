// App.js (React Component)

import React, { useState, useEffect } from 'react';
import { allDetails } from '../axiosMA';
import AdminNavBar from '../DashAdmin/AdminNavBar';
import Footer from '../Home/Footer';

const License_list = () => {
    const [data, setData] = useState([]);

    useEffect(() => {
        // Fetch data from your backend API when the component mounts
        fetchData();
    }, []);

    const fetchData = async () => {
        try {

            const response = await allDetails();

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
            <h3 style={mystyle}>Registered License</h3><hr />
            <div className="container">

                <table className='table table-bordered'>
                    <thead className='table-dark'>
                        <tr>
                            <th>ID</th>
                            <th>User_id</th>
                            <th>License_Holder</th>
                            <th>License_No</th>
                            <th>License_Type</th>
                            <th>Vehicle_Type</th>
                            <th>Approve</th>
                            <th>Date_of_Apply</th>
                            <th>Date_of_Issue</th>
                            <th>Exam_Status</th>
                        </tr>
                    </thead>
                    <tbody>

                        {data.map((item) => (
                            <tr key={item.id}>
                                <td>{item.id}</td>
                                <td>{item.userid}</td>
                                <td>{item.licenseHolder}</td>
                                <td>{item.licenseNo}</td>
                                <td>{item.licenseType}</td>
                                <td>{item.vehicleType}</td>
                                <td >{item.approve}</td>
                                <td>{item.dateOfIssue}</td>
                                <td>{item.dateOfIssue}</td>
                                <td>{item.examstatus}</td>

                            </tr>
                        ))}
                    </tbody>
                </table>
            </div >
            <Footer />
        </>
    );
}

export default License_list;
