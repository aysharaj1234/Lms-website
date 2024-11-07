import React from 'react';
import Sidebar from '../Sidebar';
import Header from './Header';

const SignUp = () => {
  return (
    <div >
      <Sidebar/>
      <Header/>
      {/* section-12 */}
    <div className='section-12'>
    <div className='container'>
      <div className='row'>
        <div className='col-12 col-lg-6 mt-4'> 
          <h2>Sign up Settings</h2>
          <p>Configure your learner sign up flow.</p>
        </div>
        <div className='col-12 col-lg-6'> 
        <div className='btcc'>  
        <button type="button" className="btn btn-secondary ms-5">Verification</button>
      </div>
      </div>
    </div>
    <hr/>
  
  </div>
</div>
{/* <section-13 */}
<div className='section-13'>
    <div className='container'>
      <div className='row'>
        <div className='col-12 col-lg-6'> 
        <input className="form-check-input ms-3" type="checkbox" value="" id="flexCheckChecked" checked/>
        <label className="form-check-label ms-2" for="flexCheckChecked">
       Email $ Social Sign Ups
  </label>
  <p>you can allow your learners to sign up using their email id, Google, facebook and Apple accounts.</p>
  <div className="card w-75 mb-3">
  <div className="card-body" style={{border:"1px solid lightgray"}}>
    <h5 className="card-title"><div class="form-check">
  <input className="form-check-input" type="checkbox" value="" id="flexCheckChecked" checked/>
  <label className="form-check-label" for="flexCheckChecked">
 Email
  </label>
</div></h5>
<h5 className="card-title"><div class="form-check mt-4">
  <input className="form-check-input" type="checkbox" value="" id="flexCheckChecked"/>
  <label className="form-check-label" for="flexCheckChecked">
Google
  </label>
</div></h5>
<h5 className="card-title"><div class="form-check mt-4">
  <input className="form-check-input" type="checkbox" value="" id="flexCheckChecked"/>
  <label className="form-check-label " for="flexCheckChecked">
facebook
  </label>
</div></h5>

<h5 className="card-title"><div class="form-check mt-4">
  <input className="form-check-input" type="checkbox" value="" id="flexCheckChecked"/>
  <label className="form-check-label" for="flexCheckChecked">
Apple
  </label>
</div></h5>

  </div>
</div>

        </div>
        <div className='col-12 col-lg-6'> 
        <div className="form-check">
  <input className="form-check-input" type="checkbox" value="" id="flexCheckDefault"/>
  <label className="form-check-label" for="flexCheckDefault">
   User Name
  </label>
</div>
<p className='param'> you can allow your learners to sign up using user name</p>
<div className='btc'>  
<button type="button" className="btn btn-success ms-5">Save</button>
</div>

     
          </div>
       <h5>Note: Social sign ups can be Configured sole or can be added with Email type only.</h5>
    </div>
  </div>
</div>
      </div>
 
  )
}

export default SignUp;
