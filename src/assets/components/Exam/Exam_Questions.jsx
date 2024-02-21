import { getExamQue, setResultStatus } from "../axiosMA";
import { useState } from "react";
import { useEffect } from "react";
import RegiNavBar from "../VehicleReg/RegistervlNav";
import Footer from "../Home/Footer";
import 'bootstrap/dist/css/bootstrap.min.css';
import { Navigate, useNavigate } from "react-router-dom";
import Modal from 'react-bootstrap/Modal';
import React from 'react';
import { Button } from "react-bootstrap";



const Exam_data = () => {
    const [data, setData] = useState([]);
    // const [Res, setRes] = useState('');
    const [modalShow, setModalShow] = React.useState(false);
    const [selectedAnswer, setAnswer] = useState([]);
    var index = 1;


    useEffect(() => {
        // Fetch data from your backend API when the component mounts
        fetchData();
    }, []);

    const navigate = useNavigate();

    const fetchData = async () => {
        try {

            const details = await getExamQue();
            // console.log("response", details);
            setData(details.data);

        } catch (error) {
            console.error('Error fetching data:', error);
        }
    };

    const handleOptionChange = (questionId, val) => {
        console.log(val)
        setAnswer({ ...selectedAnswer, [questionId]: val });
    };


    // var score = 0;
    const handleSubmit = async (e) => {
        e.preventDefault();


    
        try {
            let score = 0;
            for (const item of data) {
                const selectedOption = selectedAnswer[item.id];
                if (selectedOption === item.correctAns) {
                    score++;
                }
            }

            const result = score < 4 ? "Fail" : "Pass";
            await setResultStatus(result);

            navigate('/dashboard/license');
        } catch (error) {
            console.error('Error submitting result:', error);
        }
    };

    const mystyle = {
        marginTop: "20px", marginBotton: "30px", marginLeft: "30px"
    }

    return (

        <>
            <RegiNavBar />
            <h3 style={mystyle}>Online Examination:</h3><hr />
            <div className="container">
                {data.map((item) => (
                    <div className="question-container" key={item.id}>
                        <div className="mb-3">
                            <p>{index++}. {item.questions}</p>
                        </div>
                        <div className="form-check">
                            <input className="form-check-input" type="radio" name={item.id} id={`optionA-${item.id}`} value={item.optA}
                                onChange={() => handleOptionChange(item.id, "A")} />
                            <label className="form-check-label" htmlFor={`optionA-${item.id}`}>{item.optA}</label>
                        </div>
                        <div className="form-check">
                            <input className="form-check-input" type="radio" name={item.id} id={`optionB-${item.id}`} value={item.optB}
                                onChange={() => handleOptionChange(item.id, 'B')} />
                            <label className="form-check-label" htmlFor={`optionB-${item.id}`}>{item.optB}</label>
                        </div>
                        <div className="form-check">
                            <input className="form-check-input" type="radio" name={item.id} id={`optionC-${item.id}`} value={item.optC}
                                onChange={() => handleOptionChange(item.id, 'C')} />
                            <label className="form-check-label" htmlFor={`optionC-${item.id}`}>{item.optC}</label>
                        </div>
                        <div className="form-check">
                            <input className="form-check-input" type="radio" name={item.id} id={`optionD-${item.id}`} value={item.optD}
                                onChange={() => handleOptionChange(item.id, 'D')} />
                            <label className="form-check-label" htmlFor={`optionD-${item.id}`}>{item.optD}</label>
                        </div>
                        <hr />
                    </div>
                ))}
                <center>
                    <button type="submit" className="btn btn-primary" onClick={handleSubmit}>Submit</button> &nbsp;&nbsp;&nbsp;&nbsp;
                    <button type="reset" className="btn btn-primary" onClick={() => window.location.reload()} >Reset</button>
                </center>
                <br />

            </div >
            <Footer />
            <MyVerticallyCenteredModal

                show={modalShow}
                onHide={() => {
                    setModalShow(false);
                    navigate("/dashboard/license")
                }}
            />
        </>
    );
}

export default Exam_data;

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
                <h5> </h5>

            </Modal.Body>
            <Modal.Footer>
                <Button onClick={props.onHide}>Start Exam</Button>
            </Modal.Footer>
        </Modal>
    );
}