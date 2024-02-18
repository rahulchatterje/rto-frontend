import React from 'react'
const MainAdminInfo = ({ username }) => {

  return (
    <>
      <div className="row mt-5 " >
        <div className="" style={{ marginLeft: '5%', marginBottom: '4%' }}>
          <div className="card">
            <div className="card-body">
              <h5 className="card-title">Welcome, {username}!</h5>
              <p className="card-text">This is your Admin dashboard.</p>
              <img src='/img/dashgirl.jpg' style={{ marginLeft: "185px", height: '0%', width: '53%' }}></img>
            </div>
          </div>
        </div>
      </div>
    </>

  )
}

export default MainAdminInfo
