import React, { useEffect } from 'react';
import { useState } from 'react';
import RegiNavBar from '../VehicleReg/RegistervlNav';
import Footer from "../Home/Footer";
import 'bootstrap/dist/css/bootstrap.min.css';
import { json, useNavigate } from 'react-router-dom';
import { getUserDetails } from '../axiosMA';



const personalInfo = () => {

    const navigate = useNavigate();
    const [formData, setFormData] = useState({
        userName: '',
        s_d_w: '',
        email: '',
        birthDate: '',
        phoneNo: '',
        gender: '',
    });

    // const [userName, setuserName]=useState('');
    // const [s_d_w, sets_d_w]=useState('');
    // const [email, setemail]=useState('');
    // const [birthDate, setbirthDate]=useState('');
    // const [phoneNo, setphoneNo]=useState('');
    // const [gender, setgender]=useState('');


    useEffect(() => {
        fetchData();
    }, [])

    const fetchData = async () => {
        try {

            const response = await getUserDetails();
            setFormData({
                userName: response.data.userName,
                s_d_w: response.data.s_d_w,
                email: response.data.email,
                birthDate: response.data.birthDate,
                phoneNo: response.data.phoneNo,
                gender: response.data.gender,
            });
            // setuserName(response.data.userName)
            // sets_d_w(response.data.s_d_w)

        } catch (error) {
            console.error('Error fetching data:', error);
        }
    };
    const handleChange = (e) => {

        const { name, value } = e.target;
        setFormData(prevState => ({
            ...prevState,
            [name]: value
        }));

        // setuserName({ ...userName, [e.target.name]: e.target.value });
        // sets_d_w({ ...s_d_w, [e.target.name]: e.target.value })

    };

    const handleSubmit = async (e) => {
        e.preventDefault();

        navigate("/dashboard");
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
                        <span class="input-group-text" id="basic-addon1">+91</span>
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
                        <label htmlFor="gender" className='form-label'
                        >Gender</label>
                        <select class="form-select" aria-label="multiple select example" name='gender' value={formData.gender}
                            onChange={handleChange}
                        >
                            <option>Select from Below</option>
                            <option value="0">Male</option>
                            <option value="1">Female</option>
                            <option value="2">Transgender</option>
                            <option value="3">Prefer Not To Say</option>
                        </select>
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

export default personalInfo;
