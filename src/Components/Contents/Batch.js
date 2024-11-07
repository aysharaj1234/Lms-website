import React from "react";
import Sidebar from "../Dashboard/Sidebar";
import Header from "../Header";


function Batch() {
  return (
    <>
      <div className="d-flex">
        <div>
            <Header />
        </div>
        <div>
          <Sidebar />
        </div>
        <section
          style={{
            marginLeft: "250px",
            width: "calc(100% - 250px)",
            height: "100vh",
            padding: "1rem",
            zIndex:"-99",
            marginTop:"3.5rem"
          }}
        >

<div className="container" style={{marginLeft:"200px"}}>
  <span style={{ fontWeight: "bold", fontSize:"25px" }}>Batch</span>
  <p>Add Instructors,create instructors track and create batches</p>
  <div className="d-flex gap-4">
    <div style={{border:"1px solid black", width:"250px", height:"250px",padding:"20px"}}> 
    <i class="fa-solid fa-file-lines" style={{fontSize:"40px", marginLeft:"10px",marginTop:"5px",color:"blue"}}></i>
    <div style={{marginTop:"20px"}}>
    <span style={{fontWeight:"bold",fontSize:"20px"}}>Instructor Track</span>
    <p>Create schedule for batch by adding live class to the batches</p>
    </div>
    <div>
        <a href="">View</a>
    </div>


    </div>

    <div style={{border:"1px solid black", width:"250px", height:"250px",padding:"20px"}}> 
    <i class="fa-solid fa-people-group" style={{fontSize:"40px", marginLeft:"10px",marginTop:"5px",color:"blue"}}></i>
    <div style={{marginTop:"20px"}}>
    <span style={{fontWeight:"bold",fontSize:"20px"}}>batches</span>
    <p>Create Learner's batch and share information at the same time</p>
    </div>
    <div>
        <a href="">View</a>
    </div>


    </div>










  </div>
</div>
      
   



        </section>
      </div>
    </>
  );
}

export default Batch;
