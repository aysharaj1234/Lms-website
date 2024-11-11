import React from 'react';
import Sidebar from '../Sidebar';
import Header from './Header';

const AnswerReview = () => {
  return (
    <div>
      <Sidebar />
      <Header />
      {/* .section-22 */}
      <div className='section-22'>
        <div className='container'>
          <div className='row'>
            <div className='col-lg-12 col-md-12 mt-4'>
<h4>Answer Reviews</h4>
<p className="fw-bold">View and manage answer review for products</p>
<ul className="nav nav-underline">
  <li className="nav-item">
    <a className="nav-link" aria-current="page" href="#">Offline Answer Reviews</a>
  </li>
  <li className="nav-item">
    <a className="nav-link"  href="#">Online Answer Reviews</a>
  </li>
</ul>
            </div>
         


            <div style={{display:"flex"}}> 
            <button type="button" style={{marginLeft:"-0px"}} class="btn btn-outline-secondary mt-5"> <i class="fa-solid fa-triangle-exclamation"></i> Add Filter</button>
            
            <button type="button" style={{marginLeft:"69%"}} class="btn btn-secondary mt-5">Filter By Last Submitted </button>
        
          </div>
       
          <div className="dropdown mt-3 d-flex justify-content-end">
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
        <h5 className='text-center mt-5'>No Results Found</h5>

     

       </div>
    </div>
    </div>
  )
}

export default AnswerReview;