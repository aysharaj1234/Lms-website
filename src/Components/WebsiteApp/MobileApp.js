
import React from 'react';
import { Link, useNavigate } from 'react-router-dom';

const MobileApp= () => {

  const navigate= useNavigate()
  const dashboard=()=>
  {
    navigate('/')
  }

  
  return (
    <div>
      {/* Navbar */}
      <nav className="navbar navbar-expand-lg bg-body-tertiary" style={{ borderBottom: "1px solid lightgray" }}>
        <div className="container-fluid">

          <i className="fa-solid fa-backward" onClick={dashboard} style={{cursor:"pointer"}}></i>

          <a className="navbar-brand ms-2" href="#">Add-Ons</a>
          <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarNav" aria-controls="navbarNav" aria-expanded="false" aria-label="Toggle navigation">
            <span className="navbar-toggler-icon"></span>
          </button>
          <div className="collapse navbar-collapse" id="navbarNav">
            <ul className="navbar-nav">
            </ul>
          </div>
        </div>
      </nav>

      {/* Section-6 */}
      <div className='section-6 py-4'>
        <div className='container'>
          <div className='row d-flex align-items-center'>
            <div className='col-lg-6 col-md-12 mb-4'>
            
              <div className='image-container ms-5'>
                <img src='https://www.bitstudios.com/wp-content/uploads/2023/08/Image-Mobile-App-Design-Services.svg' style={{height:"220px"}}/>
              </div>
           
            </div>
            <div className='col-lg-6 col-md-12 text-center mt-5'>
              <h2>Mobile Apps</h2>
              <p>Get fully branded Android & IOS apps for your school.</p>
              <button style={{marginTop:"-0.5rem", marginRight:"14rem"}} type="button" className="btn btn-success">Subscribe</button>
            </div>
          </div>
        </div>
      </div>

      {/* Section-7 */}
      <div className='section-7 py-5'>
        <div className='container'>
          <div className='row text-center' style={{paddingTop:"6rem"}}>
            <div className='col-lg-12'>
              <header>
                <h1>Pricing</h1>
              </header>
              <div className='row mt-5'>
                <div className='col-lg-3 col-md-6 col-sm-12 mb-4 img-1 mt-4'>
                  <img
                    src='https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTleif--18s8dQ9Tl7ewkkmyMaMnoAGQ7FIu3BjCSYswk8i-2d5I087Zzs5Tat0PpBlayI&usqp=CAU'
                    className='img-fluid rounded' // Responsive image
                    alt='Preview App'
                  />
                  <h5>Preview App (Free)</h5>
                  <h4>Free</h4>
                </div>

                <div className='col-lg-3 col-md-6 col-sm-12 mb-4 img-2 mt-4'>
                  <img
                    src='https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTHFJRl23oc1bABiCrHu9GUVxIYq0PezxJ3Hqez4WnEomUYaDeUOAEOaQ_5NuPNZh0dbbg&usqp=CAU'
                    className='img-fluid rounded' // Responsive image
                    alt='Android'
                  />
                  <h5>Android</h5>
                  <h4>rs 8,999</h4>
                </div>

                <div className='col-lg-3 col-md-6 col-sm-12 mb-4 img-3 mt-4'>
                  <img
                    src='https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTApXlydhIuwlHhumnJ1_9LSzfnbTNyXTl7w_rv6NMC1CPTgzXQxJpIGy4but9meiTTFNo&usqp=CAU'
                    className='img-fluid rounded' // Responsive image
                    alt='iOS'
                  />
                  <h5>Ios</h5>
                  <h4>rs 14,999</h4>
                </div>
                  <div className='col-lg-3 col-md-6 col-sm-12 mb-4 img-3 mt-4'>
                  <img
                    src='https://abrarfuturetech.com/public/uploads/service-21.jpg'
                    className='img-fluid rounded' // Responsive image
                    alt='iOS'
                  />
                  <h5>Android and Ios</h5>
                  <h4>rs 23,998</h4>
                </div>


              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}

export default MobileApp;
