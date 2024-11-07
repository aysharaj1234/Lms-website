import React from 'react';
import Sidebar from '../Sidebar';
import Header from './Header';

const AddOne = () => {
  return (
    <div>
         <Sidebar />
         <Header />
         {/* section-25 */}

         <div className='section-25'>
            <div className='container'>
                <div className='row'>
                    <div className='col-lg-12 col-md-6 col-sm-6 mt-5'>
                        <h4>Add-Ons</h4>
                        <p>Add-On features to level up your school.</p>
                        
                    <div className="row row-cols-1 row-cols-md-4 g-4 mt-5">
  <div className="col">
    <div className="card"style={{border:"1px solid lightgray"}}>
      <img src="https://cdn.prod.website-files.com/616d55402e7088e362a27b50/65327c196737f9d235e4ff6b_Group%2012632.png" class="card-img-top" alt="..."/>
      <div className="card-body">
        <h5 className="card-title">Anti Piracy Pack</h5>
        <p className="card-text">Limit the risk & Prevent content Piracy and login sharing behavior among students .</p>
        <div className="card-footer bg-transparent border-secondary">UnSuscribed</div>
      
      </div>
    </div>
  </div>
 
  <div className="col">
    <div className="card" style={{border:"1px solid lightgray"}}>
      <img src="https://media.licdn.com/dms/image/D4E12AQFeYojgQad1pQ/article-cover_image-shrink_720_1280/0/1699870911694?e=2147483647&v=beta&t=gII-DFElhq0Q5konfILra4pYUy2k7BPOFbjH3hBMsGI" class="card-img-top mt-3" alt="..."/>

      <div className="card-body">
        <h5 className="card-title">Watch Time Restriction</h5>
        <p className="card-text">Prevent content sharing by setting watch time limit for video course contents..</p>
        <div className="card-footer bg-transparent border-secondary">UnSuscribed</div>
      </div>
    </div>
  </div>
  <div className="col">
    <div className="card" style={{border:"1px solid lightgray"}}>
      <img src="https://cdn-ilbnahj.nitrocdn.com/BIaRELYDqwHgznsQYApGXADbKtmhwXUs/assets/images/optimized/rev-80557e8/www.jumio.com/app/uploads/2023/10/education-liveness-detection.jpg" class="card-img-top mt-3" alt="..."/>
      <div className="card-body">
        <h5 className="card-title">Learner verification</h5>
        <p className="card-text">verify learner mobile number during sign-ups using OTP verification.</p>
        <div className="card-footer bg-transparent border-secondary">UnSuscribed</div>
      </div>
    </div>
  </div>
  <div className="col">
    <div className="card" style={{border:"1px solid lightgray"}}>
      <img src="https://www.jqueryscript.net/images/Responsive-Image-Magnifier-Inner-Zoom-Plugin-magnificent-js.jpg" class="card-img-top mt-3" alt="..."/>
      <div className="card-body">
        <h5 className="card-title">Zoom</h5>
        <p className="card-text">Configure your own zoom account for conducing live classes and uploading recording automatically.</p>
        <div className="card-footer bg-transparent border-secondary">Suscribed</div>
      </div>
    </div>
  </div>
</div>
                    </div>
                </div>
                </div>

         </div>

    </div>
  )
}

export default AddOne;