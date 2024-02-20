import React, { useState } from 'react';
import { Link, useNavigate } from 'react-router-dom';
import Footer from '../Home/Footer';
import 'bootstrap/dist/css/bootstrap.min.css';
import RegiNavBar from './RegistervlNav';
import { addVehicledetails } from '../axiosMA';
import { toast } from 'react-toastify';
import Modal from 'react-bootstrap/Modal';

import Button from 'react-bootstrap/Button';

const RegisterVL = () => {

    const [modalShow, setModalShow] = React.useState(false);
    const [data,setData]=useState({
        registrationNo:'',
        numberPlate:''

    })

    const [formData, setFormData] = useState({
        vehicleType: '',
        vehicalCompany: '',
        vehicalModel: '',
        purchaseDate: '',
    })

    const navigate = useNavigate()
   
    const handleChange = (e) => {
        setFormData({ ...formData, [e.target.name]: e.target.value });
    }

    const handleSubmit = async (e) => {
        e.preventDefault();
        console.log(formData);
        try {
            const response = await addVehicledetails(formData);
            console.log(response);
            setData({registrationNo:response.registrationNo, numberPlate:response.numberPlate})
            setModalShow(true)
            console.log(response);
            // window.alert(JSON.stringify(response.registrationNo), "Please! note ");
            
            toast.success("Congradulations! Vehicle registered successfully..");
        }
        catch (error) {
            console.error("Error adding vehicle details:", error);
            toast.error("Unable to register the vehicle...")
        }
    }

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
                            <h2 style={{ textAlign: 'center' }}>New Vehicle Registration</h2>

                            <form onSubmit={handleSubmit}>
                                
                                <div className='mb-3'>
                                    <label htmlFor="vehicleType" className='form-label'>Vehicle Type</label>
                                    <input
                                        type="text"
                                        className='form-control'
                                        name="vehicleType"
                                        id="vehicleType"
                                        value={formData.vehicleType}
                                        onChange={handleChange}
                                        required
                                    />

                                </div>
                                <div className='mb-3'>
                                    <label htmlFor="vehicalCompany" className='form-label'> Vehicle Company</label>
                                    <input
                                        type="text"
                                        className='form-control'
                                        name="vehicalCompany"
                                        id="vehicalCompany"
                                        value={formData.vehicalCompany}
                                        onChange={handleChange}
                                        required
                                    />
                                </div>
                                <div className='mb-3'>
                                    <label htmlFor="vehicalModel" className='form-label'>Vehicle Model</label>
                                    <input
                                        type="text"
                                        className='form-control'
                                        name="vehicalModel"
                                        id="vehicalModel"
                                        value={formData.vehicalModel}
                                        onChange={handleChange}
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
                                        onChange={handleChange}
                                        required
                                    />

                                </div>
                                &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;
                                &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;
                                &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp; &nbsp;&nbsp;&nbsp;&nbsp;

                                <Link to="/dashboard" className='btn btn-primary btn-lg' onClick={handleSubmit}>Register</Link>
                                &nbsp;&nbsp;&nbsp;&nbsp;
                                &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp; &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;
                                <Link to="/dashboard" className='btn btn-primary btn-lg'>Back</Link>
                            </form>
                        </div>
                    </div>

                </div>
                <div className='col-sm-5'>
                    <img src='/img/vehicalR.jpg' alt='Registration Image' style={{ width: "100%", height: "90%", marginTop:"20px" }}></img>
                </div>
            </div>
            <Footer />


            <MyVerticallyCenteredModal
        data={data}
        show={modalShow}
        onHide={() => {
            setModalShow(false);
            navigate("/dashboard")
        }}
      />
        </>
    )
}
export default RegisterVL;



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
        <h5> Please note this numbers for furthur use. </h5>
        <hr />
     
          <h3>
          Registration ID : {props.data.registrationNo} 
          </h3>
          <h3>
          Number Plate : {props.data.numberPlate}
          </h3>
        </Modal.Body>
        <Modal.Footer>
          <Button onClick={props.onHide}>Understood</Button>
        </Modal.Footer>
      </Modal>
    );
  }