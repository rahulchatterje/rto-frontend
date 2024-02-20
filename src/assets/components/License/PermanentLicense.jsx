import React, { useState } from 'react';
import RegiNavBar from "../VehicleReg/RegistervlNav";
import "bootstrap/dist/css/bootstrap.min.css";
import { Link } from 'react-router-dom';
import Footer from "../Home/Footer";
import { applyForPermanent } from '../axiosMA';



const Permanent_license = () => {

    const [formData, setFormData] = useState({
        learningLicNo: '',
        resultStatus: '',

    })


    const handleChange = (e) => {
        setFormData({ ...formData, [e.target.name]: e.target.value });
    }

    const handleSubmit = async (e) => {
        e.preventDefault();
        try {
            const response = await applyForPermanent(formData);
           console.log(response);
           
            // toast.success("Congradulations! For having Leaning License.");
        } catch (error) {
            console.log('Error in applying for learning license. ', error);
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
                            <h2 style={{ textAlign: 'center' }}>Apply For Permanent License</h2>

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

                                <div className="mb-3">
                                    <label htmlFor="resultStatus" className="form-label">
                                        Result Status
                                    </label>
                                    <select className="form-select" aria-label="multiple select example" name='resultStatus' value={formData.resultStatus} onChange={handleChange}>
                                        <option>Select from Below</option>
                                        <option value="0">PASS</option>
                                        <option value="1">FAIL</option>
                                    </select>
                                </div>

                                <Link to="/dashboard" className="btn btn-primary mt-3" onClick={handleSubmit}>
                                    Apply
                                </Link>  &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;
                                <Link to="/dashboard/license" className="btn btn-primary mt-3">
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

export default Permanent_license;