import React from 'react';
import Sidebar from '../Sidebar';
import Header from './Header';

const LegacyReport = () => {
  return (
    <div>
      <Sidebar />
      <Header />
      
      {/* Section 23 */}
      <div className="section-23">
        <div className="container">
          <div className="row">
            <div className="col-12 col-sm-12 col-md-8 col-lg-8 mt-5">
              <h3 className="ms-3 ms-sm-2 ms-md-4">Legacy Report</h3>
              <p className="ms-3 ms-sm-2 ms-md-4">View all of your legacy reports here.</p>
              
              {/* Legacy Report Container */}
              <div
                className="containere mt-5 p-3 ms-3"
                style={{
                  width: '100%',
                  height: 'auto',
                  backgroundColor: 'lightblue',
                  borderRadius: '8px',
                }}
              >
                <h5 className="ms-4 p-2">Legacy report will be deprecated soon. </h5> 
                <p className="fw-bold ms-4">
                  Legacy report will be deprecated on 30th November 2023. All the data will be shown in the new report.
                </p> 
                
                <button
                  type="button"
                  className="btn btn-success ms-4"
                  style={{ marginTop: '1rem' }}
                >
                  View Legacy Report
                  <i class="fa-solid fa-arrow-right-long"></i>
                </button>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default LegacyReport;
