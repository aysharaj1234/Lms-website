import React from 'react';
import { Link, useNavigate } from 'react-router-dom';
import { Navigate } from 'react-router-dom';

const NavigationMenu = () => {

  const navigate= useNavigate()
  const dashboard=()=>
  {
    navigate('/')
  }

  return (
    <div>
      {/* Navbar */}
      <nav className="navbar navbar-expand-lg bg-body-tertiary" style={{ width: '100%' }}>
        <div className="container-fluid">
          <i className="fa-solid fa-backward ms-1" onClick={dashboard} style={{cursor:"pointer"}}></i>
          <button
            className="navbar-toggler"
            type="button"
            data-bs-toggle="collapse"
            data-bs-target="#navbarNav"
            aria-controls="navbarNav"
            aria-expanded="false"
            aria-label="Toggle navigation"
          >
            <span className="navbar-toggler-icon"></span>
          </button>
          <div className="collapse navbar-collapse" id="navbarNav">
            <ul className="navbar-nav"></ul>
          </div>
        </div>
      </nav>

      {/* Section-3 */}
      <div className="section-3 py-4">
        <div className="container">
          <div className="row">
            <div className="col-lg-6 mb-3">
              <a href="#">Dashboard</a>
              <h5>/ NavigationMenu</h5>
              <h2>NavigationMenu</h2>
              <h3>Add/Modify menu here.</h3>

              <div className="input-group my-4">
                <input
                  type="text"
                  className="form-control"
                  placeholder="Search by Title (alt+k or cmd+k)"
                  aria-label="Search"
                />
              </div>

              {/* <div className="d-flex gap-2">
                <button type="button" className="btn btn-primary">Search</button>
                <button type="button" className="btn btn-outline-primary">Add Filter</button>
              </div> */}
            </div>

            <div className="col-lg-6 mb-3 text-end">
              <button type="button" className="btn btn-success mb-2">+ Create Navigation Menu</button>
              <div className="dropdown">
                <button
                  className="btn btn-secondary dropdown-toggle"
                  type="button"
                  data-bs-toggle="dropdown"
                  aria-expanded="false"
                >
                  Select Columns
                </button>
                <ul className="dropdown-menu">
                  <li><a className="dropdown-item" href="#">Action</a></li>
                  <li><a className="dropdown-item" href="#">Another action</a></li>
                  <li><a className="dropdown-item" href="#">Something else here</a></li>
                </ul>
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* Section-4 */}
      <div className="section-4 py-4">
        <div className="container">
          <div className="row">
            <div className="col-lg-12">
              <table className="table table-responsive w-100">
                <thead>
                  <tr>
                    <th scope="col">
                      <li className="nav-item dropdown">
                        <a className="nav-link dropdown-toggle" href="#" role="button" data-bs-toggle="dropdown" aria-expanded="false">
                          Menu Title
                        </a>
                        <ul className="dropdown-menu">
                          <li><a className="dropdown-item" href="#">Action</a></li>
                          <li><a className="dropdown-item" href="#">Another action</a></li>
                          <li><a className="dropdown-item" href="#">Something else here</a></li>
                        </ul>
                      </li>
                    </th>
                    <th scope="col">Type</th>
                    <th scope="col">Menu items</th>
                    <th scope="col">
                      <li className="nav-item dropdown">
                        <a className="nav-link dropdown-toggle" href="#" role="button" data-bs-toggle="dropdown" aria-expanded="false">
                          Updated On
                        </a>
                        <ul className="dropdown-menu">
                          <li><a className="dropdown-item" href="#">Action</a></li>
                          <li><a className="dropdown-item" href="#">Another action</a></li>
                          <li><a className="dropdown-item" href="#">Something else here</a></li>
                        </ul>
                      </li>
                    </th>
                    <th scope="col">Actions</th>
                  </tr>
                </thead>
                <tbody>
                  <tr>
                    <th scope="row">Social Menu</th>
                    <td>default</td>
                    <td>_</td>
                    <td>14 Dec 2023</td>
                    <td><i className="fa-solid fa-ellipsis-vertical"></i></td>
                  </tr>
                  <tr>
                    <th scope="row">Learner Menu</th>
                    <td>default</td>
                    <td>_</td>
                    <td>14 Dec 2023</td>
                    <td><i className="fa-solid fa-ellipsis-vertical"></i></td>
                  </tr>
                  <tr>
                    <th scope="row">Main Menu</th>
                    <td>default</td>
                    <td>1</td>
                    <td>14 Dec 2023</td>
                    <td><i className="fa-solid fa-ellipsis-vertical"></i></td>
                  </tr>
                </tbody>
              </table>
            </div>
          </div>
        </div>
      </div>

      {/* Section-5 */}
      <div className="section-5 py-4">
        <div className="container">
          <div className="row">
            <div className="col-lg-12">
              <h2>Rows Per page</h2>
              <div className="dropdown">
                <button
                  className="btn btn-outline-dark dropdown-toggle"
                  type="button"
                  data-bs-toggle="dropdown"
                  aria-expanded="false"
                >
                  10
                </button>
                <ul className="dropdown-menu">
                  <li><a className="dropdown-item" href="#">Action</a></li>
                  <li><a className="dropdown-item" href="#">Another action</a></li>
                  <li><a className="dropdown-item" href="#">Something else here</a></li>
                </ul>
              </div>

              <nav aria-label="Page navigation example">
                <ul className="pagination">
                  <li className="page-item">
                    <a className="page-link" href="#" aria-label="Previous">
                      <span aria-hidden="true">&laquo;</span>
                    </a>
                  </li>
                  <li className="page-item">
                    <a className="page-link" href="#" aria-label="Next">
                      <span aria-hidden="true">&raquo;</span>
                    </a>
                  </li>
                </ul>
              </nav>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default NavigationMenu;
