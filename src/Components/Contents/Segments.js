import React, { useState } from 'react';
import Sidebar from '../Sidebar';
import Header from './Header';
import { FaCog } from 'react-icons/fa'; // Import react-icons for better icon usage

const Segments = () => {
  const [segments, setSegments] = useState([]); // Example state for segment data
  const [isFeatureDisabled, setIsFeatureDisabled] = useState(true); // Example state for feature status

  return (
    <div>
      <Sidebar />
      <Header />
      {/* section-20 */}
      <div className="section-20">
        <div className="container">
          {/* Disabled Feature Notification */}
          {isFeatureDisabled && (
            <div className="box-1 ms-3" style={{ backgroundColor: "lightcoral", width: "100%" }}>
              <p>Segment feature is disabled, any changes made won't be reflected on learner interface.</p>
            </div>
          )}

          <div className='container'>
            <div className='row'>
              <div className='col-lg-6 col-md-12 mt-4'>
                <h4>Segments</h4>
                <p>Create segments and multiple sub-segments or products within.</p>
                <div className="d-flex flex-column flex-md-row align-items-md-center mt-3">
                  <input
                    type="text"
                    className="form-control w-50"
                    placeholder="Search by Title (alt + K cmd+k)"
                    aria-label="Search"
                  />
                  <button className="btn btn-primary mt-3 mt-md-0 ms-md-3" type="submit" aria-label="Search segments">
                    Search
                  </button>
                  <button className="btn btn-outline-primary mt-3 mt-md-0 ms-md-3" type="button">
                    Add Filter
                  </button>
                </div>
              </div>

              <div className='col-lg-6 col-md-12 mt-4'>
                <div className="mt-3">
                  <button className="btn btn-success mt-3 mt-md-0 ms-md-3" type="button">
                    + Create
                  </button>
                  <button className="btn btn-primary mt-3 mt-md-0 ms-md-3" type="submit">
                    Reorder
                  </button>
                  <button className="btn btn-primary mt-3 mt-md-0 ms-md-3" type="submit">
                    <FaCog /> Settings
                  </button>
                </div>
              </div>
             </div>


             <div className="container">
          <div className="row">
            <div className="col-lg-6 col-md-6 col-sm-12">
              <div className="d-flex flex-column flex-md-row align-items-md-center mt-5">
              <button
                  className="btn btn-secondary mt-3 mt-md-0 ms-md-3"
                  type="submit"
                >
             Export <i class="fa-solid fa-circle-exclamation"></i>
                </button>
             
               
              </div>
             
            </div>

            <div className="col-lg-6 col-md-6 col-sm-12">
            <button
                  className="btn btn-outline-secondary mt-3 mt-md-0 ms-md-3"
                  type="button"
                >
                Filter By Date
                </button>
                <div className="dropdown">
  <a className="btn btn-outline-secondary dropdown-toggle" href="#" role="button" data-bs-toggle="dropdown" aria-expanded="false">
    Select Columns
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
            <div className="container mt-5" style={{width:"auto", height:"8rem", backgroundColor:"lightblue"}}> </div>
            {segments.length === 0 && <h5 className="text-center mt-5">No Results Found</h5>}
          </div>
        </div>
      </div>
    </div>
  );
};

export default Segments;
