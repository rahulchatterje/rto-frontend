import React, { useState } from 'react';
import RegiNavBar from "../License/LicenseRenew";
import "bootstrap/dist/css/bootstrap.min.css";
import { Link } from 'react-router-dom';
import Footer from "../Home/Footer";
import {LicenseRenew} from "../axiosMA";



const License_Renew = () => {

    const [formData, setFormData] = useState({
        learningLicNo: '',
        

    })


    const handleChange = (e) => {
        setFormData({ ...formData, [e.target.name]: e.target.value });
    }

    const handleSubmit = async (e) => {
        e.preventDefault();
        try {
            const response = await LicenseRenew(formData);
           console.log(response);
           
            // toast.success("Congradulations! For having Leaning License.");
        } catch (error) {
            console.log('Error in applying for renew license. ', error);
            // toast.error(error.message);
        }

    }

    const myStyles = {
        marginTop: '40px', marginBottom: '40px', marginLeft: '40px', marginRight: '40px'
    }


    return (
        <>
            <RegiNavBar />

            <div className='row'>
                <div className='card col-sm-6 shadow' style={myStyles}>
                    <div className='card-body' style={{ marginBottom: '30px' }}>
                        <div className='container mt-4'>
                            <h2 style={{ textAlign: 'center' }}>Apply For Renew License</h2>

                            <form >

                                <div className='mb-3'>
                                    <label htmlFor='learningLicNo' className='form-label'>Learning License No.:</label>
                                    <input
                                        type="text"
                                        className='form-control'
                                        name='learningLicNo'
                                        value={formData.learningLicNo}
                                        onChange={handleChange}
                                        required
                                    />
                                </div>

                                

                                <Link to="/dashboard" className="btn btn-primary mt-3" onClick={handleSubmit}>
                                    Apply
                                </Link>  &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;
                                <Link to="/dashboard/LicenseRenew" className="btn btn-primary mt-3">
                                    Back
                                </Link>
                            </form>
                        </div>

                    </div>

                </div>


            </div>
            <Footer />
        </>
    )
}

export default License_Renew;