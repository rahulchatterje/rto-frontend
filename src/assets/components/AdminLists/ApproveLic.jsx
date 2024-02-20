// App.js (React Component)

import React, { useState, useEffect } from 'react';
import axios from 'axios';
import Permanent_license from './../License/PermanentLicense';

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
                        <th>User_ID</th>
                        <th>Learning_License_No</th>
                        <th>Learning_License_ID</th>
                        <th>Date_of_Application</th>
                        <th>Result</th>
                        
                    </tr>
                </thead>
                <tbody>
                    {/* Render the data in your table */}
                    {data.map((item) => (
                        <tr key={item.id}>
                            <td>{item.id}</td>
                            <td>{item.user_id}</td>
                            <td>{item.learning_lic_no}</td>
                            <td>{item.learning_license_register_id}</td>
                            <td>{item.result_status}</td>
                        </tr>
                    ))}
                </tbody>
            </table>
        </div >
    );
}

export default Permanent_Approve;
