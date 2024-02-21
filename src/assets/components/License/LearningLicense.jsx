import React, { useState } from 'react';
import RegiNavBar from "../VehicleReg/RegistervlNav";
import "bootstrap/dist/css/bootstrap.min.css";
import { Link, useNavigate } from 'react-router-dom';
import Footer from "../Home/Footer";
import { applyForLearning } from '../axiosMA';
import Modal from 'react-bootstrap/Modal';

import { Button } from 'react-bootstrap';
import { toast } from 'react-toastify';

const Learning_license = () => {

    const [modalShow, setModalShow] = React.useState(false);
    const [data, setData] = useState("");

    const [formData, setFormData] = useState({
        age: '',
        adharcardNumber: '',
        vehicleType: '',
        rtoLocation: '',
        birthPlace: '',
        birthMark: '',
    })

    const navigate=useNavigate()

    const handleChange = (e) => {
        setFormData({ ...formData, [e.target.name]: e.target.value });
    }

    const handleSubmit = async (e) => {
        e.preventDefault();
        try {
            const response = await applyForLearning(formData);
           console.log(response);
            setData(response?.learningLicenseNo)
            setModalShow(true)
            toast.success("Congradulations! For having Leaning License.");
        } catch (error) {
            console.log('Error in applying for learning license. ', error);
            toast.error(error.message);
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

                                <Link  className="btn btn-primary mt-3" onClick={handleSubmit}>
                                    Register
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

            <MyVerticallyCenteredModal
        data={data}
        show={modalShow}
        onHide={() => {
            setModalShow(false);
            navigate("/dashboard/lic")
        }}
      />
        </>
    )
}

export default Learning_license;

function MyVerticallyCenteredModal(props) {
    return (
      <Modal
        {...props}
        size="lg"
        aria-labelledby="contained-modal-title-vcenter"
        centered
      >
        <Modal.Header closeButton>
          <Modal.Title id="contained-modal-title-vcenter">
            Registration Number
          </Modal.Title>
        </Modal.Header>
        <Modal.Body>
        <h5> Please note this number for furthur use. </h5>
          <h3>
            {props.data} 
          </h3>
        </Modal.Body>
        <Modal.Footer>
          <Button onClick={props.onHide}>Start Exam</Button>
          <Button onClick={props.onHide}>Close</Button>
        </Modal.Footer>
      </Modal>
    );
  }