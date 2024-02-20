import React, { Component, useEffect } from 'react';
import { useState } from 'react';
import RegiNavBar from '../VehicleReg/RegistervlNav';
import Footer from "../Home/Footer";
import 'bootstrap/dist/css/bootstrap.min.css';
import { useNavigate } from 'react-router-dom';
import { getAdminDetails } from '../axiosMA';

const personalAdminInfo = () => {

    const navigate = useNavigate();
    const [formData, setFormData] = useState({
        userName: '',
        s_d_w: '',
        email: '',
        birthDate: '',
        phoneNo: '',
        gender: '',
        correspondAddStreet: '',
        correspondAddCity: '',
        correspondAddState: '',
        correspondAddCountry: '',
        correspondAddZipCode: '',
        permanentAddressStreet: '',
        permanentAddressCity: '',
        permanentAddressState: '',
        permanentAddressCountry: '',
        permanentAddressZipCode: ''
    });

    useEffect(() => {
        fetchData();
    }, [])

    const fetchData = async () => {
        const response = await getAdminDetails();
       
    
        setFormData({
            userName: response.data.userName,
            s_d_w: response.data.s_d_w,
            email: response.data.email,
            birthDate: response.data.birthDate,
            phoneNo: response.data.phoneNo,
            gender: response.data.gender,
            correspondAddStreet: response.data.correspondAddStreet,
            correspondAddCity: response.data.correspondAddCity,
            correspondAddState: response.data.correspondAddState,
            correspondAddCountry: response.data.correspondAddCountry,
            correspondAddZipCode: response.data.correspondAddZipCode,
            permanentAddressStreet: response.data.permanentAddressStreet,
            permanentAddressCity: response.data.permanentAddressCity,
            permanentAddressState: response.data.permanentAddressState,
            permanentAddressCountry: response.data.permanentAddressCountry,
            permanentAddressZipCode: response.data.permanentAddressZipCode
        })
    }

    const handleChange = (e) => {
        const { name, value } = e.target;
        setFormData(prevState => ({
            ...prevState,
            [name]: value
        }));

    };

    const handleSubmit = async (e) => {
        e.preventDefault();

    }

    const myStyles = {
        marginTop: "20px"
    };


    return (

        <>
            <RegiNavBar />

            <div className='container mb-3'>
                <h5 style={myStyles}>Personal Details</h5>

                <form className="row g-3">
                    <div className="col-md-6">
                        <label htmlFor="username" className="form-label">Username</label>
                        <input type="text"
                            className="form-control"
                            name="userName"
                            value={formData.userName}
                            onChange={handleChange}
                            required />
                    </div>

                    <div className="col-md-6">
                        <label htmlFor="s_d_w" className="form-label">Son/Daughter/Wife of</label>
                        <input type="text"
                            className="form-control"
                            name="s_d_w"
                            value={formData.s_d_w}
                            onChange={handleChange}
                            required />
                    </div>

                    <div className="col-md-12">
                        <label htmlFor="email" className="form-label">Email</label>
                        <input type="email"
                            className="form-control"
                            name="email"
                            value={formData.email}
                            onChange={handleChange}
                            required
                        />
                    </div>

                    <label htmlFor="phoneNo" className="form-label">Mobile No</label>
                    <div className="input-group col-md-12">
                        <span className="input-group-text" id="basic-addon1">+91</span>
                        <input type="tel"
                            className="form-control"
                            name="phoneNo"
                            aria-label="phoneNo"
                            aria-describedby="basic-addon1"
                            value={formData.phoneNo}
                            onChange={handleChange}
                            required />
                    </div>

                    <div className="col-md-6">
                        <label htmlFor="birthDate" className='form-label'>BirthDate</label>
                        <input type="date"
                            className='form-control'
                            name='birthDate'
                            value={formData.birthDate}
                            onChange={handleChange}
                            required
                        />
                    </div>

                    <div className="col-md-6">
                        <label htmlFor="gender" className='form-label' value={formData.gender} onChange={handleChange}>Gender</label>
                        <select className="form-select" aria-label="multiple select example" name='gender' value={formData.gender} onChange={handleChange}>
                            <option>Select from Below</option>
                            <option value="0">Male</option>
                            <option value="1">Female</option>
                            <option value="2">Transgender</option>
                            <option value="3">Prefer Not To Say</option>
                        </select>
                    </div>
                    <h5 style={myStyles}>Corresponding Address</h5>
                    <div className="col-12">
                        <label htmlFor="correspondAddStreet" className="form-label">Street</label>
                        <input type="text"
                            className="form-control"
                            name="correspondAddStreet"
                            placeholder="1234 Main St"
                            value={formData.correspondAddStreet}
                            onChange={handleChange}
                            required
                        />
                    </div>

                    <div className="col-md-4">
                        <label htmlFor="correspondAddCity" className="form-label">City</label>
                        <input type="text"
                            className="form-control"
                            name="correspondAddCity"
                            value={formData.correspondAddCity}
                            onChange={handleChange}
                            required
                        />
                    </div>

                    <div className="col-md-4">
                        <label htmlFor="correspondAddState" className="form-label">State</label>
                        <select name="correspondAddState" className="form-select" value={formData.correspondAddState} onChange={handleChange} required>
                            <option >Choose From Below</option>
                            <option>Andhra Pradesh</option>
                            <option>Arunachal Pradesh</option>
                            <option>Assam</option>
                            <option>Bihar</option>
                            <option>Chhattisgarh</option>
                            <option>Goa</option>
                            <option>Gujarat</option>
                            <option>Haryana</option>
                            <option>Himachal Pradesh</option>
                            <option>Jharkhand</option>
                            <option>Karnataka</option>
                            <option>Kerala</option>
                            <option>Madhya Pradesh</option>
                            <option>Maharashtra</option>
                            <option>Manipur</option>
                            <option>Meghalaya</option>
                            <option>Mizoram</option>
                            <option>Nagaland</option>
                            <option>Odisha</option>
                            <option>Punjab</option>
                            <option>Rajasthan</option>
                            <option>Sikkim</option>
                            <option>Tamil Nadu</option>
                            <option>Telangana</option>
                            <option>Tripura</option>
                            <option>Uttarakhand</option>
                            <option>Uttar Pradesh</option>
                            <option>West Bengal</option>
                        </select>
                    </div>


                    <div className="col-md-4">
                        <label htmlFor="correspondAddZipCode" className="form-label">Zip-Code</label>
                        <input type="text" className="form-control" name="correspondAddZipCode" value={formData.correspondAddZipCode}/>
                    </div>

                    <div className="col-md-12">
                        <label htmlFor="correspondAddCountry" className="form-label">Country</label>
                        <input type="text"
                            className="form-control"
                            name="correspondAddCountry"
                            value={formData.correspondAddCountry}
                            onChange={handleChange}
                            required
                        />
                    </div>
                    <h5 style={myStyles}>Permanent Address</h5>
                    <div className="col-12">
                        <label htmlFor="permanentAddressStreet" className="form-label">Street</label>
                        <input type="text"
                            className="form-control"
                            name="permanentAddressStreet"
                            placeholder="1234 Main St"
                            value={formData.permanentAddressStreet}
                            onChange={handleChange}
                            required
                        />
                    </div>

                    <div className="col-md-4">
                        <label htmlFor="permanentAddressCity" className="form-label">City</label>
                        <input type="text"
                            className="form-control"
                            name="permanentAddressCity"
                            value={formData.permanentAddressCity}
                            onChange={handleChange}
                            required
                        />
                    </div>

                    <div className="col-md-4">
                        <label htmlFor="permanentAddressState" className="form-label">State</label>
                        <select name="permanentAddressState" className="form-select" value={formData.permanentAddressState} onChange={handleChange}
                            required>
                            <option >Choose From Below</option>
                            <option>Andhra Pradesh</option>
                            <option>Arunachal Pradesh</option>
                            <option>Assam</option>
                            <option>Bihar</option>
                            <option>Chhattisgarh</option>
                            <option>Goa</option>
                            <option>Gujarat</option>
                            <option>Haryana</option>
                            <option>Himachal Pradesh</option>
                            <option>Jharkhand</option>
                            <option>Karnataka</option>
                            <option>Kerala</option>
                            <option>Madhya Pradesh</option>
                            <option>Maharashtra</option>
                            <option>Manipur</option>
                            <option>Meghalaya</option>
                            <option>Mizoram</option>
                            <option>Nagaland</option>
                            <option>Odisha</option>
                            <option>Punjab</option>
                            <option>Rajasthan</option>
                            <option>Sikkim</option>
                            <option>Tamil Nadu</option>
                            <option>Telangana</option>
                            <option>Tripura</option>
                            <option>Uttarakhand</option>
                            <option>Uttar Pradesh</option>
                            <option>West Bengal</option>
                        </select>
                    </div>

                    <div className="col-md-4">
                        <label htmlFor="permanentAddressZipCode" className="form-label">Zip-Code</label>
                        <input type="text" className="form-control"
                            name="permanentAddressZipCode"
                            value={formData.permanentAddressZipCode}
                            onChange={handleChange}
                            required
                        />
                    </div>

                    <div className="col-md-12">
                        <label htmlFor="permanentAddressCountry" className="form-label">Country</label>
                        <input type="text"
                            className="form-control"
                            name="permanentAddressCountry"
                            value={formData.permanentAddressCountry}
                            onChange={handleChange}
                            required
                        />
                    </div>

                    <div style={{ display: 'flex', justifyContent: "flex-start" }}>
                        <div className="col-1">
                            <button type="submit" className="btn btn-primary" onClick={handleSubmit}>Update</button>
                        </div>

                        <div className="col-2">
                            <button type="reset" className="btn btn-primary">Reset</button>
                        </div>
                    </div>
                </form>
            </div>

            <Footer />
        </>
    )
}

export default personalAdminInfo;
