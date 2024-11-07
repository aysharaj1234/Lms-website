import React from 'react';
import Sidebar from '../Sidebar';
import Header from './Header';

const LegacyAnswerReview = () => {
  return (
    <div>
        <Sidebar />
        <Header />
        {/* section-23 */}
        <div className='section-23'>
          <div className='container'>
            <div className='row ms-3'>
              <div className='col-lg-12'>
                <p className="fw-bold">Dashboard / Answer Review</p>
                <h3>Answer Review</h3>
                <p  className="fw-light" style={{color:"gray"}}>Evaluate and manage essay type test submitted by learners.</p>
                <hr/>


                <div style={{display:"flex"}}> 
                <div className="dropdown mt-4">
  <a style={{marginLeft:"-0px"}} class="btn btn-outline-secondary dropdown-toggle" href="#" role="button" data-bs-toggle="dropdown" aria-expanded="false">
    All
  </a>

  <ul className="dropdown-menu">
    <li><a className="dropdown-item" href="#">Action</a></li>
    <li><a className="dropdown-item" href="#">Another action</a></li>
    <li><a className="dropdown-item" href="#">Something else here</a></li>
  </ul>
</div>


<div className="input-group mb-3 me-2 mt-4">
  <input type="text" class="form-control custom-input " placeholder="Search here" aria-label="Recipient's username" aria-describedby="basic-addon2"/>
  <span className="input-group-text" id="basic-addon2"> <i class="fa-solid fa-magnifying-glass"></i><i className="fa-solid fa-xmark ms-2"></i></span>
</div>
</div>
              </div>

<div className='container'>
  <div className='row'>
    <div className='col-12 col-md-6 mt-3'>
    <h5> Showing Result For "All"</h5>

    </div>
    <div className='col-12 col-md-6 text-md-end'>
    <h5>1-0 of 0</h5>

    </div>
  </div>
</div>

<div className="col-12 col-md-6 col-sm-6 w-100 mt-2">
  <div className="table-responsive">
    <table className="table table-bordered">
      <thead>
        <tr>
          <th scope="col">#</th>
          <th scope="col">Product Name</th>
          <th scope="col">Product Type</th>
          <th scope="col">Last Submitted</th>
          <th scope="col">#Pending Evaluation</th>
          <th scope="col">#Total Quizzes</th>
        </tr>
      </thead>
    </table>
  </div>
</div>


<div className='container mt-1' style={{ width: "100%", minHeight: "5rem", border: "1px solid lightgray", display: "flex", alignItems: "center", justifyContent: "center" }}>
  <h5 className='text-center'>No Courses Found</h5>
</div>





         
            </div>
          </div>
        </div>
    </div>
  )
}

export default LegacyAnswerReview;