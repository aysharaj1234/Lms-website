import React from 'react';
import { useState } from 'react';
import Sidebar from '../Sidebar';
import Header from './Header';
import { Modal, Button } from "react-bootstrap";
import 'bootstrap/dist/css/bootstrap.min.css';
import { useNavigate } from 'react-router-dom';



const CourseCard = ({ iframeSrc, title, lessons, duration, price, originalPrice, discount, status }) => {
 
 

  return (
    <div className="col-lg-3 mb-4">
      <div className="card border">
        <iframe
          src={iframeSrc}
          title={title}
          style={{ border: 'none' }}
          allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
        ></iframe>
        <div className="card-body">
          <h5 className="card-title text-start fs-6">{title}</h5>
          <p className="card-text text-start" style={{ fontSize: '12px' }}>
            {lessons} . {duration}
          </p>
          <p className="card-text text-start" style={{ fontSize: '12px' }}>
            <i className="fa-solid fa-indian-rupee-sign"></i> {price}{' '}
            {originalPrice && (
              <s>
                <i className="fa-solid fa-indian-rupee-sign"></i> {originalPrice}
              </s>
            )}
            {discount && <span style={{ color: 'green' }}>{discount}</span>}
          </p>
        </div>
        <div className="card-footer text-start">
          <small className="text-body-secondary">
            <button className="btn btn-sm" style={{ backgroundColor: status === 'Live' ? 'gray' : 'white', border: '1px solid lightgray' }}>
              {status}
            </button>
            <i className="fa-solid fa-circle-exclamation ms-auto"></i>
          </small>
        </div>
      </div>
    </div>
  );
};

