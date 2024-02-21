import RegiNavBar from '../VehicleReg/RegistervlNav';
import 'bootstrap/dist/css/bootstrap.min.css'
import Footer from '../Home/Footer';
import { useState } from 'react';
import { Link, useNavigate } from 'react-router-dom'; // Import Link from react-router-dom
import { addCorrespAdd } from '../axiosMA';
import { Toast, toast } from '../toast';

const corresP = () => {

    const [formData, setFormData] = useState({
        correspondAddStreet: '',
        correspondAddCity: '',
        correspondAddState: '',
        correspondAddCountry: '',
        correspondAddZipCode: ''
    })

    const navigate = useNavigate()

    const handleChange = (e) => {
        setFormData({ ...formData, [e.target.name]: e.target.value });
    }

    const handleSubmit = async(e) => {
        e.preventDefault();
        console.log(formData);
        try {
            const response = await addCorrespAdd(formData);
            // Call the addCorrespAdd function
      
            toast.success("Congratulations! Corresponding Address are saved successfully..");
            setTimeout(() => { navigate('/dashboard') }, 3000);
      
      
            // Handle the response or perform any other actions upon successful submission
          } catch (error) {
            // Handle errors, display error messages, etc.
            console.error('Error in adding corresponding address:', error);
            toast.error("Oops! Something went wrong.");
          }
    }

    const myStyles = {
        marginTop: "40px", marginBottom: "40px", marginRight: "40px", marginLeft: "40px"
    };

    return (
        <>
            <RegiNavBar />

            <h4 style={myStyles}>Corresponding Address:</h4>
            <div className='container mb-3'>
                <div className="row g-3">
                    

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
                        <label htmlFor="correspondAddZipCode" className="form-label">Zip-Code</label>
                        <input type="text" className="form-control" name="correspondAddZipCode" />
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

                    <div style={{ display: 'flex', justifyContent: "flex-start" }}>
                        <div className="col-1">
                            <button type="submit" className="btn btn-primary" onClick={handleSubmit}>Update</button>
                        </div>

                        <div className="col-2">
                        <Link to="/dashboard/correspondenceAddress" className="btn btn-primary mt-3">
                          Reset
                         </Link>
                        </div>
                    </div>
                </div>
            </div>
            <Toast />
            <Footer />
        </>

    )
}

export default corresP;