import React from 'react';
import Sidebar from '../Sidebar';
import Header from './Header';


const Website = () => {
  return (



    <div >
   <Sidebar/>
   <Header/>
    
      <section style={{zIndex: "0"}}>
          <div className='section-2'>
        <div className='container'>
            <div className='row'>
                <div className='col-lg-12'>
                   <h2>Website</h2>
                   <p>Create, edit  and manage your website with all elements and features.</p> 
                   <div className='div-5'>
                    <img src='https://thumbs.dreamstime.com/b/close-up-half-red-maple-leaf-white-background-vector-illustration-view-detail-its-ribs-midribs-319332187.jpg' /> 
                    <h5>The  all new learnyst  website builders </h5>
                    <h6>Create and manage your website with customized widgets.</h6>
                   </div>
                   <h2 className='tt mt-4'>Custom Domain</h2>
                   <p>Configure your Custom domain mapping.</p>
                   <div className='div-6'>
                   <i className="fa-solid fa-circle-check"></i>
                    <h5>Custom domain mapped successfully </h5> 
                    <h6>Congratulations your domain mapping configuration is done successfully.</h6>
                    </div>

                  <div className='body'>
                    <h1>Custom Domain</h1>
                    <div className="input-group flex-nowrap w-50">
                    <input type="text " class="form-control" placeholder="academy.learn-automation.com" aria-label="Username" aria-describedby="addon-wrapping"/>
                         </div>
                         <div className="form-check mt-4">
                          <input className="form-check-input" type="checkbox" value="" id="flexCheckDefault"/>
                         <label className="form-check-label" for="flexCheckDefault">
                       Don't generate an SSL certificate for this domain, i already have one
                                </label>
                                   </div>
                                   <h1>DNS Mapping CName</h1>
                                   <div className="input-group flex-nowrap w-50">
                    <input type="text " className="form-control" placeholder="mukesh-Otwani-cdn-xlearnyst.com" aria-label="Username" aria-describedby="addon-wrapping"/>
                         </div>

                         <h1>Important!</h1>
                         <h4>Please map your `academy.learn-automation.com` to <a href='#'>mukesh-Otwani-cdn-xlearnyst.com. </a> </h4>
                         <h4 className='para'>Refer to the <a href='#'>Support Document</a> for more help.</h4>
                         <button type="button" class="btn btn-outline-secondary mt-3">MAP DOMAIN</button>  
                         <div className='btuu'>
                          <button type="button" class="btn btn-outline-danger">UNMAP DOMAIN</button>
                          </div> 
                          
                          <hr className="responsive-hr" />

                    
                          <h1>Policy</h1> 
                          <div className='bt'>
                          <button type="button" class="btn btn-primary"> + Add Policy</button>
                          <h6>Policy helps you to clearly outline the terms and conditions regarding accountabilty issues or activities that are of critical importance to the company ,such as, legal liabilities , regulatory requirements and or issues that have serious consequence.</h6>
                   </div>
                   </div>



                   <div className='container'>
                    <div className='tb'>
                   <table className="table mt-5">
  <thead>
    <tr>
      <th scope="col">#</th>
      <th scope="col">Page Name</th>
      <th scope="col">Policy URL</th>
      <th scope="col">Updated at</th>
      <th scope="col">Action</th>
    </tr>
  </thead>
  <tbody>
    <tr>
      <th scope="row">1</th>
      <td>Privacy Policy</td>
      <td>https://academy.learn-_</td>
      <td>9/27/2024</td>
      <td><i className="fa-solid fa-square"></i></td>
    </tr>
    <tr>
      <th scope="row">2</th>
      <td>Terms-of-service</td>
      <td>https://academy.learn-_</td>
      <td>9/27/2024</td>
      <td><i className="fa-solid fa-square"></i></td>
    </tr>
    <tr>
      <th scope="row">3</th>
      <td>Refund</td>
      <td>https://academy.learn-_</td>
      <td>9/27/2024</td>
      <td><i className="fa-solid fa-square"></i></td>
    </tr>
    <tr>
      <th scope="row">4</th>
      <td>Picing-Policy</td>
      <td>https://academy.learn-_</td>
      <td>9/27/2024</td>
      <td><i className="fa-solid fa-square"></i></td>
      
    </tr>
  </tbody>
</table>

                   </div>
                   </div>

                   


                </div>
            </div>
        </div>
     </div>
     </section>
    </div>
  )
}

export default Website;