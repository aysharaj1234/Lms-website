import React from 'react';
import Sidebar from '../Sidebar';
import Header from './Header';


const Subscription = () => {
  return (
    <div>
         <Sidebar />
         <Header />
           {/* section-20 */}
      <div className="section-20">
        <div className="container">
          <div className="box-1 ms-3" style={{ backgroundColor: "lightcoral", width: "100%" }}>
            <p>
            Want to use Subscription? Change your pricing .Plan to the subscription mode
            </p>
          </div>
          
          <div className="container">
      <div className="row">
        <div className="col-lg-6 col-md-6 col-sm-12 mt-5">
          <h3>Subscriptions</h3>
          <p>Welcome to your subscription dashboard.</p>
          <div className="d-flex flex-column flex-md-row align-items-md-center">
            <input
              type="text"
              className="form-control w-50 w-md-50"
              placeholder="Search by Subscription (alt + K cmd+k)"
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
          </div>
          <div className='bts responsive-margin'>
          <button className="btn btn-primary btn-sm responsive-btn">
+ Create
</button>
          </div>

        </div>
      </div>
      <div className="container mt-5">
          <div className="row">
            <div className="col-12 text-center">
              <img
                style={{ width: "10rem", marginBottom: "1rem" }}
                src="https://thumbs.dreamstime.com/b/box-subscription-service-abstract-concept-vector-illustration-subscription-plan-ecommerce-business-shopping-service-box-delivery-289406980.jpg"
                alt="Telegram Logo"
              />
              <h5>No result found</h5>
             
          </div>
        </div>
    </div> 
  </div>
  </div>

        </div>
    </div>
  
  )
}

export default Subscription;