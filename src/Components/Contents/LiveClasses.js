
import React from 'react';
import Sidebar from '../Sidebar';
import Header from './Header';

const LiveClasses = () => {
  return (
    <div>
        <Sidebar />
        <Header />
      {/* section-19 */}
      <div className="section-19">
        <div className="container">
          <div className="row">
            <div className="col-lg-12 col-md-6 col-sm-12 mt-5">
              <h3>LiveClass</h3>
              <p>View and Manage  your live Classes</p>
              <div className="d-flex flex-column flex-md-row align-items-md-center">
                <input
                  type="text"
                  className="form-control w-auto"
                  placeholder="Search by Course Name (alt + K cmd+k)"
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

            <div className="col-lg-6 col-md-6 col-sm-6 ">
        
              </div>
             
              <div className="col-lg-6 col-md-6 col-sm-6">
              <button type="button" className="btn btn-secondary btn-sm">Filter By Date</button>
                    <div class="dropdown">
  <button className="btn btn-secondary  btn-sm dropdown-toggle" type="button" data-bs-toggle="dropdown" aria-expanded="false" style={{marginTop:"14px"}}>
   Select Columns
  </button>
  <ul class="dropdown-menu">
    <li><button className="dropdown-item" type="button">Action</button></li>
    <li><button className="dropdown-item" type="button">Another action</button></li>
    <li><button className="dropdown-item" type="button">Something else here</button></li>
  </ul>
</div>
              </div>

            </div>
            
            <div class="table-responsive mt-5">
  <table className="table table-bordered table-striped">
    <thead>
      <tr>
      <th>Live Lesson Name</th>
        <th>Type</th>
        <th>Course Name</th>
        <th>Status</th>
        <th>Start Date&Time</th>
        <th>End Date&Time</th>
   
      </tr>
    </thead>
    <tbody>
      <tr>
      <td>File Handling in Python</td>
        <td>Meeting</td>
        <td>Selenium With Python</td>
        <td>Completed</td>
        <td>11 Nov 2024.8.00PM</td>
        <td>11 Nov 2024.9:30PM</td>
           
      </tr>
      <tr>
      <td>Abstraction and Exception Handling  in Python</td>
      <td>Meeting</td>
        <td>Selenium With Python</td>
        <td>Completed</td>
        <td>1 Nov 2024.8.00PM</td>
        <td>1 Nov 2024.9:30PM</td>
      </tr>
      <tr>
      <td>Inheritance In Python</td>
      <td>Meeting</td>
        <td>Selenium With Python</td>
        <td>Completed</td>
        <td>30 oct 2024.8.00PM</td>
        <td>30 oct 2024.9:30PM</td>    
      </tr>
     
    </tbody>
  </table>
    </div>
          </div>
        </div>
      </div>
 
  )
}

export default  LiveClasses;



















