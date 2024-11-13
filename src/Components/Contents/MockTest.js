
import React from 'react';
import Sidebar from '../Sidebar';
import Header from './Header';

const MockTest= () => {
  return (
    <div>
        <Sidebar />
        <Header />
      {/* section-19 */}
      <div className="section-19">
        <div className="container">
          <div className="row">
            <div className="col-lg-9 col-md-6 col-sm-12 mt-3">
              <h3>MockTests</h3>
              <p>Welcome to your test dashboard</p>
              
            </div>
            <div className="col-lg-3 col-md-6 col-sm-12 mt-5">
                <button
                  className="btn btn-outline-secondary mt-5 mt-md-0 ms-md-3"
                  type="submit"
                >
                 Reorder
                </button>
                <button
                  className="btn btn-outline-primary mt-3 mt-md-0 ms-md-3"
                  type="button"
                >
                 + Create
                </button>  
            </div>
           

            <div className="col-lg-6 col-md-6 col-sm-6 mt-2">
            <div className="d-flex flex-column flex-md-row align-items-md-center">
                <input
                  type="text"
                  className="form-control w-auto"
                  placeholder="Search by Title(alt + K cmd+k)"
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
              <div className='col-lg-6 col-sm-6 col-md-6'>
              <button type="button" class="btn btn-outline-secondary">Filter By Published Date</button>
              </div>
             
            <div className='container'>
              <div className='row'>
                <div className='col-lg-12 col-md-6 col-sm-6 text-center'>
                    <img 
          className="img-fluid w-50 w-md-50 w-lg-50" 
          src='https://cdni.iconscout.com/illustration/premium/thumb/sorry-item-not-found-illustration-download-in-svg-png-gif-file-formats--available-product-tokostore-pack-e-commerce-shopping-illustrations-2809510.png' 
          alt="Contacts"
          
        />
        <h5 className='mt-3'> No Results Found</h5>
                </div>
              </div>
            </div>

            </div>
            
            
    </div>
          </div>
        </div>
 
 
  )
}

export default  MockTest;



















