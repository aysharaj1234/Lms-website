import React from 'react';
import Sidebar from '../Sidebar';
import Header from './Header';

const LiveClassInsights = () => {
  return (
    <div>
              <Sidebar />
              <Header />
              {/* section-19 */}
        <div className="section-19">
        <div className="container">
          <div className="row">
            <div className="col-lg-6 col-md-6 col-sm-12 mt-5">
              <h3>Live Lesson Insights</h3>
              <p>view all the details of your conducted live classes</p>
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
<div className='container-fluid ms-3 mt-5' style={{height: "7rem", backgroundColor: "lightblue", width:"98%"}}>
                      </div>
                   <h5 className='text-center mt-5'> No result found</h5>


</div>  
    </div>

              
    </div>
  )
}

export default LiveClassInsights;