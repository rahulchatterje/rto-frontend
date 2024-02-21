import React, { useState } from 'react';
import RegiNavBar from '../VehicleReg/RegistervlNav';
import Footer from '../Home/Footer';
import { LicenseRenew } from '../axiosMA';
import { Link } from 'react-router-dom';

const License_Renew = () => {


    const [license, setLicense] = React.useState('');

    const handleChange = (e) => {
        setLicense({ ...license, [e.target.name]: e.target.value });
    }
    const handleSubmit = async (e) => {
        e.preventDefault();
        try {
            if (formData.learningLicNo) {
                const response = await LicenseRenew();
                console.log(response)

            } else throw new Error();

        } catch (error) {
            console.error('Error fetching data:', error);

        }
    }

    const myStyles = {
        marginBottom: '30px', marginTop: '30px', marginLeft: '30px', marginRight: '30px'
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
                                        value={license.learningLicNo}
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

