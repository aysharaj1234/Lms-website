import React from 'react';
import Sidebar from '../Sidebar';
import Header from './Header';

const Communties = () => {
  return (
    <div>
      <Sidebar />
      <Header />

      {/* section-22 */}
      <div className="section-22">
        <div className="container">
          <div className="row">
            {/* Left Column: Heading and Description */}
            <div className="col-lg-6 col-md-12 mt-4">
              <h4>Communities</h4>
              <p>Communities are open or private discussion forums</p>
              <div className="d-flex flex-column flex-md-row align-items-md-center mt-3">
                <button className="btn btn-outline-primary mt-3 mt-md-0 ms-md-3" type="button">
                  <i className="fa-solid fa-circle-exclamation"></i> Export
                </button>
              </div>
            </div>

            {/* Right Column: Create & Settings Buttons */}
            <div className="col-lg-6 col-md-12 mt-4">
              <div className=" mt-3">
                <button className="btn btn-outline-primary mt-3 mt-md-0 ms-md-3" type="button">
                  + Create
                </button>
                <button className="btn btn-primary mt-3 mt-md-0 ms-md-3" type="submit">
                  <i className="fa-solid fa-gear"></i> Settings
                </button>
              </div>
            </div>
          </div>

         

          <div style={{display:"flex"}}> 
         
         <button type="button" style={{marginLeft:"88%"}} class="btn btn-secondary mt-5">Filter By Date </button>
     
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
    

        {/* Placeholder box */}
        <div className="container mt-5" style={{ width: "100%", height: "8rem", backgroundColor: "lightblue" }}></div>

        {/* No Results Found */}
        <h5 className="text-center mt-5">No Results Found</h5>

        </div>
          </div>
        </div>
  );
}

export default Communties;
