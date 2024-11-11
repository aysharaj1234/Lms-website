import React from 'react';
import Sidebar from '../Sidebar';
import Header from './Header';

const Utilities = () => {
  return (
    <div>
      <Sidebar />
      <Header />

      {/* section-20 */}
      <div className="section-20">
        <div className="container">
          <div className="row">
            <div className="col-lg-12 col-md-12 col-sm-12 mt-5 text-center">
              <h3>Utilities</h3>
              <p style={{ fontWeight: "500" }}>
                Utilities lets you add courses, mock tests, or test series to a new product or existing products within school or sub-school.
              </p>

              {/* Copy product box */}
              <div className="container-fluid ms-3 mt-5 border" style={{ height: "7rem", width: "100%" }}>
                <h5 className="mt-1">Copy product</h5>
                <p style={{ fontWeight: "500" }}>
                  Create a copy of course, mock test, or test series to a new product within school or sub-school.
                </p>
                <p style={{ color: "gray" }}>
                  Note: Copy of course will be created as an encrypted course.
                </p>
              </div>

              {/* No result found message */}
              <h5 className="text-center mt-5">No result found</h5>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Utilities;
