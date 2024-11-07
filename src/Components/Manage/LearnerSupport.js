import React from 'react';
import Sidebar from '../Sidebar';
import Header from './Header';

const LearnerSupport = () => {
  return (
    <div>
             <Sidebar />
             <Header />
{/* section-24 */}
<div className='section-24'>
    <div className='container'>
        <div className='row'>
            <div className='col-lg-6 col-md-6 col-sm-6'>
            <ul class="nav nav-underline ms-3">
  <li className="nav-item">
    <a className="nav-link active" aria-current="page" href="#">Dashboard</a>
  </li>
  <li className="nav-item">
    <a className="nav-link" href="#">LearnerSupport</a>
  </li>
  </ul>
  <h3 className='ms-3 mt-5'>Learner Support</h3>
  <p className='fw-bold ms-3'>Learner's Support allows you to manage learner support request</p>
  </div>

  <div className='col-lg-6 col-md-6 col-sm-6'>
  <button type="button" class="btn btn-secondary btn-sm mt-5"> <i className="fa-solid fa-gear"></i> Settings</button>

            </div>
            <div className="card-group mt-5">
  <div className="card">
    <img src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSaaYWJ42RgCtuV9m802wAcvci975fR_JcuPg&s" class="card-img-top" alt="..."/>
    <div className="card-body">
      <h5 className="card-title">Learner Issue Report</h5>
      <p className="card-text">Seamlessly manages and resolve learner support request.</p>
      <p className="card-text"><small class="text-body-secondary">View</small></p>
    </div>
  </div>
  <div className="card">
    <img src="https://static.vecteezy.com/system/resources/previews/048/748/139/non_2x/teamwork-support-icons-vector.jpg" class="card-img-top" alt="..."/>
    <div className="card-body">
      <h5 className="card-title">Enterprise Support</h5>
      <p className="card-text">View and manage all type of tickets related to your school.</p>
      <p className="card-text"><small class="text-body-secondary">View</small></p>
    </div>
  </div>
  <div className="card">
    <img src="https://cdn-icons-png.flaticon.com/512/10595/10595761.png" class="card-img-top" alt="..."/>
    <div className="card-body">
      <h5 className="card-title">Video Troubleshoot Guide</h5>
      <p className="card-text">View and verify system configuration required for accessing the Video.</p>
      <p className="card-text"><small class="text-body-secondary">View</small></p>
    </div>
  </div>
</div>
           
        </div>
    </div>
</div>

        </div>
  )
}

export default LearnerSupport;
