import React from 'react';
import '../css/BikeAnimation.css'; // Import CSS file for styling


class BikeAnimation extends React.Component {
  render() {
    return (
      <div className="road" >
        <img src="public\img\road.jpg" alt="road" style={{ width: "100%", height: "100%", position: "absolute" }} />
        <div className="bike">
          <img src="public\img\bike-bg.png" alt="bike" style={{ height: "70px", marginTop: "25px" }} />
        </div>

        <div className='car'>
          <img src="public\img\car2.png" style={{ height: "50px", marginTop: "35px" }} alt="car" />
        </div>
        <div className='truck'>
          <img src="public\img\truck.png" style={{ height: "50px", marginTop: "35px" }} alt="truck" />

        </div>
      </div>
    );
  }
}

export default BikeAnimation;
