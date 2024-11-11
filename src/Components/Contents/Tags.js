import React from 'react';
import Sidebar from '../Sidebar';
import Header from './Header';

const Tags = () => {
  return (
    <div>
      <Sidebar />
      <Header />
      {/* section-17 */}
      <div className='section-17'>
        <div className='container'>
          <div className='row'>
            <div className="col-lg-6 col-md-6 col-sm-12 mt-5">
              <h3>Tags</h3>
              <p style={{ fontWeight: "600" }}>
                Create tags and use them to classify newsfeed posts and questions.
              </p>
              <input 
                type="text" 
                className="form-control w-100 w-md-50" 
                placeholder="Search by Title(alt + K cmd+k)" 
                aria-label="Username" 
                aria-describedby="addon-wrapping" 
              />
              <button 
                style={{
                  marginTop: "1rem",
                  width: "auto",
                  backgroundColor: "gray",
                  border: "none",
                  borderRadius: "3px",
                  height: "2rem"
                }}
              >
                Export <i className="fa-solid fa-circle-exclamation"></i>
              </button>
            </div>
            <div className="col-lg-6 col-md-6 col-sm-12 d-flex flex-column align-items-lg-end align-items-md-end align-items-sm-start mt-sm-3">
              <button type="button" className="btn btn-success">+ Create Tag</button>

              <div className="dropdown mt-5">
                <button 
                  className="btn btn-secondary btn-sm dropdown-toggle" 
                  type="button" 
                  data-bs-toggle="dropdown" 
                  aria-expanded="false" 
                  style={{ marginTop: "14px" }}
                >
                  Select Columns
                </button>
                <ul className="dropdown-menu">
                  <li><button className="dropdown-item" type="button">Action</button></li>
                  <li><button className="dropdown-item" type="button">Another action</button></li>
                  <li><button className="dropdown-item" type="button">Something else here</button></li>
                </ul>
              </div>
            </div>
          </div>

          <div className="table-responsive mt-5">
            <table className="table table-bordered table-striped">
              <thead>
                <tr>
                  <th>Name</th>
                  <th>Tags Visibility</th>
                  <th>Contents</th>
                  <th>Status</th>
                </tr>
              </thead>
              <tbody>
                <tr>
                  <td>Selenium With Python</td>
                  <td>Public</td>
                  <td>1</td>
                  <td>
                    <button style={{ marginLeft: "-2px" }} type="button" className="btn btn-outline-success">Published</button>
                  </td>
                </tr> 
              </tbody>
            </table>
          </div>

          <nav aria-label="...">
  <ul class="pagination mt-5" style={{float:"right"}}>
    <li class="page-item disabled">
      <span class="page-link">Previous</span>
    </li>
    <li class="page-item"><a class="page-link" href="#">1</a></li>
    <li class="page-item active" aria-current="page">
      <span class="page-link">2</span>
    </li>
    <li class="page-item"><a class="page-link" href="#">3</a></li>
    <li class="page-item">
      <a class="page-link" href="#">Next</a>
    </li>
  </ul>
</nav>

        </div>
      </div>
    </div>
  )
}

export default Tags;
