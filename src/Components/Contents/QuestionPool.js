import React from 'react';
import Sidebar from '../Sidebar';
import Header from './Header';


const QuestionPool = () => {
  return (
    <div>
         <Sidebar />
        <Header />
      {/* section-19 */}
      <div className="section-19">
        <div className="container">
          <div className="row">
            <div className="col-lg-6 col-md-6 col-sm-12 mt-5">
              <h3>Question Pool</h3>
              <p>Create and manage question pool</p>
              <div className="d-flex flex-column flex-md-row align-items-md-center">
                <input
                  type="text"
                  className="form-control w-50 w-md-50"
                  placeholder="Search by title (alt + K cmd+k)"
                  aria-label="Search"
                  aria-describedby="addon-wrapping"
                />
                <button
                  className="btn btn-primary mt-3 mt-md-0 ms-md-3"
                  type="submit"
                >
                  Search
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
        </div>
      </div>


{/* repeat section */}
      <div className="section-19">
        <div className="container">
          <div className="row">
            <div className="col-lg-6 col-md-6 col-sm-12">
              <div className="d-flex flex-column flex-md-row align-items-md-center">
           
               
               
              </div>
            </div>

            <div className="col-lg-6 col-md-6 col-sm-12">
            <button
                  className="btn btn-outline-secondary mt-md-0 ms-md-3"
                  type="button"
                >
                Filter By Published Date
                
                </button>
                </div>
                </div>
                </div>
           
                <div className='container-fluid ms-3 mt-5' style={{height: "7rem", backgroundColor: "lightblue", width:"98%"}}>
                      </div>
                   <h5 className='text-center mt-5'> No result found</h5>
                </div>
    </div>
  )
}

export default QuestionPool;