import React from 'react';
import Sidebar from '../Sidebar';
import Header from './Header';

const SalesMarketing = () => {
  return (
    <div>
      <Sidebar />
      <Header />
      
      {/* Section-27 */}
      <div className="section-27">
        <div className="container">
          <div className="row">
            <div className="col-12 col-sm-12 col-md-8 col-lg-8"> {/* Center all text inside this column */}
              
              {/* Breadcrumb Navigation */}
              <nav aria-label="breadcrumb" className="text-center">
                <ol className="breadcrumb "> {/* Center breadcrumb items */}
                  <li className="breadcrumb-item">
                    <a href="#">Dashboard</a>
                  </li>
                  <li className="breadcrumb-item active" aria-current="page">
                    Sales & Marketing
                  </li>
                </ol>
              </nav>

              {/* Title and Description */}
              <h4 className="ms-5 ">Sales & Marketing</h4>
              <p className="ms-5  ">
                All details analytics to evaluate the quality of the sales and marketing strategy.
              </p>
            </div>
          </div>
        </div>

       

        <h5 className='ms-5 mt-5'>Sales</h5>
        <div className="container ms-4">
          <div className="row">
            {[
              {
                title: "Sales",
                description: "View  sales for overall product .",
                imgSrc: "https://thumbs.dreamstime.com/b/sales-team-financial-business-growth-development-people-working-brainstorming-flat-vector-modern-illustration-sales-317364357.jpg"
              },
             
            
            ].map((card, index) => (
              <div className="col-md-4 col-sm-6 mb-4" key={index}>
                <div className="card" style={{ border: "1px solid lightgray" }}>
                  <img src={card.imgSrc} className="card-img-top" alt="..." style={{ maxWidth: "100%", height: "auto" }} />
                  <div className="card-body">
                    <h5 className="card-title">{card.title}</h5>
                    <p className="card-text">{card.description}</p>
                    <p className="card-text"><small className="text-body-secondary">View</small></p>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>


        <h5 className='ms-5 mt-5'>Marketing</h5>
        <div className="container mt-4 ms-4">
          <div className="row">
            {[
              {
                title: "Coupons",
                description: "View performance of coupons in terms of sales&marketing.",
                imgSrc: "https://thumbs.dreamstime.com/b/coupon-cutter-vector-illustration-some-coupons-scissors-53833741.jpg"
              },
              {
                title: "Referral & Wallet",
                description: "View learners Usages and performance for referral and wallet.",
                imgSrc: "https://img.freepik.com/free-vector/refer-friend-concept-illustration_114360-7039.jpg"
              },
              {
                title: "Affiliate Products Report",
                description: "View performance analysis for affilliate feature and its contribution to revenue .",
                imgSrc: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQY0TVZBe79jeyrK9bOUDcuxfFgNg6Q8-rO1g&s"
              }
            ].map((card, index) => (
              <div className="col-md-4 col-sm-6 mb-4" key={index}>
                <div className="card" style={{ border: "1px solid lightgray" }}>
                  <img src={card.imgSrc} className="card-img-top" alt="..." style={{ maxWidth: "100%", height: "auto" }} />
                  <div className="card-body">
                    <h5 className="card-title">{card.title}</h5>
                    <p className="card-text">{card.description}</p>
                    <p className="card-text"><small className="text-body-secondary">View</small></p>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>

        <div className="container ms-4">
          <div className="row mt-5">
            {[
              {
                title: "Affiliates Report",
                description: "View  lerners usages and performance for affiliates.",
                imgSrc: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTAgvjYXjT4Q9TyKlyH3D-SCtsgbOxam7BdWg&s"
              },
             
            
            ].map((card, index) => (
              <div className="col-md-4 col-sm-6 mb-4" key={index}>
                <div className="card" style={{ border: "1px solid lightgray" }}>
                  <img src={card.imgSrc} className="card-img-top mt-3" alt="..." style={{ maxWidth: "100%", height: "auto" }} />
                  <div className="card-body">
                    <h5 className="card-title">{card.title}</h5>
                    <p className="card-text">{card.description}</p>
                    <p className="card-text"><small className="text-body-secondary">View</small></p>
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

export default SalesMarketing;
