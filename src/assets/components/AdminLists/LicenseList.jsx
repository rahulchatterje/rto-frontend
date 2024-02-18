// App.js (React Component)

import React, { useState, useEffect } from 'react';
import axios from 'axios';

function App() {
    const [data, setData] = useState([]);

    useEffect(() => {
        // Fetch data from your backend API when the component mounts
        fetchData();
    }, []);

    const fetchData = async () => {
        try {
            // Make a GET request to your backend API endpoint
            const response = await axios.get('http://your-backend-api/data');
            // Set the fetched data to the state
            setData(response.data);
        } catch (error) {
            console.error('Error fetching data:', error);
        }
    };

    return (
        <div className="App">
            <h1>Database Data</h1>
            <table>
                <thead>
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
                    {/* Render the data in your table */}
                    {data.map((item) => (
                        <tr key={item.id}>
                            <td>{item.id}</td>
                            <td>{item.user_id}</td>
                            <td>{item.licese_holder}</td>
                            <td>{item.license_no}</td>
                            <td>{item.license_type}</td>
                            <td>{item.vehicle_type}</td>
                            <td>{item.approve}</td>
                            <td>{item.date_of_apply}</td>
                            <td>{item.date_of_issue}</td>
                            <td>{item.exam_status}</td>

                        </tr>
                    ))}
                </tbody>
            </table>
        </div >
    );
}

export default License_list;
