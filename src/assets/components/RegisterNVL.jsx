import React, { Component, useState } from 'react';
import { Link } from 'react-router-dom';
import Footer from './Footer';
import 'bootstrap/dist/css/bootstrap.min.css';
import RegiNavBar from './RegistervlNav';


const RegisterNVL = () => {

    const [formData, setFormData] = useState({
        vehicleType: '',
        vehicleCompany: '',
        vehicleModel: '',
        purchaseDate: '',
    })

    const myStyles = {
        marginTop: "40px", marginLeft: '3%', marginBottom: "40px"
    };

    return (
        <>
            <RegiNavBar />

            <div className='row'>
                <div className='card col-sm-6 shadow' style={myStyles}>
                    <div className='card-body' style={{ marginBottom: '30px' }}>
                        <div className='container mt-4'>
                            <h2 style={{ textAlign: 'center' }}>Re-New Vehicle Registration</h2>

                            {/* <form onSubmit={handleSubmit}> */}


                            <div className='mb-3'>
                                <label htmlFor="registrationNumber" className='form-label'>Registration Number</label>
                                <input
                                    type="text"
                                    className='form-control'
                                    name="registrationNumber"
                                    id="registrationNumber"
                                    value={formData.registrationNumber}
                                    // onChange={handleChange}
                                    required
                                />

                            </div>
                            <div className='mb-3'>
                                <label htmlFor="vehicleType" className='form-label'>Vehicle Type</label>
                                <input
                                    type="text"
                                    className='form-control'
                                    name="vehicleType"
                                    id="vehicleType"
                                    value={formData.vehicleType}
                                    // onChange={handleChange}
                                    required
                                />

                            </div>
                            <div className='mb-3'>
                                <label htmlFor="vehicleCompany" className='form-label'> Vehicle Company</label>
                                <input
                                    type="text"
                                    className='form-control'
                                    name="vehicleCompany"
                                    id="vehicleCompany"
                                    value={formData.vehicleCompany}
                                    // onChange={handleChange}
                                    required
                                />
                            </div>
                            <div className='mb-3'>
                                <label htmlFor="vehicleModel" className='form-label'>Vehicle Model</label>
                                <input
                                    type="text"
                                    className='form-control'
                                    name="vehicleModel"
                                    id="vehicleModel"
                                    value={formData.vehicleModel}
                                    // onChange={handleChange}
                                    required
                                />

                            </div>
                            <div className='mb-3'>
                                <label htmlFor="purchaseDate" className='form-label'>Purchase Date</label>
                                <input
                                    type="date"
                                    className='form-control'
                                    name="purchaseDate"
                                    id="purchaseDate"
                                    value={formData.purchaseDate}
                                    // onChange={handleChange}  
                                    required
                                />

                            </div>
                            &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;
                            &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;
                            &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp; &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;

                            <Link to="/xyzz" className='btn btn-primary btn-lg'>Register</Link>
                            &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;
                            &nbsp;&nbsp;&nbsp;&nbsp;
                            &nbsp;&nbsp;&nbsp;&nbsp;
                            &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp; &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;
                            <Link to="/Dashboard" className='btn btn-primary btn-lg'>Back</Link>
                        </div>
                    </div>

                </div>

            </div>
            <Footer />
        </>
    )
}
export default RegisterNVL;