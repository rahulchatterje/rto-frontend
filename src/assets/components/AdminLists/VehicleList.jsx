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
            <th>Name</th>
            <th>Email</th>
            {/* Add more table headings as needed */}
          </tr>
        </thead>
        <tbody>
          {/* Render the data in your table */}
          {data.map((item) => (
            <tr key={item.id}>
              <td>{item.id}</td>
              <td>{item.name}</td>
              <td>{item.email}</td>
              {/* Render more table cells as needed */}
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
}

export default App;
