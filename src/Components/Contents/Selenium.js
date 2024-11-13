import React from 'react';
import { Link, useNavigate } from 'react-router-dom';
import { Navigate } from 'react-router-dom';

const Selenium = () => {

    const navigate = useNavigate()
    const dashboard = () => {
        navigate('/')
    }

    return (
        <div>
            <nav className="navbar navbar-expand-lg bg-body-tertiary" style={{ width: '100%' }}>
                <div className="container-fluid">
                    <i className="fa-solid fa-backward ms-1" onClick={dashboard} style={{ cursor: "pointer" }}></i>
                    <button
                        className="navbar-toggler"
                        type="button"
                        data-bs-toggle="collapse"
                        data-bs-target="#navbarNav"
                        aria-controls="navbarNav"
                        aria-expanded="false"
                        aria-label="Toggle navigation"
                    >
                        <span className="navbar-toggler-icon"></span>
                    </button>
                    <div className="collapse navbar-collapse" id="navbarNav">
                        <ul className="navbar-nav"></ul>
                        <div class="dropdown ms-auto">
                            <a class="btn btn-outline-secondary dropdown-toggle" href="#" role="button" data-bs-toggle="dropdown" aria-expanded="false">
                                <img style={{ height: "1rem", mixBlendMode: "multiply", cursor: "pointer" }} src='https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTcm66V7-xxJIpJdZtCSeLO_5VGsJp8jcAhjA&s' /> 1 Admin
                            </a>

                            <ul class="dropdown-menu">
                                <li><a class="dropdown-item" href="#">Action</a></li>
                                <li><a class="dropdown-item" href="#">Another action</a></li>
                                <li><a class="dropdown-item" href="#">Something else here</a></li>
                            </ul>
                        </div>


                    </div>
                </div>
            </nav>
            {/* section-3 */}
            <div className="section-3" style={{ backgroundColor: "white", }}>
                <div className="container">
                    <div className="row">
                        <div className="col-lg-12 col-md-6 col-sm-6">
                            {/* Button with left-aligned text */}

                            <div className="d-flex flex-column flex-md-row align-items-md-center mt-5">
                                <button
                                    className="btn btn-outline-primary mt-md-0 ms-md-3"
                                    type="submit"
                                >
                                    Published
                                </button>
                                <button
                                    className="btn btn-outline-primary mt-3 mt-md-0 ms-md-3"
                                    type="button"
                                >
                                    Encrypted
                                </button>
                            </div>
                        </div>



                        <div className='col-lg-9 col-md-6 col-sm-6'>
                            <h2 className='ms-3'>Selenium With Python</h2>
                        </div>
                        <div className='col-lg-3 col-md-6 col-sm-6'>
                            <div className="d-flex flex-column flex-md-row align-items-md-end  mt-3 ms-5">
                                <button
                                    class="btn btn-outline-secondary  mt-md-0 ms-md-5"
                                    type="submit"
                                >
                                    Settings
                                </button>
                                <button
                                    class="btn btn-outline-secondary  mt-md-0 ms-md-3"
                                    type="button"
                                >
                                    Reorder
                                </button>
                            </div>
                        </div>


                        <div className='col-lg-8 col-md-6 col-sm-6 mt-3'>
                            <div className="d-flex flex-column flex-md-row align-items-md-center">
                                <input
                                    type="text"
                                    className="form-control w-auto ms-3"
                                    placeholder="Search Lessons"
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
                       <div className="col-lg-4 col-md-6 col-sm-6 mt-4 d-flex flex-column flex-md-row ms-auto">
                       <p style={{fontSize:"12px"}} className="fw-bold"><i class="fa-solid fa-eye-slash"></i> 0 Hidden Lessons</p>
                       <p style={{fontSize:"12px"}} className="fw-bold"><i class="fas fa-book"></i> 17 Lessons</p>
                       <p style={{fontSize:"12px"}} className="fw-bold"><i class="fa-solid fa-circle-question"></i> 10 Quizzes</p>
                       <p  style={{fontSize:"12px"}} className="fw-bold"><i class="fa-solid fa-clock"></i> 16 hrs 39mins 9sec</p>

  
                      </div>

                                </div>

                                <div class="accordion accordion-flush" id="accordionFlushExample">
                                <div class="accordion-item">
  <h2 class="accordion-header border">
    <button class="accordion-button collapsed" type="button" data-bs-toggle="collapse" data-bs-target="#flush-collapseOne" aria-expanded="false" aria-controls="flush-collapseOne">
     
      <div class="d-flex justify-content-between w-100">
        <span className='fw-bold'> 1 Introduction Class </span>
        <span className='fw-bold'> 6Lessons .0 Quizzes...
        <span className='fs-4 ms-1'>&#8595;</span> 
        <span className='fs-4 ms-1'>&#10515;</span></span>
      </div>
    </button>
  </h2>
  <div id="flush-collapseOne" class="accordion-collapse collapse" aria-labelledby="flush-headingOne">
    <div class="accordion-body">
      1.Content goes here.
    </div>
    <div class="accordion-body">
      2.Content goes here.
    </div>
    <div class="accordion-body">
      3.Content goes here.
    </div>
    <div class="accordion-body">
      4.Content goes here.
    </div>
    <div class="accordion-body">
      5.Content goes here.
    </div>
  </div>
    <div id="flush-collapseOne" class="accordion-collapse collapse" data-bs-parent="#accordionFlushExample">
      <div class="accordion-body">6.Placeholder content for this accordion, which is intended to demonstrate the <code>.accordion-flush</code> class. This is the first item's accordion body.</div>
    </div>
  </div>



  <div class="accordion-item">
    <h2 class="accordion-header border">
      <button class="accordion-button collapsed" type="button" data-bs-toggle="collapse" data-bs-target="#flush-collapseTwo" aria-expanded="false" aria-controls="flush-collapseTwo">
      <div class="d-flex justify-content-between w-100">
        <span className='fw-bold'> 2 Data Types and Conditional Statements</span>
        <span className='fw-bold'> 1Lesson .1 Quiz...
        <span className='ms-1'>&#8645;</span> 
        <span className='fs-4 ms-1'>&#10515;</span></span>
          
      </div>
      </button>
    </h2>
    <div id="flush-collapseTwo" class="accordion-collapse collapse" data-bs-parent="#accordionFlushExample">
      <div class="accordion-body">Placeholder content for this accordion, which is intended to demonstrate the <code>.accordion-flush</code> class. This is the second item's accordion body. Let's imagine this being filled with some actual content.</div>
    </div>
  </div>
  <div class="accordion-item">
    <h2 class="accordion-header border">
      <button class="accordion-button collapsed" type="button" data-bs-toggle="collapse" data-bs-target="#flush-collapseThree" aria-expanded="false" aria-controls="flush-collapseThree">
      <div class="d-flex justify-content-between w-100">
        <span className='fw-bold'> 3 String Class and Conditional Statements </span>
        <span className='fw-bold'> 1Lesson .1 Quiz...
        <span className='ms-1'>&#8645;</span> 
        <span className='fs-4 ms-1'>&#10515;</span></span>
      </div>
      </button>
    </h2>
    <div id="flush-collapseThree" class="accordion-collapse collapse" data-bs-parent="#accordionFlushExample">
      <div class="accordion-body">Placeholder content for this accordion, which is intended to demonstrate the <code>.accordion-flush</code> class. This is the third item's accordion body. Nothing more exciting happening here in terms of content, but just filling up the space to make it look, at least at first glance, a bit more representative of how this would look in a real-world application.</div>
    </div>
  </div>

  <div class="accordion-item">
    <h2 class="accordion-header border">
      <button class="accordion-button collapsed" type="button" data-bs-toggle="collapse" data-bs-target="#flush-collapseFour" aria-expanded="false" aria-controls="flush-collapseThree">
      <div class="d-flex justify-content-between w-100">
        <span className='fw-bold'> 4 Loops In Python</span>
        <span className='fw-bold'> 1Lesson .0 Quizzes...
        <span className='ms-1'>&#8645;</span> 
        <span className='fs-4 ms-1'>&#10515;</span></span>
      </div>
      </button>
    </h2>
    <div id="flush-collapseFour" class="accordion-collapse collapse" data-bs-parent="#accordionFlushExample">
      <div class="accordion-body">Placeholder content for this accordion, which is intended to demonstrate the <code>.accordion-flush</code> class. This is the third item's accordion body. Nothing more exciting happening here in terms of content, but just filling up the space to make it look, at least at first glance, a bit more representative of how this would look in a real-world application.</div>
    </div>
  </div>
  <div class="accordion-item">
    <h2 class="accordion-header border">
      <button class="accordion-button collapsed" type="button" data-bs-toggle="collapse" data-bs-target="#flush-collapseFive" aria-expanded="false" aria-controls="flush-collapseThree">
      <div class="d-flex justify-content-between w-100">
        <span className='fw-bold'> 5 List and Tuple In Python</span>
        <span className='fw-bold'> 1Lesson .1 Quiz...
        <span className='ms-1'>&#8645;</span> 
        <span className='fs-4 ms-1'>&#10515;</span></span>
      </div>
      </button>
    </h2>
    <div id="flush-collapseFive" class="accordion-collapse collapse" data-bs-parent="#accordionFlushExample">
      <div class="accordion-body">Placeholder content for this accordion, which is intended to demonstrate the <code>.accordion-flush</code> class. This is the third item's accordion body. Nothing more exciting happening here in terms of content, but just filling up the space to make it look, at least at first glance, a bit more representative of how this would look in a real-world application.</div>
    </div>
  </div>
  <div class="accordion-item">
    <h2 class="accordion-header border">
      <button class="accordion-button collapsed" type="button" data-bs-toggle="collapse" data-bs-target="#flush-collapseSix" aria-expanded="false" aria-controls="flush-collapseThree">
      <div class="d-flex justify-content-between w-100">
        <span className='fw-bold'> 6 Breakout Session 1</span>
        <span className='fw-bold'> 1Lesson .0 Quizzes...
        <span className='ms-1'>&#8645;</span> 
        <span className='fs-4 ms-1'>&#10515;</span></span>
      </div>
      </button>
    </h2>
    <div id="flush-collapseSix" class="accordion-collapse collapse" data-bs-parent="#accordionFlushExample">
      <div class="accordion-body">Placeholder content for this accordion, which is intended to demonstrate the <code>.accordion-flush</code> class. This is the third item's accordion body. Nothing more exciting happening here in terms of content, but just filling up the space to make it look, at least at first glance, a bit more representative of how this would look in a real-world application.</div>
    </div>
  </div>
  <div class="accordion-item">
    <h2 class="accordion-header border">
      <button class="accordion-button collapsed" type="button" data-bs-toggle="collapse" data-bs-target="#flush-collapseSeven" aria-expanded="false" aria-controls="flush-collapseThree">
      <div class="d-flex justify-content-between w-100">
        <span className='fw-bold'> 7 Dictionary in Python</span>
        <span className='fw-bold'> 1Lesson .0 Quiz...
        <span className='ms-1'>&#8645;</span> 
        <span className='fs-4 ms-1'>&#10515;</span></span>
      </div>
      </button>
    </h2>
    <div id="flush-collapseSeven" class="accordion-collapse collapse" data-bs-parent="#accordionFlushExample">
      <div class="accordion-body">Placeholder content for this accordion, which is intended to demonstrate the <code>.accordion-flush</code> class. This is the third item's accordion body. Nothing more exciting happening here in terms of content, but just filling up the space to make it look, at least at first glance, a bit more representative of how this would look in a real-world application.</div>
    </div>
  </div>
  <div class="accordion-item">
    <h2 class="accordion-header border">
      <button class="accordion-button collapsed" type="button" data-bs-toggle="collapse" data-bs-target="#flush-collapseEight" aria-expanded="false" aria-controls="flush-collapseThree">
      <div class="d-flex justify-content-between w-100">
        <span className='fw-bold'> 8 Functions, Arbitrary Arguments , Arbitrary Keywords Arguments</span>
        <span className='fw-bold'> 1Lesson .3 Quiz...
        <span className='ms-1'>&#8645;</span> 
        <span className='fs-4 ms-1'>&#10515;</span></span>
      </div>
      </button>
    </h2>
    <div id="flush-collapseEight" class="accordion-collapse collapse" data-bs-parent="#accordionFlushExample">
      <div class="accordion-body">Placeholder content for this accordion, which is intended to demonstrate the <code>.accordion-flush</code> class. This is the third item's accordion body. Nothing more exciting happening here in terms of content, but just filling up the space to make it look, at least at first glance, a bit more representative of how this would look in a real-world application.</div>
    </div>
  </div>
  <div class="accordion-item">
    <h2 class="accordion-header border">
      <button class="accordion-button collapsed" type="button" data-bs-toggle="collapse" data-bs-target="#flush-collapseNine" aria-expanded="false" aria-controls="flush-collapseThree">
      <div class="d-flex justify-content-between w-100">
        <span className='fw-bold'> 9 Getting Started With OOPS</span>
        <span className='fw-bold'> 1Lesson .2 Quizzes...
        <span className='ms-1'>&#8645;</span> 
        <span className='fs-4 ms-1'>&#10515;</span></span>
      </div>
      </button>
    </h2>
    <div id="flush-collapseNine" class="accordion-collapse collapse" data-bs-parent="#accordionFlushExample">
      <div class="accordion-body">Placeholder content for this accordion, which is intended to demonstrate the <code>.accordion-flush</code> class. This is the third item's accordion body. Nothing more exciting happening here in terms of content, but just filling up the space to make it look, at least at first glance, a bit more representative of how this would look in a real-world application.</div>
    </div>
  </div>
  <div class="accordion-item">
    <h2 class="accordion-header border">
      <button class="accordion-button collapsed" type="button" data-bs-toggle="collapse" data-bs-target="#flush-collapseTen" aria-expanded="false" aria-controls="flush-collapseThree">
      <div class="d-flex justify-content-between w-100">
        <span className='fw-bold'> 10 Inheritance In Python</span>
        <span className='fw-bold'> 1Lesson .0 Quizzes...
        <span className='ms-1'>&#8645;</span> 
        <span className='fs-4 ms-1'>&#10515;</span></span>
      </div>
      </button>
    </h2>
    <div id="flush-collapseTen" class="accordion-collapse collapse" data-bs-parent="#accordionFlushExample">
      <div class="accordion-body">Placeholder content for this accordion, which is intended to demonstrate the <code>.accordion-flush</code> class. This is the third item's accordion body. Nothing more exciting happening here in terms of content, but just filling up the space to make it look, at least at first glance, a bit more representative of how this would look in a real-world application.</div>
    </div>
  </div>


</div>
                                   </div>
                            </div>
                    </div>
              
       
    )

}

export default Selenium;