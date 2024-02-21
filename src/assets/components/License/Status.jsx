import React, { useEffect, useState } from 'react';
import { getPermanentLicense } from '../axiosMA';
import RegiNavBar from '../VehicleReg/RegistervlNav';
import Footer from '../Home/Footer';
import Permanent_license from './PermanentLicense';


const Status = () => {
    const [status, setStatus] = useState('');
    useEffect(() => {
        fetchData();
    }, []);


    const fetchData = async () => {
        try {
            const response = await getPermanentLicense();
            setStatus(response.data)


        } catch (error) {
            console.log("Error", error);

        }
    }

    const myStyles = {
         marginBottom: "40px", marginLeft: "40px", marginRight: "40px"
}
return (
    <>
        <RegiNavBar />
        <div className="container">
            <h1 style={{ textAlign: "center", marginTop: "40px", border: "solid black", myStyles }}>Status:{status != "Rejected" ? "Approved" : ""} </h1><br />
            <h1 style={{ textAlign: "center", border: "solid" }}>Permanent_License_No: {status}</h1>
        </div >
        <Footer style={{ position: "sticky", width: "100%" }} />
    </>
)
}

export default Status;