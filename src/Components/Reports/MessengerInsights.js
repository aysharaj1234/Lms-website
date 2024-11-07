import React from 'react';
import Sidebar from '../Sidebar';
import Header from './Header';

const MessengerInsights = () => {
  return (
    <div>
      <Sidebar />
      <Header />

      {/* section-23 */}
      <div className="section-23">
        <div className="container">
          <div className="row">
            <div className="col-12 col-sm-12 col-md-8 col-lg-8"> {/* Adjust column sizes for different screen sizes */}
              
              {/* Breadcrumb */}
              <nav aria-label="breadcrumb">
                <ol className="breadcrumb">
                  <li className="breadcrumb-item">
                    <a href="#">Dashboard</a>
                  </li>
                  <li className="breadcrumb-item active " aria-current="page">
                    Messenger Insights
                  </li>
                </ol>
              </nav>

              {/* Heading and Paragraph */}
              <h3 className='ms-5'>Messenger Insights</h3>
              <p className='ms-5'>Analyze campaign performance to optimize open rates, click -through rates, and drive conversion.</p>
            </div>
          </div>

          {/* Additional content can go here */}

          <div className="container mt-4">
          <div className="row">
            {[


{
  title: "Marketing Mail Report",
  description: " Analyse marketing campaign performance through messenger.",
  imgSrc: "https://img.freepik.com/premium-vector/illustration-email-marketing_498740-17829.jpg"
},
              {
                title: "System Mail Report",
                description: "Analyse system email performance which are triggered based on learner actions.",
                imgSrc: " https://img.freepik.com/premium-vector/email-document-secure-digital-shield-icon-electronic-mail-letter-text-file-laptop-computer_212005-384.jpg"
              },
          
              {
                title: "Puch Messages Report",
                description: "Analyze puch message performance through messenger.",
                imgSrc: "https://img.freepik.com/free-vector/push-notifications-concept-illustration_114360-4730.jpg"
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
        </div>
      </div>
    </div>
  );
}

export default MessengerInsights;
