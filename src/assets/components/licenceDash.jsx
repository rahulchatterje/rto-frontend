import RegiNavBar from "./RegistervlNav"
import { Link } from "react-router-dom";
import Footer from "./Footer";

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
                            <p className="card-text">Applying for the first time to license, then click here to start with.</p>
                            <Link to="" className="btn btn-primary">Go somewhere</Link>
                        </div>
                    </div>
                </div>
                <div className="col-sm-6">
                    <div className="card">
                        <img src="/img/permanent.jpg" style={myStyles} className="card-img-top" alt="..." />
                        <div className="card-body">
                            <h5 className="card-title"style={{textDecoration:'underline'}}>Apply For Permanent License</h5>
                            <p className="card-text">Hurrey! That's it. This is the last step of the process. Complete it and have license delivered at home.</p>
                            <Link to="" className="btn btn-primary">Go somewhere</Link>
                        </div>
                    </div>
                </div>
            </div>
            <Footer />
        </>
    )
}

export default license;