import React from 'react'
const MainUserInfo = ({ username="Akanksha" }) => {

  return (
    <>
    <div className="row mt-5 " >
        <div className="" style={{marginLeft:'5%', marginBottom:'4%'}}>
          <div className="card">
            <div className="card-body">
              <h5 className="card-title">Welcome, {username}!</h5>
              <p className="card-text">This is your user dashboard.</p>
              <img src='/img/dashgirl.jpg'  style={{height:'0%',width:'53%'}}></img>
              {/* Add more content as needed */}
            </div>
          </div>
        </div>
        </div>
        </>
      
  )
}

export default MainUserInfo
