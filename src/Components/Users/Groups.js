import React from 'react';
import Sidebar from '../Sidebar';
import Header from './Header';

const Groups = () => {
  return (
    
    <div>
 <Sidebar/>
 <Header/>
        {/* section-17 */}
        
        <div className='section-17'>
            <div className='container'>
                <div className='row'>
                <div className="col-lg-6 col-md-6 col-sm-12 mt-5">
                    <h3>Groups</h3>
                    <p style={{fontWeight:"600"}}>View and export the groups Created</p>
                    <input type="text" class="form-control w-50 w-md-50" placeholder="Search by Name (alt + K cmd+k)" aria-label="Username" aria-describedby="addon-wrapping"/>
                   
                  <button style={{marginTop:"1rem",width:"5rem", backgroundColor:"gray", border:"none", borderRadius:"3px",height:"2rem"}}>Export <i class="fa-solid fa-circle-exclamation"></i></button>
                    </div>
                    <div className="col-lg-6 col-md-6 col-sm-12 d-flex flex-column align-items-lg-end align-items-md-end align-items-sm-start mt-sm-3">
                    <button type="button" className="btn  btn-success">+ Create Group</button>
                    <button type="button" className="btn btn-secondary btn-sm">Filter By Date</button>
                    <div class="dropdown">
  <button className="btn btn-secondary  btn-sm dropdown-toggle" type="button" data-bs-toggle="dropdown" aria-expanded="false" style={{marginTop:"14px"}}>
   Select Columns
  </button>
  <ul class="dropdown-menu">
    <li><button className="dropdown-item" type="button">Action</button></li>
    <li><button className="dropdown-item" type="button">Another action</button></li>
    <li><button className="dropdown-item" type="button">Something else here</button></li>
  </ul>
</div>

                    
                    </div>
                   
                    <div className='container-fluid ms-3 mt-5' style={{height: "7rem", backgroundColor: "lightblue", width:"98%"}}>
                      </div>
                   <h5 className='text-center mt-5'> No result found</h5>

                </div>
            </div>

        </div>

        







    </div>
  
  
  )
}

export default Groups;