import React, { useState } from "react";
import {FaArrowLeft,FaPlus } from "react-icons/fa";
import { Button, NavLink} from "react-bootstrap";
import "bootstrap/dist/js/bootstrap.bundle.min.js";
function BatchesIns() {

  const values = [true];
  const [fullscreen, setFullscreen] = useState(true);
  const [show, setShow] = useState(false);

  return (
    <>
     {/* Back button start ---------------------------------------------------------- */}
        <div className="row">
          <div className="col-auto">
            <button className="btn btn-lightgray" onClick={() => setShow(false)}>
              <FaArrowLeft /> {/* Back arrow icon */}
            </button>
          </div>
            <div style={{ border: '1px solid lightgray' }}>
              {/* Content goes here */}
          </div>
        </div>
      {/* Back button end----------------------------------------------------------------------- */}
      {/* navbar start---------------------------------------------------------------------- */}
      <div className="container">
        <div className="row">
          <div className="col-auto">
           <span style={{fontWeight:"bold"}}>Dashboard/ </span> 
            <span style={{fontWeight:"bold"}}>Batch/ </span>
            <span style={{fontWeight:"bold"}}>Batches</span>
          </div>
        </div>
        </div>
     {/* navbar end------------------------------------------------------------------------------ */}
     {/* content start--------------------------------------------------------------------------- */}
     <div className="container" style={{ marginTop: "20px", width: "100%"}}>
      <div className="row" style={{width: "100%"}}>
        <div className="col-auto" style={{width: "100%"}}>
          <div style={{ display: "flex", alignItems: "center",justifyContent:"space-between", width:"100%"}}>
            <div>
            <h3>Batches Track</h3>
            <p>Create learner's batch and share information at the same Time</p>
            </div>
            <div >
              <Button
                className="me-2 mb-2 create-btn"
                variant="success"
                style={{ height: "40px" }}
              >
                <FaPlus className="icon" /> Add Track
              </Button>
            </div>
          </div>
        </div>
      </div>
    </div>

    {/* text------------------------------------------------------------------------------------- */}
    <div className="container my-5">
      <div className="card">
        <img src="https://encrypted-tbn3.gstatic.com/images?q=tbn:ANd9GcRWKfD-7Un3_2L5lKCvtGNe2NrrScyAX0OTXfD2JOyQ8v2httNi" className="card-img-top" alt="Illustration" />
        <div className="card-body">
          <h5 className="card-title">Welcome to Batch Creation</h5>
          <p className="card-text">Create a group of learner's batch, schedule live classes, create Community and share resources just like office batches.</p>
        </div>
      </div>
    </div>

    
    
    
    
    
    
    
    
    
    
    
    </>
  )
}

export default BatchesIns