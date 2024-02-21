import React from 'react';
import { useState } from 'react';
import RegiNavBar from "../VehicleReg/RegistervlNav";
import "bootstrap/dist/css/bootstrap.min.css";
import { Link, useNavigate } from 'react-router-dom';
import Footer from "../Home/Footer";
import { applyForExam } from '../axiosMA';
import Modal from 'react-bootstrap/Modal';
import { Toast ,toast } from '../toast';

import { Button } from 'react-bootstrap';

const BeforeExam = () => {

    const [modalShow, setModalShow] = React.useState(false);
    const [formData, setFormData] = useState({
        learningLicNo: '',
    })


    const handleChange = (e) => {
        setFormData({ ...formData, [e.target.name]: e.target.value });
    }

    const navigate = useNavigate();

    const handleSubmit = async (e) => {
        e.preventDefault();
        try {
           
            if (formData.learningLicNo) {
                const response = await applyForExam();
                setModalShow(true)
                
            } else throw new Error();

        } catch (error) {
          
             toast.error("Please enter your Learning License Number");
        }

    }

    const myStyles = {
        marginBottom: "40px", marginTop: "40px", marginLeft: "40px", marginRight: "40px"
    }
    return (

        <>
            <RegiNavBar />
            <div className='row'>
                <div className='card col-sm-6 shadow' style={myStyles}>
                    <div className='card-body' style={{ marginBottom: '30px' }}>
                        <div className='container mt-4'>
                            <h2 style={{ textAlign: 'center' }}>Apply For Exam</h2>

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


                                <Link to="/dashboard" className="btn btn-primary mt-3" onClick={handleSubmit} >
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
            <Toast/>
            <Footer />
            <MyVerticallyCenteredModal
                show={modalShow}
                onHide={() => {
                    setModalShow(false);
                    navigate("/dashboard/test/exam")
                }}
            />
        </>
    )
}

export default BeforeExam;

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
                    Notification
                </Modal.Title>
            </Modal.Header>
            <Modal.Body>
                <h5> All the best! You can start exam </h5>

            </Modal.Body>
            <Modal.Footer>
                <Button onClick={props.onHide}>Start Exam</Button>
            </Modal.Footer>
        </Modal>
    );
}