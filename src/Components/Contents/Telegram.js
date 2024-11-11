import React from 'react';
import Sidebar from '../Sidebar';
import Header from './Header';

const Telegram = () => {
  return (
    <div>
      <Sidebar />
      <Header />

      {/* section-20 */}
      <div className="section-20">
        <div className="container">
          {/* Disabled Feature Notification */}
          <div className="box-1 ms-3" style={{ backgroundColor: "lightcoral", width: "100%" }}>
            <p>
              Telegram feature is disabled, any changes made won't be reflected on learners' interface.
            </p>
          </div>
        </div>

        {/* Telegram Community Section */}
        <div className="container mt-5">
          <div className="row">
            <div className="col-lg-6 col-md-6 col-sm-12">
              <h3>Telegram Community</h3>
              <p style={{ fontWeight: "600" }}>
                Create a Telegram account with Learneryst and monetize your community.
              </p>
            </div>
            <div className="col-lg-6 col-md-6 col-sm-12 d-flex justify-content-center justify-content-md-end align-items-center mt-3 mt-md-0">
              <button type="button" className="btn btn-secondary">+ Create</button>
            </div>
          </div>
        </div>

        {/* Link Telegram Account Section */}
        <div className="container mt-5">
          <div className="row">
            <div className="col-12 text-center">
              <img
                style={{ width: "10rem", marginBottom: "1rem" }}
                src="https://cdn.pixabay.com/photo/2020/10/17/13/21/telegram-5662082_1280.png"
                alt="Telegram Logo"
              />
              <h5>Link Telegram Account</h5>
              <p className="fw-bold">
                Link your Telegram account with Learneryst and monetize your Telegram community.
              </p>
              <button style={{ marginLeft: "2rem" }} type="button" className="btn btn-success">+ Link Account</button>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Telegram;