const Courses = () => {

  const [show, setShow] = useState(false);

  const handleClose = () => setShow(false);
  const handleShow = () => setShow(true);

  const navigate = useNavigate()
  const handler = () =>{
    navigate('/Selenium')
  
  }
  
  return (
    <div>
      <Sidebar />
      <Header />
      <section className="section-19">
        <div className="container">
          <div className="row">
            <div className="col-lg-6 col-md-6 col-sm-12 mt-5">
              <h3>Courses</h3>
              <p>Welcome to your course dashboard.</p>
              <div className="d-flex flex-column flex-md-row align-items-md-center">
                <input
                  type="text"
                  className="form-control w-50"
                  placeholder="Search by Title (alt + K cmd+k)"
                  aria-label="Search"
                />
                <button className="btn btn-primary mt-3 mt-md-0 ms-md-3">Search</button>
                <button className="btn btn-outline-primary mt-3 mt-md-0 ms-md-3">Add Filter</button>
              </div>
           
<div className='col-lg-12 col-md-6 col-sm-6'>
<div className="d-flex flex-column flex-md-row">
 <div className='btu'>
    <div class="dropdown responsive-dropdown">
  <button class="btn btn-outline-secondary dropdown-toggle" type="button" id="dropdownMenuButton" data-bs-toggle="dropdown" aria-expanded="false">
  Staus is Selected a value
  </button>
  <ul class="dropdown-menu p-2" aria-labelledby="dropdownMenuButton">
    <li>
      <input type="text" class="form-control mb-2" placeholder="Search..." aria-label="Search"/>
    </li>
    <li><a class="dropdown-item fw-bold" href="#">Unpublished</a></li>
    <li><a class="dropdown-item fw-bold" href="#">Published</a></li>
    <li><a class="dropdown-item fw-bold" href="#">Coming Soon</a></li>
    <li><a class="dropdown-item fw-bold" href="#">Scheduled</a></li>
  </ul>
</div>
<div>
</div>

</div>
<button style={{marginLeft:"-13rem"}} type="button" class="btn btn-outline-secondary">Apply Filter</button>

 </div>
 </div>
 </div>
 

          
 <div className="col-lg-6 col-md-6 col-sm-12">
  <button
    type="button"
    className="btn btn-secondary"
    
  >
   Reorder
  </button>



          {/* modal */}   
<div class="modal fade"  id="exampleModalToggle" aria-hidden="true" aria-labelledby="exampleModalToggleLabel" tabindex="-1">
  <div class="modal-dialog">
    <div class="modal-content">
      <div class="modal-header">
        <button type="button" class="btn-close" data-bs-dismiss="modal" aria-label="Close"></button>
      </div>

      <div className="modal-body text-center mt-4 mt-sm-5 mt-md-5" style={{ padding: "1rem" }}>
  <nav aria-label="breadcrumb">
    <ol class="breadcrumb justify-content-center me-5">
      <li class="breadcrumb-item"><a href="#">Course</a></li>
      <li class="breadcrumb-item" aria-current="page">Create Course</li>
    </ol>
  </nav>

  <h2>Create Course</h2>
  <h5>Start creating a new course</h5>
  <h4 className='mt-3'>Title*</h4>

  <div class="input-group input-group-sm mb-3 w-50 mx-auto">
    <input type="text" class="form-control fw-bold"  placeholder="Enter Course Title" aria-label="Sizing example input" aria-describedby="inputGroup-sizing-sm"/>

  </div>
  <h4 className='mt-3'>Price</h4>
  <div class="input-group input-group-sm mb-3 w-50 mx-auto">
    <input type="text" class="form-control fw-bold"  placeholder="Price" aria-label="Sizing example input" aria-describedby="inputGroup-sizing-sm"/>
  </div>
  <div class="form-check d-flex justify-content-center align-items-center" style={{marginLeft:"-1rem"}}>
  <input class="form-check-input me-2" type="checkbox" value="" id="flexCheckDefault"/>
  <label class="form-check-label" for="flexCheckDefault">
    Make this a free course
  </label>
</div>
<h4 className='mt-3 mt-3'>Content Security</h4>

<div class="form-check d-flex justify-content-center align-items-center mt-4" style={{marginLeft:"-1rem"}}>
  <input class="form-check-input me-2" type="radio" name="exampleRadios" id="exampleRadios1" value="option1" checked/>
  <label class="form-check-label" for="exampleRadios1">
    Encryption
  </label>
</div>
<h5 class="text-center" style={{fontSize:"14px"}}>
  Secure content will be encrypted using a DRM system and will be protected against piracy.
</h5>


<div class="form-check d-flex justify-content-center align-items-center mt-4 " style={{marginLeft:"13px"}}>
  <input class="form-check-input me-2" type="radio" name="exampleRadios" id="exampleRadios1" value="option1" checked/>
  <label class="form-check-label" for="exampleRadios1">
   No Encryption
  </label>
</div>
<h5 class="text-center"  style={{fontSize:"14px"}}>
  Content will not be encrypted. Unsecure content can be easily downloaded and pirated.
</h5>


</div>


      <div class="modal-footer col-lg-12 col-md-6 col-sm-6">
      <div class="btn-toolbar" role="toolbar" aria-label="Toolbar with button groups">
  <div class="btn-group" role="group" aria-label="First group">
  <div class="d-flex justify-content-md-end justify-content-center">
  <button id="createButton" type="button" class="btn btn-success">Create</button>
</div>

  </div>
  <div class="btn-group me-2" role="group" aria-label="Second group">
    <button type="button" class="btn btn-secondary">Cancel</button>
  </div>
  </div>
       
      </div>
    </div>
  </div>
</div>

<button
  type="button"
  className="btn btn-primary mb-10 responsive-create-btn"
  data-bs-target="#exampleModalToggle"
  data-bs-toggle="modal"
>
  + Create
</button>




        
<div className="btn-group">
  <button className="btn btn-secondary mt-5 responsive-filter-btn">
    Filter by published date
  </button>
</div>
            </div>
          </div>
        

          <div className="container mt-5 border">
            <div className="row">
              <div className="col-lg-3 fw-bold">Total Course <h3>1</h3></div>
              <div className="col-lg-3 fw-bold">Encrypted Course <h3>1</h3></div>
              <div className="col-lg-3 fw-bold">Unencrypted Course <h3>0</h3></div>
              <div className="col-lg-3 fw-bold">Encrypted Course Limit <h3>100</h3></div>
            </div>
          </div>
          <div className='container'>
          <div class="row mt-5 my-5">
            <div class="col-lg-3">
              <div class="card  border" style={{ borderRadius: "4px" }}>
                <iframe  src="https://www.youtube.com/embed/XI5_nsClCYI" title="Selenium Tutorial for Beginners using Python | Selenium for Web Scraping (With Project)" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share" referrerpolicy="strict-origin-when-cross-origin"></iframe>
                <div class="card-body">
                <h5 class="card-title text-start fs-6" style={{cursor:'pointer'}} onClick={handler}>Selenium With Python</h5>
                  <p  style={{fontSize:"12px"}} class="card-text text-start">27 Lessons .16 hrs 39mins 9secs</p>
                  <p  style={{fontSize:"12px"}} class="card-text text-start"><i class="fa-solid fa-indian-rupee-sign"></i> 15,000 <s><i class="fa-solid fa-indian-rupee-sign"></i>  25,000</s>   <span style={{color:"green"}}>40%off</span> <span  style={{fontSize:"11px"}} className='border'>31dec 2034</span></p>
                </div>
                <div class="card-footer text-start">
          <small class="text-body-secondary">
          <button style={{backgroundColor:"white", border:"1px solid lightgray",borderRadius:"2px"}}>Live Class</button>
          <button className='ms-2' style={{backgroundColor:"white", border:"1px solid lightgray",borderRadius:"2px"}}>Published</button>
          <i  style={{marginLeft:"3rem"}}class="fa-solid fa-circle-exclamation"></i>
          </small>
          </div>
              </div>
            </div>
            <div class="col-lg-3">
              <div class="card border">
              <iframe  src="https://www.youtube.com/embed/oVNbaBlrhbo?list=PLhW3qG5bs-L8xPrBwDv66cTMlFNeUPdJx" title="REST Assured Beginner Tutorial 1 | Getting Started | What is Rest Assured" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share" referrerpolicy="strict-origin-when-cross-origin"></iframe>
                <div class="card-body">
                  <h5 class="card-title text-start fs-6">Rest Assured Course</h5>
                  <p  style={{fontSize:"12px"}} class="card-text text-start">18 Lessons .38 hrs 29mins 56secs</p>
                  <p  style={{fontSize:"12px"}} class="card-text text-start"><i class="fa-solid fa-indian-rupee-sign"></i> 3,999    <span  style={{fontSize:"11px", marginLeft:"6rem"}} className='border'>31days</span></p>
                
                </div>
                <div class="card-footer text-start">
          <small class="text-body-secondary">
          <button style={{backgroundColor:"white", border:"1px solid lightgray",borderRadius:"2px"}}>Unpublished</button>
         
          <i  style={{marginLeft:"6.3rem"}}class="fa-solid fa-circle-exclamation"></i>
          </small>
          </div>
              </div>
            </div>
            <div class="col-lg-3">
              <div class="card border">
              <iframe  src="https://www.youtube.com/embed/iMfsG4c1A3U?list=PL6iUkDSEH9StfnjSTCsASTZbivezT18mW" title="Introduction (1) / Postman Crash Course for beginners" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share" referrerpolicy="strict-origin-when-cross-origin"></iframe>
                <div class="card-body">
                  <h5 class="card-title text-start fs-6">postman crash course</h5>
                  <p  style={{fontSize:"12px"}} class="card-text text-start">12 Lessons .25 hrs 31mins 42secs</p>
                  <p  style={{fontSize:"12px"}} class="card-text text-start"><i class="fa-solid fa-indian-rupee-sign"></i> 999    <span  style={{fontSize:"11px", marginLeft:"6rem"}} className='border'>31days</span></p>
                
                </div>
                <div class="card-footer text-start">
          <small class="text-body-secondary">
          <button style={{backgroundColor:"white", border:"1px solid lightgray",borderRadius:"2px"}}>Unpublished</button>
         
          <i  style={{marginLeft:"6.3rem"}}class="fa-solid fa-circle-exclamation"></i>
          </small>
          </div>
              </div>
            </div>
            <div class="col-lg-3">
              <div class="card border">
              <iframe  src="https://www.youtube.com/embed/iMfsG4c1A3U?list=PL6iUkDSEH9StfnjSTCsASTZbivezT18mW" title="Introduction (1) / Postman Crash Course for beginners" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share" referrerpolicy="strict-origin-when-cross-origin"></iframe>
                <div class="card-body">
                  <h5 class="card-title text-start fs-6">Demo Course Newsfeed</h5>
                  <p  style={{fontSize:"12px"}} class="card-text text-start">1 Lesson </p>
                  <p  style={{fontSize:"12px"}} class="card-text text-start">Free  <span  style={{fontSize:"11px", marginLeft:"6rem"}} className='border'>31days</span></p>
                
                </div>
                <div class="card-footer text-start">
          <small class="text-body-secondary">
          <button style={{backgroundColor:"white", border:"1px solid lightgray",borderRadius:"2px"}}>Unpublished</button>
         
          <i  style={{marginLeft:"6.3rem"}}class="fa-solid fa-circle-exclamation"></i>
          </small>
          </div>
              </div>
            </div>
            
          
            </div>
          </div>
        </div>
      </section>
    </div>
  );
};

export default Courses;
