// App.js (React Component)

import React, { useState, useEffect } from 'react';
import { allDetails, approveLicense } from '../axiosMA';
import AdminNavBar from '../DashAdmin/AdminNavBar';
import Footer from '../Home/Footer';
import { rejectLicense } from '../axiosMA';

const Approve_List = () => {
    const [data, setData] = useState([]);
    const [approved, setApproved] = useState('false');

    useEffect(() => {
        // Fetch data from your backend API when the component mounts
        fetchData();
    }, []);

    const fetchData = async () => {
        try {
            const response = await allDetails();
            console.log(response);
            setData(response.data);
        } catch (error) {
            console.error('Error fetching data:', error);
        }
    };

    const handleApprove = async (id) => {
        const response = await approveLicense(id);
       
        setApproved(...approved, approved(true))
    }

    const handleReject = async (id) => {
        const response = await rejectLicense(id);

    }

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
                            {/* <th>User_id</th> */}
                            <th>License_Holder</th>
                            <th>License_No</th>
                            <th>License_Type</th>
                            <th>Vehicle_Type</th>
                            <th colSpan={2}>Approve
                            </th>
                            <th>Exam_Status</th>
                        </tr>
                    </thead>
                    <tbody>
                        {data.map((item) => (
                            <tr key={item.id}>
                                <td>{item.id}</td>
                                {/* <td>{item.userid}</td> */}
                                <td>{item.licenseHolder}</td>
                                <td>{item.licenseNo}</td>
                                <td>{item.licenseType}</td>
                                <td>{item.vehicleType}</td>
                                {
                                    item.approve=="NO" ?
                                        <td colSpan={2}>
                                            <button type="button" class="btn btn-success" onClick={() => {
                                                handleApprove(item.id)
                                            }}>Approve</button>&nbsp;&nbsp;
                                            <button type="button" class="btn btn-danger" onClick={() => { handleReject(item.id) }}>Reject</button>
                                        </td> : <td colSpan={2}>{item.approve}</td>
                                }
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

export default Approve_List;
