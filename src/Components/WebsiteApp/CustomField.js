import React from 'react';
import { Link, useNavigate } from 'react-router-dom';
import { Navigate } from 'react-router-dom';


const CustomField = () => {
  const navigate= useNavigate()
  const dashboard=()=>
  {
    navigate('/')
  }

  return (
    <div>
      {/* Navbar */}
      <nav className="navbar navbar-expand-lg bg-body-tertiary" style={{ width: '100%' }}>
        <div className="container-fluid">
        <i className="fa-solid fa-backward ms-1" onClick={dashboard} style={{cursor:"pointer"}}></i>
          <button
            className="navbar-toggler"
            type="button"
            data-bs-toggle="collapse"
            data-bs-target="#navbarNav"
            aria-controls="navbarNav"
            aria-expanded="false"
            aria-label="Toggle navigation"
          >
            <span className="navbar-toggler-icon"></span>
          </button>
          <div className="collapse navbar-collapse" id="navbarNav">
            <ul className="navbar-nav"></ul>
          </div>
        </div>
      </nav>

      {/* section-14 */}
      <div className="section-14">
        <div className="container">
          <div className="row align-items-center">
            <div className="col-12 col-lg-6">
              <h2 className="aa mt-3">Custom Fields</h2>
              <p style={{ fontSize: '14px', fontWeight: '500'}}>
                You can decide which information is important for you and you wish to collect from your newly signed up learner.
              </p>
            </div>
            <div className="col-12 col-lg-6 text-lg-end">
              <button type="button" className="btn btn-outline-primary">
                ENABLE
              </button>
            </div>
          </div>
        </div>
      </div>
      <hr className="responsive-hr" />

      {/* section-15 */}
      <div className='section-15'>
  <div className='container'>
    <div className='row'>
      {/* First Column */}
      <div className='col-12 col-lg-4'>
        <h4 style={{ fontSize: "16px" }}>Commonly used fields</h4>
        <input type="text" className="form-control w-75 w-md-50 mt-3" placeholder="Full Name" />
        <input type="email" className="form-control w-75 w-md-50 mt-3" placeholder="E-mail" />
        <input type="text" className="form-control w-75 w-md-50 mt-3" placeholder="Mobile Number" />
        <input type="text" className="form-control w-75 w-md-50 mt-3" placeholder="Country" />
      </div>

      {/* Second Column */}
      <div className='col-12 col-lg-4'>
        <h4 style={{ fontSize: "16px" }} className="mt-4 mt-lg-0">Allow learner to skip counts up to</h4>
        <input type="number" className="form-control w-75 w-md-50 mt-3" placeholder="0" />
        <p style={{ fontSize: '14px', fontWeight: '400', paddingTop: "1rem", color: "lightcoral" }}>
          You have to enable the feature to collect custom fields information.
        </p>
        <table class="table" style={{border:"1px solid lightgray"}}>
  <thead>
    <tr>
      <th scope="col">#</th>
      <th scope="col">FieldName</th>
      <th scope="col">FieldType</th>
      <th scope="col">Mandatory</th>
      <th scope="col">Show</th>
    </tr>
  </thead>
  <tbody>
    <tr>
      <th scope="row">1.</th>
      <td>FullName</td>
      <td>Text</td>
      <td>-</td>
      <td>-</td>
    </tr>

  </tbody>
</table>
      </div>
      <div className='col-12 col-lg-4 mt-4'>
      <button type="button" class="btn btn-primary">Primary</button>
        </div>
    </div>
  </div>
</div>



    </div>
  );
};

export default CustomField;
