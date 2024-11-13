import React from 'react';
import Sidebar from '../Sidebar';
import Header from './Header';

const CustomFields = () => {
  return (
    <div>
           {/* section-19 */}
           
           <Sidebar />
              <Header />
           <div className="section-19">
        <div className="container">
          <div className="row">
            <div className="col-lg-6 col-md-6 col-sm-12 mt-5">
              <h3>Learners Report</h3>
              <p>view learners details like enrollments Contact information and their activities</p>
              <div className="d-flex flex-column flex-md-row align-items-md-center">
                <input
                  type="text"
                  className="form-control w-50 w-md-50"
                  placeholder="Search by Live Lesson Name (alt + K cmd+k)"
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
              <div className="btn-group me-3  custom-margin">
              
              </div>
              <div className='bts responsive-margin'>
   
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
             Export <i class="fa-solid fa-circle-exclamation"></i>
                </button>
              
                
              </div>
             
            </div>

            <div className="col-lg-6 col-md-6 col-sm-12">
            <button
                  className="btn btn-outline-secondary mt-md-0 ms-md-3"
                  type="button"
                >
                Filter By Date
                </button>
                <div className="dropdown">
  <a class="btn btn-outline-secondary dropdown-toggle" href="#" role="button" data-bs-toggle="dropdown" aria-expanded="false">
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


<div class="table-responsive mt-4">
  <table className="table table-bordered table-striped">
    <thead>
      <tr>
      <th>Name</th>
        <th>Email</th>
        <th>Mobile</th>
        <th>Login Count</th>
        <th>Last Active On  </th>
        <th>Total Spent </th>
        <th>Total Orders</th>
        <th>LandMark</th>
      </tr>
    </thead>
    <tbody>
      <tr>
      <td>Ankurrathore4u</td>
        <td> <i className="fa-regular fa-user"></i> ankurrathore4u@gmail.com</td>
        <td>+919146001764</td>
        <td>1</td>
        <td>30 sep 2024</td>
           <td>12390</td>
           <td>1</td>
           <td>-</td>
      </tr>
      <tr>
      <td>Maheshkumar k</td>
        <td> <i className="fa-regular fa-user"></i> Maheshkumar25@gmail.com</td>
        <td>-</td>
        <td>2</td>
        <td>1 oct 2024</td>
        <td>-</td>
        <td>-</td>
        <td>-</td>
    
      </tr>
      <tr>
      <td>Piyu1818</td>
        <td> <i className="fa-regular fa-user"></i>piyu1818@gmail.com </td>
        <td> -</td>
        <td>2</td>
        <td>30 sep 2024</td>
        <td>-</td>
        <td>-</td>
        <td>-</td>
      </tr>
       <tr>
       <td>Jantmandal122250</td>
        <td> <i className="fa-regular fa-user"></i> jayantamandal@gmail.com</td>
        <td>+917760161717</td>
        <td>1</td>
        <td>30 sep 2024</td>
        <td>-</td>
        <td>-</td>
        <td>-</td>
      </tr>
    </tbody>
  </table>
    </div>
    </div>
    </div>
    </div> 
  )
}

export default CustomFields;