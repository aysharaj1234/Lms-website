import React from 'react';
import Sidebar from '../Sidebar';
import Header from './Header';

const CourseEncryption = () => {
  return (
    <div>
      <Sidebar />
      <Header />

      {/* section-20 */}
      <div className="section-20">
        <div className="container">
              <div className="box-1 ms-3" style={{ backgroundColor: "lightcoral", width:"100%" }}>
                <p>
                  You cannot encrypt another course if a course copy/encryption is in progress.
                </p>
              </div>
              <div className="row ">
            <div className="col-lg-6 col-md-8 col-sm-12">
              <h3 className="mt-5 ms-5">Course Encryption</h3>
              <p className="ms-5" style={{ fontWeight: "500" }}>Encrypt your course to protect it against piracy</p>

              {/* Search and Filter Section */}
              <div className="d-flex flex-column flex-md-row align-items-md-center">
                <input
                  type="text"
                  className="form-control ms-5 w-50 w-md-50"
                  placeholder="Search by Title (alt + K cmd+k)"
                  aria-label="Search"
                />
                <button className="btn btn-primary mt-3 mt-md-0 ms-md-3" type="submit">
                  Search
                </button>
                <button className="btn btn-outline-primary mt-3 mt-md-0 ms-md-3" type="button">
                   Add Filter
                </button>
              </div>
            </div>
          </div>
        </div>
        
{/* section-21 */}
<div className="section-21">
  <div className="container">
    <div className="row">
      {/* First Column */}
      <div className="col-lg-6 col-md-12">
      <img src='https://www.shutterstock.com/image-vector/cyber-security-course-education-about-260nw-2249327033.jpg'/>
      <h5 className='text-center mt-5'>No Products Available</h5>
      </div>

      {/* Second Column with Dropdown */}
      <div className="col-lg-6 col-md-12 mt-lg-0">
        <div className="dropdown">
          <a
            className="btn btn-secondary dropdown-toggle"
            href="#"
            role="button"
            data-bs-toggle="dropdown"
            aria-expanded="false"
          >
            Select Column
          </a>
          <ul className="dropdown-menu">
            <li><a className="dropdown-item" href="#">Action</a></li>
            <li><a className="dropdown-item" href="#">Another action</a></li>
            <li><a className="dropdown-item" href="#">Something else here</a></li>
          </ul>
        </div>
      </div>
    </div>
  </div>
</div>



      </div>
    </div>
  );
};

export default CourseEncryption;
