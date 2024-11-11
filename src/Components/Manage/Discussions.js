import React from 'react';
import Sidebar from '../Sidebar';
import Header from './Header';

const Discussions = () => {
  return (
    <div>
       <Sidebar />
       <Header />

       {/* section-22 */}
       <div className='section-22'>
        <div className='container'>
          <div className='row'>
            <div className='col-lg-6 col-md-12 mt-4'>
<h4>Discussions</h4>
<p className="fw-bold">View and manage learner discussions</p>
<ul className="nav nav-underline">
  <li className="nav-item">
    <a className="nav-link" aria-current="page" href="#">products</a>
  </li>
  <li className="nav-item">
    <a className="nav-link"  href="#">NewsFeeds</a>
  </li>
  <li className="nav-item">
    <a class="nav-link" href="#">Communities</a>
  </li>
  <li className="nav-item">
    <a className="nav-link" href="#">Batches</a>
  </li>
</ul>
            </div>
            <div className='col-lg-6 col-md-12'>
            <button type="button" class="btn btn-secondary btn-sm"> <i class="fa-solid fa-gear"></i> Settings</button>
            </div>


            <div style={{display:"flex"}}> 
            <button type="button" style={{marginLeft:"-0px"}} class="btn btn-outline-secondary mt-5"> <i className="fa-solid fa-triangle-exclamation"></i> Add Filter</button>
            <button type="button" style={{marginLeft:"69%"}} class="btn btn-secondary mt-5">Filter By Last Discussions </button>
        
          </div>
       
          <div className="dropdown mt-3 d-flex justify-content-end">
  <button class="btn btn-secondary dropdown-toggle" type="button" data-bs-toggle="dropdown" aria-expanded="false">
   Select Columns
  </button>
  <ul className="dropdown-menu">
    <li><a className="dropdown-item" href="#">Action</a></li>
    <li><a className="dropdown-item" href="#">Another action</a></li>
    <li><a className="dropdown-item" href="#">Something else here</a></li>
  </ul>
</div>
        </div>
      
        {/* Placeholder for content */}
        <div
          className="container mt-5"
          style={{ width: '100%', height: '8rem', backgroundColor: 'lightblue' }}
        ></div>
        <h5 className="text-center mt-5">No Results Found</h5>
     

       </div>
    </div>
    
    </div>
  )
}

export default Discussions;