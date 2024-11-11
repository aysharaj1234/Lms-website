import React from 'react';
import Sidebar from '../Sidebar';
import Header from './Header';

const LagacyQuestionPool = () => {
  return (
    <div>
      <Sidebar />
      <Header />

      {/* section-20 */}
      <div className="section-20">
        <div className="container ms-3" style={{ backgroundColor: "lightblue", height: "auto", marginTop: "5rem", paddingBottom: "2rem" }}>
          <div className="row">
            <div className="col-lg-6 col-md-12 col-sm-12">
              <h5 className="mt-5">Question Pools</h5>
            </div>

            <div className="col-lg-6 col-md-12 col-sm-12 d-flex justify-content-center justify-content-md-end align-items-center mt-3 mt-md-0">
              <button type="button" className="btn btn-primary" data-bs-toggle="modal" data-bs-target="#exampleModal">
                + Create Question Pool
              </button>
            </div>
          </div>

          {/* Modal */}
          <div className="modal fade" id="exampleModal" tabIndex="-1" aria-labelledby="exampleModalLabel" aria-hidden="true">
            <div className="modal-dialog">
              <div className="modal-content">
                <div className="modal-header">
                  <h1 className="modal-title fs-5" id="exampleModalLabel">Create Pool</h1>
                  <button type="button" className="btn-close" data-bs-dismiss="modal" aria-label="Close"></button>
                </div>
                <div className="modal-body">
                  <label htmlFor="poolTitle" className="form-label">Pool Title</label>
                  <input type="text" className="form-control" id="poolTitle" placeholder="Enter pool title" />
                </div>
                <div className="modal-footer">
                  <button type="button" className="btn btn-secondary" data-bs-dismiss="modal">Cancel</button>
                  <button type="button" className="btn btn-primary">Create</button>
                </div>
              </div>
            </div>
          </div>

          {/* No Pool Created Yet Section */}
          <div className="container mt-5">
            <div className="row">
              <div className="col-12 text-center">
                <img
                  style={{ width: "15rem", marginBottom: "1rem", maxWidth: "100%" }}
                  src="https://png.pngtree.com/png-clipart/20230418/original/pngtree-swimming-pool-clip-art-illustration-png-image_9065973.png"
                  alt="No Pool Created"
                />
                <p className='fw-bold'>No Pool Created Yet!</p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default LagacyQuestionPool;
