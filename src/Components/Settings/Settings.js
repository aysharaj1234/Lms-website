import React from 'react';
import Sidebar from '../Sidebar';
import Header from './Header';

const Settings = () => {
  return (
    <div>
      <Sidebar />
      <Header />
      {/* section-26 */}
      <div className='section-26'>
        <div className='container ms-5'>
          <div className='row'>
            <div className='col-lg-12 col-md-6 col-sm-6 mt-5'>
              <h2>Settings</h2>
              <p className='fw-bold'>Manage school settings and preferences.</p>
              <div className="d-flex flex-column flex-md-row align-items-md-center mt-3">
                <div className="input-group mb-3 me-2 w-50">
                  <input 
                    type="text" 
                    className="form-control custom-input" 
                    placeholder="Search (alt+k or cmd+k)" 
                    aria-label="Search"
                  />
                  <span className="input-group-text" id="basic-addon2">
                    <i className="fa-solid fa-magnifying-glass"></i>
                  </span>
                </div>
              </div>
              <h2>General</h2>
              <p className='fw-bold'>Setup general account settings.</p>
            </div>
          </div>

          <div className="container mt-4">
            <div className="row row-cols-1 row-cols-md-4 g-4">
              {[
                {
                  title: "SEO",
                  text: "Add SEO details to help bring your school on top of the search results.",
                  imgSrc: "https://media.istockphoto.com/id/1249867007/vector/analytics-analysis-statistics-searching-gray-icon.jpg?s=612x612&w=0&k=20&c=Yt4RBnpog9OU1uPu9LVONX69bxsdS_HjeHNP6CnFRYs="
                },
                {
                  title: "Time Zone",
                  text: "To set up a time: to choose a time, to organize a meeting idiom.",
                  imgSrc: "https://png.pngtree.com/png-vector/20220726/ourmid/pngtree-global-time-zone-icon-time-management-schedule-watch-vector-png-image_38131558.png"
                },
                {
                  title: "Video Quality",
                  text: "It's measured by the number of pixels contained in the standard aspect.",
                  imgSrc: "https://img.myloview.com/stickers/video-video-icon-video-vector-video-icon-vector-video-camera-icon-video-icon-set-video-vector-icons-video-app-icon-video-player-icon-vector-illustrattion-video-icon-flat-design-vector-for-web-700-235303942.jpg"
                }
              ].map((item, index) => (
                <div className="col" key={index}>
                  <div className="card" style={{ border: "1px solid gray" }}>
                    <img src={item.imgSrc} className="card-img-top" alt={item.title} />
                    <div className="card-body">
                      <h5 className="card-title">{item.title}</h5>
                      <p className="card-text">{item.text}</p>
                    </div>
                  </div>
                </div>
              ))}
            </div>
          </div>

          <h2 className='mt-4'>Learner Billing</h2>
          <p className='fw-bold'>Manage billing and payment settings.</p>

          <div className="row row-cols-1 row-cols-md-2 row-cols-lg-3 g-4 mt-3 me-4">
            {[
              {
                title: "Payment Gateway",
                text: "Manage Pricing and expiry details for your course.",
                imgSrc: "https://img.freepik.com/free-vector/credit-card-landing-page-payment-concept_23-2148298750.jpg?semt=ais_hybrid"
              },
              {
                title: "Good & Service Tax (GST)",
                text: "GST is an indirect tax application if you sell courses within India.",
                imgSrc: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcR5GkgerhW_Z1C7YkBtEa3_a6kv8nJbAKK8nctca4pzSbMdxIRpdSEtgeLiWC4ryEj92HA&usqp=CAU"
              },
              {
                title: "Learner Configurations",
                text: "Configure learner addresses and invoice settings.",
                imgSrc: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQBMPJwGuJDKbWj73mGrNbMlwIefs1zs8Q-tstwch9BwqGb2W6RiOpbieZc9QWUUyMkwZQ&usqp=CAU"
              },
              {
                title: "Invoice Configuration",
                text: "Enable to generate invoice for learners when they make a purchase.",
                imgSrc: "https://www.einvoicing.com/wp-content/uploads/2022/08/6-eInvoice7.png"
              }
            ].map((item, index) => (
              <div className="col" key={index}>
                <div className="card" style={{ border: "1px solid gray" }}>
                  <img src={item.imgSrc} className="card-img-top" alt={item.title} />
                  <div className="card-body">
                    <h5 className="card-title">{item.title}</h5>
                    <p className="card-text">{item.text}</p>
                  </div>
                </div>
              </div>
            ))}
          </div>

          <h2 className='mt-4'>Features</h2>
          <p className='fw-bold'>Use school features to enhance your school experience.</p>

          <div className="container mt-4">
            <div className="row row-cols-1 row-cols-md-4 g-4">
              <div className="col">
                <div className="card" style={{ border: "1px solid gray" }}>
                  <img src="https://static.thenounproject.com/png/575865-200.png" className="card-img-top" alt="Fast Checkout" />
                  <div className="card-body">
                    <h5 className="card-title">Fast Checkout</h5>
                    <p className="card-text">Allow learners to buy your products with quick & easy checkout process.</p>
                  </div>
                </div>
              </div>
            </div>
          </div>

          <h2 className='mt-4'>Security</h2>
          <p className='fw-bold'>Use security features for protection against unauthorized access.</p>

          <div className="row row-cols-1 row-cols-md-2 row-cols-lg-3 g-4 mt-3 me-4">
            {[
              {
                title: "Learner Email Verification",
                text: "Verify your learner's email and allow access based on verification.",
                imgSrc: "https://img.freepik.com/premium-vector/twostep-verification-flat-illustration_773186-1559.jpg?semt=ais_hybrid"
              },
              {
                title: "Device Monitor",
                text: "Manage device restrictions and parallel login settings.",
                imgSrc: "https://p.kindpng.com/picc/s/238-2389989_pc-clipart-computer-virus-antivirus-png-transparent-png.png"
              },
              {
                title: "Admin OTP",
                text: "Set admin login limit for OTP verification.",
                imgSrc: "https://elements-resized.envatousercontent.com/elements-cover-images/a9db6241-4ffa-4c94-947c-702f3d3741a0?w=433&cf_fit=scale-down&q=85&format=auto&s=0c77a7252e1ae1bd01e8d8af6120840d5355c9701e3cad90cd5fc0f1d5317874"
              }
            ].map((item, index) => (
              <div className="col" key={index}>
                <div className="card" style={{ border: "1px solid gray" }}>
                  <img src={item.imgSrc} className="card-img-top" alt={item.title} />
                  <div className="card-body">
                    <h5 className="card-title">{item.title}</h5>
                    <p className="card-text">{item.text}</p>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
}

export default Settings;
