import React from 'react';
import Sidebar from '../Sidebar';
import Header from './Header';


const PaymentGateways = () => {
  return (
    <div>
         <Sidebar />
           <Header />
                
           {/* section-19 */}
           <div className="section-19">
        <div className="container">
          <div className="row">
            <div className="col-lg-6 col-md-6 col-sm-12 mt-5">
              <h3>Payment Gateways</h3>
              <p>view all payment gateways transactions of your school.</p>
              <div className="d-flex flex-column flex-md-row align-items-md-center">
                <input
                  type="text"
                  className="form-control w-50 w-md-50"
                  placeholder="Search by payment Gateways(alt + K cmd+k)"
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
            
                <div class="dropdown">
  <a className="btn btn-outline-secondary dropdown-toggle" href="#" role="button" data-bs-toggle="dropdown" aria-expanded="false">
    Select Columns
  </a>
  <ul className="dropdown-menu">
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
      <th>Payment Gateway</th>
        <th>Updated On</th>
        <th>Configuration Status</th>
        <th>Status</th>
      
      </tr>
    </thead>
    <tbody>
      <tr>
        <td>Razorpay</td>
        <td>06 sep 2024</td>
        <td> <button type="button" className="btn btn-outline-success ">Configured</button></td>
        <td> <button type="button" className="btn btn-outline-danger ">Unpublished</button></td>
         
      </tr>
      <tr>
   
        <td>Learn pay</td>
        <td>30 sep 2024</td>
     
        <td> <button type="button" className="btn btn-outline-success ">Configured</button></td>
        <td> <button type="button" className="btn btn-outline-success ">Punlished</button></td>
      </tr>
      <tr>
     
        <td> Paypal</td>
        <td> 27 sep 2024</td>
        <td> <button type="button" className="btn btn-outline-success ">Configured</button></td>
        <td> <button type="button" className="btn btn-outline-success ">Published</button></td>
      </tr>
    


    </tbody>
  </table>
</div>

 
      </div>
    </div>
  )
}

export default PaymentGateways;