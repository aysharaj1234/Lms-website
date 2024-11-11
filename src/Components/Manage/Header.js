import React from 'react';

const Header = () => {
  return (
    <div>
<nav className="navbar navbar-expand-lg bg-light border" style={{ zIndex:"99", backgroundColor:"lightgray",position:"fixed",top:"0px",right:"0px",left:"0px"}}>
  <div className ="container-fluid">
    <a className ="navbar-brand " href="#">Mukesh Otwani Courses</a>
    <button className ="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
      <span className ="navbar-toggler-icon"></span>
    </button>
    <div   className ="collapse navbar-collapse" id="navbarSupportedContent">
      <ul className ="navbar-nav me-auto mb-2 mb-lg-0">
    
      </ul>
      <form className ="d-flex me-5" role="search">
        <input className ="form-control me-2" type="search" placeholder="View As Learner" aria-label="Search"/>
        <button className ="btn btn-outline-success" type="submit">Help</button> <i  class="fa-solid fa-bell fs-4 ms-3 mt-2"></i>
        <img src='https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSRY87Y7n6bmao_l8L86v5q_eThxPttUeecBQ&s' style={{width:"30px", height:"30px", marginLeft:"1rem",mixBlendMode:"multiply" ,cursor:"pointer"}}
        />
      </form>
    </div>
  </div>
</nav>
    </div>
  )
}

export default Header;