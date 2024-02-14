import React, { useState } from 'react';
import RegiNavBar from "../VehicleReg/RegistervlNav";
import "bootstrap/dist/css/bootstrap.min.css";
import { Link } from 'react-router-dom';
import Footer from "../Home/Footer";



const Learning_license = () => {

    const [formData, setFormData] = useState({
        age: '',
        adharcardNumber: '',
        vehicleType: '',
        rtoLocation: '',
        birthPlace: '',
        birthMark: '',
    })


    const handleChange = (e) => {
        setFormData({ ...formData, [e.target.name]: e.target.value });
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
                            <h2 style={{ textAlign: 'center' }}>Apply For Learning License</h2>

                            <form >

                                <div className='mb-3'>
                                    <label htmlFor='adharcardNumber' className='form-label'>Aadhar Card</label>
                                    <input
                                        type="text"
                                        className='form-control'
                                        name='adharcardNumber'
                                        value={formData.adharcardNumber}
                                        onChange={handleChange}
                                        required
                                    />
                                </div>

                                <div className='mb-3'>
                                    <label htmlFor='age' className='form-label'>Age</label>
                                    <input
                                        type="number"
                                        className='form-control'
                                        name='age'
                                        value={formData.age}
                                        onChange={handleChange}
                                        required
                                    />
                                </div>

                                <div className='mb-3'>
                                    <label htmlFor='vehicleType' className='form-label'>Vehicle Type</label>
                                    <input
                                        type="text"
                                        className='form-control'
                                        name='vehicleType'
                                        value={formData.vehicleType}
                                        onChange={handleChange}
                                        required
                                    />
                                </div>
                                <div className='mb-3'>
                                    <label htmlFor='rtoLocation' className='form-label'>RTO Location</label>
                                    <input
                                        type="text"
                                        className='form-control'
                                        name='rtoLocation'
                                        value={formData.rtoLocation}
                                        onChange={handleChange}
                                        required
                                    />
                                </div>

                                <div className='mb-3'>
                                    <label htmlFor='birthPlace' className='form-label'>Birth-Place</label>
                                    <input
                                        type="text"
                                        className='form-control'
                                        name='birthPlace'
                                        value={formData.birthPlace}
                                        onChange={handleChange}
                                        required
                                    />
                                </div>

                                <div className='mb-3'>
                                    <label htmlFor='birthMark' className='form-label'>Birth-Mark</label>
                                    <input
                                        type="text"
                                        className='form-control'
                                        name='birthMark'
                                        value={formData.birthMark}
                                        onChange={handleChange}
                                        required
                                    />
                                </div>

                                <Link to="/dashboard/license" className="btn btn-primary mt-3" >
                                    Register
                                </Link>  &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;
                                <Link to="/dashboard/license/learning" className="btn btn-primary mt-3">
                                    reset
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

export default Learning_license;