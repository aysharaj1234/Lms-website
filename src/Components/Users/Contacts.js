import React from 'react';
import Sidebar from '../Sidebar';
import Header from './Header';

const Contacts = () => {
  return (
    <div>
       <Sidebar/>
       <Header/>
    {/* section-18   */}
    <div className='section-18'>
  <div className='container'>
    <div className='row'>
      <div className='col-lg-12 col-md-10 col-sm-12 mt-5 text-center'>
        <h2>Contacts</h2>
        <p style={{ fontWeight: "600" }}>List of contacts generated through forms</p>
        <img 
          className="img-fluid w-50 w-md-50 w-lg-50 mt-5 " 
          src='https://webuniversals.co.nz/wp-content/uploads/2023/11/Webdevelopment-company-newzealand.png' 
          alt="Contacts"
          
        />
        <h5 className='mt-3'> No Contacts yet</h5>
        <p style={{ fontWeight: "600" }}>please check again later.</p>
      </div>
    </div>
  </div>
</div>

  

      </div>
  )
}

export default Contacts;