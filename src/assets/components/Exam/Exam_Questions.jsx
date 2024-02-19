import { getExamQue } from "../axiosMA";
import { useState } from "react";
import { useEffect } from "react";
import RegiNavBar from "../VehicleReg/RegistervlNav";
import Footer from "../Home/Footer";
import 'bootstrap/dist/css/bootstrap.min.css';
import { Navigate, useNavigate } from "react-router-dom";



const Exam_data = () => {
    const [data, setData] = useState([]);

    useEffect(() => {
        // Fetch data from your backend API when the component mounts
        fetchData();
    }, []);
    
    const navigate=useNavigate();
    
    const fetchData = async () => {
        try {

            const response = await getExamQue();
            console.log("response", response);
            setData(response.data);

        } catch (error) {
            console.error('Error fetching data:', error);
        }
    };

    const handleSubmit = () => {
     
        // You can submit the selected options to your server here
        console.log('Selected Options:', data);
        navigate('/dashboard/license');
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
                            <p>{item.id}. {item.questions}</p>
                        </div>
                        <div className="form-check">
                            <input className="form-check-input" type="radio" name={item.id} id={`optionA-${item.id}`} value={item.optA} />
                            <label className="form-check-label" htmlFor={`optionA-${item.id}`}>{item.optA}</label>
                        </div>
                        <div className="form-check">
                            <input className="form-check-input" type="radio" name={item.id} id={`optionB-${item.id}`} value={item.optB} />
                            <label className="form-check-label" htmlFor={`optionB-${item.id}`}>{item.optB}</label>
                        </div>
                        <div className="form-check">
                            <input className="form-check-input" type="radio" name={item.id} id={`optionC-${item.id}`} value={item.optC} />
                            <label className="form-check-label" htmlFor={`optionC-${item.id}`}>{item.optC}</label>
                        </div>
                        <div className="form-check">
                            <input className="form-check-input" type="radio" name={item.id} id={`optionD-${item.id}`} value={item.optD} />
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
        </>
    );
}

export default Exam_data;