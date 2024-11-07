import React from 'react';
import Sidebar from '../Sidebar';
import Header from './Header';


const Branding = () => {
  return (
    <div>
        <Sidebar/>
        <Header/>
      
{/* section-9 */}
      <div className='section-9' style={{zIndex: "99"}}>
      <div className='container-fluid'>
        <div className='row'>
          <div className='col-lg-12'>
            <header>
            <h3>Branding</h3>
            <p>Manage brand settings for your school</p>
            </header>
            <div className='const-1'>
              <img src='https://img.freepik.com/free-vector/corporate-culture-online-service-platform-corporate-relations-business-ethics-corporate-regulations-compliance-website-isolated-flat-vector-illustration_613284-563.jpg'/> 
              <h4>Web Branding</h4>
              <p>Manage web brand settings for your school</p>
              <button type="button" class="btn btn-success"><i class="fa-solid fa-pencil"></i>Customise</button>
            </div>
            <div className='const-1'>
              <img src='https://www.srdvtechnologies.com/assets/images/android-mobile.png'/> 
              <h4>App Branding</h4>
              <p>Manage app brand settings for your school</p>
              <button type="button" class="btn btn-success"><i className="fa-solid fa-pencil"></i>Customise</button>
            </div>
            <div className='const-2'> 
              <h2>Web Branding</h2>
              <h1>Manage web brand settings for your school</h1>
    
            </div>
            
           
               
        </div>
      </div>
      </div>
     </div>
     
    </div> 
  ) 

}

export default Branding;