import React from 'react';
import { useNavigate } from 'react-router-dom';

const Resource = () => {
  const navigate = useNavigate();

  const dashboard = () => {
    navigate('/');
  };

  return (
    <div>
      {/* Navbar */}
      <nav className="navbar navbar-expand-lg navbar-light bg-light">
        <div className="container-fluid">
          <i 
            className="fa-solid fa-backward ms-1" 
            onClick={dashboard} 
            style={{ cursor: "pointer", fontSize: '1.5rem' }}
          ></i>
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
            <ul className="navbar-nav">
              {/* Add navbar items here */}
            </ul>
          </div>
        </div>
      </nav>

      {/* Section 3 */}
      <div className="section-3 py-4">
        <div className="container">
          <div className="row">
            <div className="col-lg-12 col-md-6 col-sm-6 mb-3">
              <h2 className="text-center">Resource Usage</h2>

              <div className="container mt-5 border rounded-3 p-4" style={{ maxWidth: '100%'}}>
              <h4 className='fw-bold'>Resource usage KPI  <i class="fa-solid fa-circle-question"></i> </h4>
                <div className="row">
               
                  {/* KPI Cards */}
                  <div className="col-lg-2 col-md-4 col-sm-6 mb-3 mt-2">
                    <div className="kpi-card">
                      <div className="fw-bold" style={{ fontSize: '14px' }}>Bandwidth (GB)</div>
                      <h3 className="ms-5">_</h3>
                    </div>
                  </div>

                  <div className="col-lg-2 col-md-4 col-sm-6 mb-3">
                    <div className="kpi-card">
                      <div className="fw-bold" style={{ fontSize: '14px' }}>Content Size (GB)</div>
                      <h3 className="ms-5">_</h3>
                    </div>
                  </div>

                  <div className="col-lg-2 col-md-4 col-sm-6 mb-3">
                    <div className="kpi-card">
                      <div className="fw-bold" style={{ fontSize: '14px' }}>Video Transcode Hrs</div>
                      <h3 className="ms-5">_</h3>
                    </div>
                  </div>

                  <div className="col-lg-2 col-md-4 col-sm-6 mb-3">
                    <div className="kpi-card">
                      <div className="fw-bold" style={{ fontSize: '14px' }}>DRM Token</div>
                      <h3 className="ms-5">_</h3>
                    </div>
                  </div>

                  <div className="col-lg-2 col-md-4 col-sm-6 mb-3">
                    <div className="kpi-card">
                      <div className="fw-bold" style={{ fontSize: '14px' }}>Active Users</div>
                      <h3 className="ms-5">18</h3>
                    </div>
                  </div>

                  <div className="col-lg-2 col-md-4 col-sm-6 mb-3">
                    <div className="kpi-card">
                      <div className="fw-bold" style={{ fontSize: '14px' }}>Test Taken</div>
                      <h3 className="ms-5">_</h3>
                    </div>
                  </div>
                </div>
              </div>

              <h5 className="mt-4 text-muted text-center" style={{ fontSize: '0.9rem' }}>
                <i className="fa-solid fa-circle-exclamation"></i> Data is taken from the past 1 year
              </h5>
          
              <div className="container mt-5 border rounded-3 p-4" style={{ Width: 'auto',height:"400px"}}>
                <div className='row'>
                  <div className='col-lg-6 col-sm-6 col-md-6'>
                  <h4>Bandwidth (GB)</h4>
                  </div>
                  <div className='col-lg-6 col-sm-6 col-md-6'>
                  <div class="dropdown">
  <button class="btn btn-secondary dropdown-toggle" type="button" data-bs-toggle="dropdown" aria-expanded="false">
  Days
  </button>
  <ul class="dropdown-menu">
    <li><a class="dropdown-item" href="#">Action</a></li>
    <li><a class="dropdown-item" href="#">Another action</a></li>
    <li><a class="dropdown-item" href="#">Something else here</a></li>
  </ul>
</div>
<button type="button" class="btn btn-outline-secondary">Reset</button>

<div className="">
  <img
    src="https://static.vecteezy.com/system/resources/previews/007/104/553/non_2x/search-no-result-not-found-concept-illustration-flat-design-eps10-modern-graphic-element-for-landing-page-empty-state-ui-infographic-icon-vector.jpg"
    alt="No results"
    className="no-results-img " style={{width:"40%",display:"block",right:"0",left:"0"}}
  />
  <h5 className="no-results-text">No Results Found</h5>
</div>



                  </div>
                </div>
                </div>

                <div className="container mt-5 border rounded-3 p-4" style={{ Width: 'auto',height:"400px"}}>
                <div className='row'>
                  <div className='col-lg-6 col-sm-6 col-md-6'>
                  <h4>Content Storage (GB)</h4>
                  </div>
                  <div className='col-lg-6 col-sm-6 col-md-6'>
                  <div class="dropdown">
  <button class="btn btn-secondary dropdown-toggle" type="button" data-bs-toggle="dropdown" aria-expanded="false">
  Days
  </button>
  <ul class="dropdown-menu">
    <li><a class="dropdown-item" href="#">Action</a></li>
    <li><a class="dropdown-item" href="#">Another action</a></li>
    <li><a class="dropdown-item" href="#">Something else here</a></li>
  </ul>
</div>
<button type="button" class="btn btn-outline-secondary">Reset</button>

<div className="">
  <img
    src="https://static.vecteezy.com/system/resources/previews/007/104/553/non_2x/search-no-result-not-found-concept-illustration-flat-design-eps10-modern-graphic-element-for-landing-page-empty-state-ui-infographic-icon-vector.jpg"
    alt="No results"
    className="no-results-img " style={{width:"40%",display:"block",right:"0",left:"0"}}
  />
  <h5 className="no-results-text">No Results Found</h5>
</div>



                  </div>
                </div>
                </div>
                <div className="container mt-5 border rounded-3 p-4" style={{ Width: 'auto',height:"400px"}}>
                <div className='row'>
                  <div className='col-lg-6 col-sm-6 col-md-6'>
                  <h4>Video Hours Transcoded (GB)</h4>
                  </div>
                  <div className='col-lg-6 col-sm-6 col-md-6'>
                  <div class="dropdown">
  <button class="btn btn-secondary dropdown-toggle" type="button" data-bs-toggle="dropdown" aria-expanded="false">
  Days
  </button>
  <ul class="dropdown-menu">
    <li><a class="dropdown-item" href="#">Action</a></li>
    <li><a class="dropdown-item" href="#">Another action</a></li>
    <li><a class="dropdown-item" href="#">Something else here</a></li>
  </ul>
</div>
<button type="button" class="btn btn-outline-secondary">Reset</button>

<div className="">
  <img
    src="https://static.vecteezy.com/system/resources/previews/007/104/553/non_2x/search-no-result-not-found-concept-illustration-flat-design-eps10-modern-graphic-element-for-landing-page-empty-state-ui-infographic-icon-vector.jpg"
    alt="No results"
    className="no-results-img " style={{width:"40%",display:"block",right:"0",left:"0"}}
  />
  <h5 className="no-results-text">No Results Found</h5>
</div>



                  </div>
                </div>
                </div>
                <div className="container mt-5 border rounded-3 p-4" style={{ Width: 'auto',height:"400px"}}>
                <div className='row'>
                  <div className='col-lg-6 col-sm-6 col-md-6'>
                  <h4>DRM Tokens (GB)</h4>
                  </div>
                  <div className='col-lg-6 col-sm-6 col-md-6'>
                  <div class="dropdown">
  <button class="btn btn-secondary dropdown-toggle" type="button" data-bs-toggle="dropdown" aria-expanded="false">
  Days
  </button>
  <ul class="dropdown-menu">
    <li><a class="dropdown-item" href="#">Action</a></li>
    <li><a class="dropdown-item" href="#">Another action</a></li>
    <li><a class="dropdown-item" href="#">Something else here</a></li>
  </ul>
</div>
<button type="button" class="btn btn-outline-secondary">Reset</button>

<div className="">
  <img
    src="https://static.vecteezy.com/system/resources/previews/007/104/553/non_2x/search-no-result-not-found-concept-illustration-flat-design-eps10-modern-graphic-element-for-landing-page-empty-state-ui-infographic-icon-vector.jpg"
    alt="No results"
    className="no-results-img " style={{width:"40%",display:"block",right:"0",left:"0"}}
  />
  <h5 className="no-results-text">No Results Found</h5>
</div>



                  </div>
                </div>
                </div>

                <div className="container mt-5 border rounded-3 p-4" style={{ Width: 'auto',height:"400px"}}>
                <div className='row'>
                  <div className='col-lg-6 col-sm-6 col-md-6'>
                  <h4>Active Users (GB)</h4>
                  </div>
                  <div className='col-lg-6 col-sm-6 col-md-6'>
                  <div class="dropdown">
  <button class="btn btn-secondary dropdown-toggle" type="button" data-bs-toggle="dropdown" aria-expanded="false">
  Days
  </button>
  <ul class="dropdown-menu">
    <li><a class="dropdown-item" href="#">Action</a></li>
    <li><a class="dropdown-item" href="#">Another action</a></li>
    <li><a class="dropdown-item" href="#">Something else here</a></li>
  </ul>
</div>
<button type="button" class="btn btn-outline-secondary">Reset</button>


<div className="">
  <img
    src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQtG6ecOLZP_APcNU-YDiHghPOeKuZAzsDDOQ&s"
    alt="No results"
    className="no-results-img" style={{width:"40%",display:"block",right:"0",left:"0",}}
  />
  <h5 className="no-results-text mt-2">No Results Found</h5>
</div>


                  </div>
                </div>
                </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Resource;  