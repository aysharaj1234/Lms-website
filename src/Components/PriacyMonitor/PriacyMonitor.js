import React from 'react';
import Sidebar from '../Sidebar';
import Header from './Header';

const PriacyMonitor = () => {
  return (
    <div>
       <Sidebar />
       <Header />
       {/* section-22 */}
       <div className='section-22'>
        <div className='container'>
          <div className='row'>
            <div className='col-lg-6 col-md-12 mt-4'>
<h4>Priacy Monitor</h4>
<p>Monitar your product piracy and manage blocked learners.</p>
<div className="d-flex flex-column flex-md-row align-items-md-center mt-3">
                <input
                  type="text"
                  className="form-control  w-50 w-md-50"
                  placeholder="Search by Email (alt + K cmd+k)"
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
            <div className='col-lg-6 col-md-12'>
            <button type="button" class="btn btn-success btn-sm"> <i className="fa-solid fa-gear"></i> settings</button>
            </div>


            <div style={{display:"flex"}}> 
            <button type="button" style={{marginLeft:"-0px"}} className="btn btn-outline-secondary mt-5">Export <i class="fa-solid fa-circle-exclamation"></i> </button>
       
        
          </div>
       
          <div className="dropdown d-flex justify-content-end">
  <button className="btn btn-secondary dropdown-toggle" type="button" data-bs-toggle="dropdown" aria-expanded="false">
   Select Columns
  </button>
  <ul className="dropdown-menu">
    <li><a className="dropdown-item" href="#">Action</a></li>
    <li><a className="dropdown-item" href="#">Another action</a></li>
    <li><a className="dropdown-item" href="#">Something else here</a></li>
  </ul>
</div>
        </div>
      
      <div className='containere mt-5' style={{width:"auto", height:"8rem", backgroundColor:"lightblue",}}> </div>
        <h5 className='text-center mt-5'>Your content is secure. We have not detected any suspicious activity from your users.</h5>

     

       </div>
    </div>

       
    </div>
  )
}

export default PriacyMonitor;
