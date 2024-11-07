import React from 'react';
import Sidebar from '../Sidebar';
import Header from './Header';

const Learners = () => {
  return (
    <div>
      <Sidebar />
      <Header />
      {/* section-19 */}
      <div className="section-19">
        <div className="container">
          <div className="row">
            <div className="col-lg-6 col-md-6 col-sm-12 mt-5">
              <h3>All Learners</h3>
              <div className="d-flex flex-column flex-md-row align-items-md-center">
                <input
                  type="text"
                  className="form-control w-50 w-md-50"
                  placeholder="Search by Email (alt + K cmd+k)"
                  aria-label="Search"
                  aria-describedby="addon-wrapping"
                />
                <button
                  className="btn btn-primary mt-3 mt-md-0 ms-md-3"
                  type="submit"
                >
                  Search
                </button>
                <button
                  className="btn btn-outline-primary mt-3 mt-md-0 ms-md-3"
                  type="button"
                >
                  Add Filter
                </button>
              </div>
             
            </div>

            <div className="col-lg-6 col-md-6 col-sm-12 mt-5 ">
              <div className="btn-group  custom-margin">
                <button
                  className="btn btn-secondary btn-sm dropdown-toggle"
                  type="button"
                  data-bs-toggle="dropdown"
                  aria-expanded="false"
                >
                  More
                </button>
                <ul className="dropdown-menu">
                  <li>
                    <a className="dropdown-item" href="#">
                      Action
                    </a>
                  </li>
                  <li>
                    <a className="dropdown-item" href="#">
                      Another action
                    </a>
                  </li>
                  <li>
                    <a className="dropdown-item" href="#">
                      Something else here
                    </a>
                  </li>
                </ul>
              </div>
              <div className='bts responsive-margin'>
              <button className="btn btn-primary btn-sm responsive-btn">
  + Add
</button>
              </div>

            </div>
          </div>
        </div>
      </div>


{/* repeat section */}
      <div className="section-19">
        <div className="container">
          <div className="row">
            <div className="col-lg-6 col-md-6 col-sm-12">
              <div className="d-flex flex-column flex-md-row align-items-md-center">
              <button
                  className="btn btn-secondary mt-3 mt-md-0 ms-md-3"
                  type="submit"
                >
             Export
                </button>
                <button
                  className="btn btn-primary mt-3 mt-md-0 ms-md-3"
                  type="submit"
                >
             Create Group
                </button>
                <button
                  className="btn btn-outline-success mt-3 mt-md-0 ms-md-3"
                  type="button"
                >
                 Send Message
                </button>
              </div>
             
            </div>

            <div className="col-lg-6 col-md-6 col-sm-12">
            <button
                  className="btn btn-outline-secondary mt-3 mt-md-0 ms-md-3"
                  type="button"
                >
                Filter By Signed Upon
                </button>
                <div class="dropdown">
  <a class="btn btn-outline-secondary dropdown-toggle" href="#" role="button" data-bs-toggle="dropdown" aria-expanded="false">
    Select Columns
  </a>
  <ul class="dropdown-menu">
    <li><a class="dropdown-item" href="#">Action</a></li>
    <li><a class="dropdown-item" href="#">Another action</a></li>
    <li><a class="dropdown-item" href="#">Something else here</a></li>
  </ul>
</div>          
</div>          
</div>  
</div>  
<hr className="my-4 mx-auto w-100" />

<div className="table-responsive">
  <table className="table table-bordered table-striped">
    <thead>
      <tr>
        <th>Email</th>
        <th>Mobile</th>
        <th>Last Login</th>
        <th>Total Spent</th>
        <th>Active Devices</th>
        <th>Signed Upon</th>
      </tr>
    </thead>
    <tbody>
      <tr>
        <td> <i className="fa-regular fa-user"></i> ankurrathore4u@gmail.com</td>
        <td>+919146001764</td>
        <td>01 oct 2024</td>
        <td>12,390</td>
         <td>1</td>
           <td>01 oct 2024</td>
      </tr>
      <tr>
        <td> <i className="fa-regular fa-user"></i> piyu1818@gmail.com</td>
        <td>-</td>
        <td>30 sep 2024</td>
        <td>-</td>
        <td>1</td>
          <td>30 sep 2024</td>
      </tr>
      <tr>
        <td> <i className="fa-regular fa-user"></i> jayantamandal@gmail.com</td>
        <td> -</td>
        <td>30 sep 2024</td>
        <td>-</td>
          <td>1</td>
           <td>30 sep 2024</td>
      </tr>
       <tr>
        <td> <i className="fa-regular fa-user"></i> aithalmahesh.kumar25@gmail.com</td>
        <td>+917760161717</td>
        <td>01 oct 2024</td>
        <td>-</td>
             <td>1</td>
        <td>30 sep 2024</td>
      </tr>
    </tbody>
  </table>
</div>

 
      </div>
          </div>
 
   
  

   
  );
};

export default Learners;
