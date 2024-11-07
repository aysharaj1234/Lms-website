import React from 'react';
import Sidebar from '../Sidebar';
import Header from './Header';



const Embeddable = () => {
  return (
    <div >
      <Sidebar/>
      <Header/>
  
   
{/* section-10 */}

<div className='section-10 ' style={{zIndex: "99"}}>
  <div className='conatiner'>
    <div className='row'>
      <div className='col-lg-12'>
        <header>
          <div className='box-1'>
          <i class="fa-solid fa-circle-exclamation"></i>
          <p>Old embeddable interface will be deprecated soon. to view old embeddable page </p>
          <a href='#'>click here</a>
          </div>
        </header>
        <div className='text-area'>
          <h3>Embeddable</h3>
          <h6>List of created embeddables</h6>
        </div>
        <div className='button-area'>
        <button type="button" class="btn btn-secondary"><i class="fa-solid fa-gear"></i> Manage</button>  
        </div>
        <div className='button-areaa'>
        <button type="button" class="btn btn-success">+ create</button> 
        </div>
        
        <nav aria-label="breadcrumb">
     <ol className="breadcrumb">
    <li className="breadcrumb-item"><a href="#">All</a></li>
    <li className="item"><a href="#">Published</a></li>
    <li className="item" aria-current="page">Unpublished</li>
  </ol>
</nav>


<div className='imagess text-center'>
  <img src='https://img.freepik.com/free-vector/website-setup-concept-landing-page_23-2148322671.jpg'/>
  <h4>Create Your First Embeddables</h4>
  <h5>Design Your Interactive Embeddabls.</h5>
</div>

      </div>
    </div>
  </div>
</div>

    </div>
  )
}

export default Embeddable;