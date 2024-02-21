import RegiNavBar from "../VehicleReg/RegistervlNav"
import { Link } from "react-router-dom";
import Footer from "../Home/Footer";


const license = () => {

    const myStyle = {
       marginTop:'40px', marginBottom:'40px', marginLeft:'10px', marginRight:'10px'
    }

    const myStyles = {
        width:'max', height:'max'
    }

    return (

        <>
            <RegiNavBar />
            <div className="row" style={myStyle}>
                <div className="col-sm-6">
                    <div className="card">
                        <img src="/img/register1.jpg" style={myStyles} className="card-img-top" alt="..." />
                        <div className="card-body">
                            <h5 className="card-title" style={{textDecoration:'underline'}}>Apply For Learning License</h5>
                            <p className="card-text">Here for the first time? then you have to register your self before going furthur. Please! click the link below to start with.</p>
                            <Link to="/dashboard/license/learning" className="btn btn-primary">Learning License</Link>
                        </div>
                    </div>
                </div>
                <div className="col-sm-6">
                    <div className="card">
                        <img src="/img/licenseap.jpg" style={myStyles} className="card-img-top" alt="..." />
                        <div className="card-body">
                            <h5 className="card-title"style={{textDecoration:'underline'}}>Apply For Permanent License</h5>
                            <p className="card-text">Hurrey! That's it. This is the last step of the process. Complete it and have license delivered at home.</p>
                            <Link to="/dashboard/license/permanent" className="btn btn-primary">Permanent License</Link> &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;
                            <Link to="/dashboard/license/status" className="btn btn-primary">Check</Link>

                        </div>
                    </div>
                </div>
            </div>
            <Footer />
        </>
    )
}

export default license;