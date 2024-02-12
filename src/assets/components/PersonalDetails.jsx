import React, { Component } from 'react';
import { useState } from 'react';
import RegiNavBar from './RegistervlNav';
import Footer from './Footer';
import 'bootstrap/dist/css/bootstrap.min.css';



const personalInfo = () => {

    const [formData, setFormData] = useState({
        userName: '',
        s_d_w: '',
        email: '',
        birthDate: '',
        phoneNo: '',
        gender: '',
        permanentAddressStreet: '',
        permanentAddressCity: '',
        permanentAddressState: '',
        permanentAddressCountry: '',
        permanentAddressZipCode: '',
        correspondAddStreet: '',
        correspondAddCity: '',
        correspondAddState: '',
        correspondAddCountry: '',
        correspondAddZipCode: '',
    });
    const handleChange = (e) => {

        setFormData({ ...formData, [e.target.name]: e.target.value });
    };


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
                        <label htmlFor="userName" className="form-label">Username</label>
                        <input type="text"
                            className="form-control"
                            id="userName"
                            value={formData.userName}
                            onChange={handleChange}
                            required />
                    </div>

                    <div className="col-md-6">
                        <label htmlFor="s_d_w" className="form-label">Son/Daughter/Wife of</label>
                        <input type="text"
                            className="form-control"
                            id="s_d_w"
                            value={formData.s_d_w}
                            onChange={handleChange}
                            required />
                    </div>

                    <div className="col-md-12">
                        <label htmlFor="email" className="form-label">Email</label>
                        <input type="email"
                            className="form-control"
                            id="email"
                            value={formData.email}
                            onChange={handleChange}
                            required
                        />
                    </div>

                    <label htmlFor="phoneNo" className="form-label">Mobile No</label>
                    <div className="input-group col-md-12">
                        <span class="input-group-text" id="basic-addon1">+91</span>
                        <input type="tel"
                            className="form-control"
                            id="email"
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
                            id='birthDate'
                            value={formData.birthDate}
                            onChange={handleChange}
                            required
                        />
                    </div>

                    <div className="col-md-6">
                        <label htmlFor="gender" className='form-label' value={formData.gender} onChange={handleChange}>Gender</label>
                        <select class="form-select" aria-label="multiple select example" name='gender' value={formData.gender} onChange={handleChange}>
                            <option>Select from Below</option>
                            <option value="0">Male</option>
                            <option value="1">Female</option>
                            <option value="2">Transgender</option>
                            <option value="3">Prefer Not To Say</option>
                        </select>
                    </div>

                    <h5 style={myStyles}>Corresponding Address:</h5>
                    <div className="col-12">
                        <label htmlFor="correspondAddStreet" className="form-label">Street</label>
                        <input type="text"
                            className="form-control"
                            id="correspondAddStreet"
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
                            id="correspondAddCity"
                            value={formData.correspondAddCity}
                            onChange={handleChange}
                            required
                        />
                    </div>

                    <div className="col-md-4">
                        <label htmlFor="correspondAddState" className="form-label">State</label>
                        <select id="correspondAddState" className="form-select" value={formData.correspondAddState} onChange={handleChange} required>
                            <option selected>Choose From Below</option>
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


                    <div class="col-md-4">
                        <label htmlFor="correspondAddZipCode" className="form-label">Zip</label>
                        <input type="text" className="form-control" id="correspondAddZipCode" />
                    </div>

                    <div className="col-md-12">
                        <label htmlFor="correspondAddCountry" className="form-label">Country</label>
                        <input type="text"
                            className="form-control"
                            id="correspondAddCountry"
                            value={formData.correspondAddCountry}
                            onChange={handleChange}
                            required
                        />
                    </div>

                    <h5 style={myStyles}>Permanent Address:</h5>
                    <div className="col-12">
                        <label htmlFor="permanentAddressStreet" className="form-label">Street</label>
                        <input type="text"
                            className="form-control"
                            id="permanentAddressStreet"
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
                            id="permanentAddressCity"
                            value={formData.permanentAddressCity}
                            onChange={handleChange}
                            required
                        />
                    </div>

                    <div className="col-md-4">
                        <label htmlFor="permanentAddressState" className="form-label">State</label>
                        <select id="permanentAddressState" className="form-select" value={formData.permanentAddressState} onChange={handleChange}
                            required>
                            <option selected>Choose From Below</option>
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
                            id="permanentAddressZipCode"
                            value={formData.permanentAddressZipCode}
                            onChange={handleChange}
                            required
                        />
                    </div>

                    <div className="col-md-12">
                        <label htmlFor="permanentAddressCountry" className="form-label">Country</label>
                        <input type="text"
                            className="form-control"
                            id="permanentAddressCountry"
                            value={formData.permanentAddressCountry}
                            onChange={handleChange}
                            required
                        />
                    </div>

                    <div style={{ display: 'flex', justifyContent: "flex-start" }}>
                        <div className="col-1">
                            <button type="submit" className="btn btn-primary">Update</button>
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

export default personalInfo;
