import React from 'react';
import Sidebar from '../Sidebar';
import Header from './Header';

const Language = () => {
  return (
    <div >
    <Sidebar/>
    <Header/>

      {/* Section-11 */}
      <div className="section-11" style={{zIndex: "99"}}>
        <div className="container">
          <div className="row">
            <div className="col-12 col-md-6 mt-5">
              <h2>Languages</h2>
              <p>Easily translate all your contents into different languages</p>
              <div className="d-flex align-items-center">
                <input type="text" className="form-control" id="validationCustom01" placeholder="Search by language (alt+k)" required style={{ maxWidth: "15rem" }} />
                <button type="button" className="btn btn-primary ms-2">Search</button>
              </div>
            </div>

            <div className="col-12 col-md-6 mt-5 d-flex flex-column align-items-start">
              <button type="button" className="btn btn-success mb-3">+ Create</button>

              <div className="dropdown">
                <button className="btn btn-secondary dropdown-toggle" type="button" data-bs-toggle="dropdown" aria-expanded="false">
                  Select columns
                </button>
                <ul className="dropdown-menu">
                  <li><a className="dropdown-item" href="#">Action</a></li>
                  <li><a className="dropdown-item" href="#">Another action</a></li>
                  <li><a className="dropdown-item" href="#">Something else here</a></li>
                </ul>
              </div>
            </div>
          </div>

          {/* Responsive Box Section */}
          <div className='boxes col-12 mt-5'>
            {/* Box Content Here */}
          </div>
          
          <div className='cont text-center mt-5'>
            <h5>No results found</h5>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Language;
