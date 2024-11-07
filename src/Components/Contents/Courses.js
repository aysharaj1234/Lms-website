import React from 'react';
import Sidebar from '../Sidebar';
import Header from './Header';

const Courses = () => {
  return (
    <div>
       <Sidebar />
       <Header />
{/* section-19 */}
       <div className="section-19">
        <div className="container">
          <div className="row">
            <div className="col-lg-6 col-md-6 col-sm-12 mt-5">
              <h3>Courses</h3>
              <p>Welcome to your course dashboard.</p>
              <div className="d-flex flex-column flex-md-row align-items-md-center">
                <input
                  type="text"
                  className="form-control w-50 w-md-50"
                  placeholder="Search by Title (alt + K cmd+k)"
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

            <div className="col-lg-6 col-md-6 col-sm-12 mt-5">
              <div className="btn-group  custom-margin">
                <button
                  className="btn btn-secondary btn-sm dropdown-toggle"
                  type="button"
                  data-bs-toggle="dropdown"
                  aria-expanded="false"
                >
               Reorder
                </button>
                <ul className="dropdown-menu">
                  <li>
                    <a className="dropdown-item" href="#">
                      Action
                    </a>
                  </li>
                  <li>
                    <a className="dropdown-item" href="#">
                      Another action
                    </a>
                  </li>
                  <li>
                    <a className="dropdown-item" href="#">
                      Something else here
                    </a>
                  </li>
                </ul>
              </div>
              <div className='bts responsive-margin'>
              <button className="btn btn-primary btn-sm responsive-btn" style={{marginRight:"-1rem"}}>
Create
</button>

<button type="button" class="btn btn-secondary">Filter by published date</button>
              </div>

            </div>
          </div>
        </div>
  <div class="container mt-5 border" style={{height:"6rem", width:"auto",}}>
    <div className='row'>
      <div className='col-lg-3 mt-2 fw-bold'>
      Total  Course
      <h3 className='ms-5'>1</h3>
      </div>
      <div className='col-lg-3 mt-2 fw-bold'>
      Encrypted Course
      <h3 className='ms-5'>1</h3>
      </div>
      <div className='col-lg-3 mt-2 fw-bold'>
     UnEncrypted Course
     <h3 className='ms-5'>0</h3>
      </div>
      <div className='col-lg-3 mt-2 fw-bold'>
      Encrypted Course Limit
      <h3 className='ms-5'>100</h3>
      </div>
    </div>
  </div>


  <iframe style={{marginTop:"3rem"}} width="640" height="360" src="https://www.youtube.com/embed/t2_Q2BRzeEE?list=PLGjplNEQ1it8-0CmoljS5yeV-GlKSUEt0" title="Python Full Course❤️ | Variables &amp; Data Types | Lecture 1" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share" referrerpolicy="strict-origin-when-cross-origin" allowfullscreen></iframe>
      </div>
    </div>
  )
}

export default Courses;