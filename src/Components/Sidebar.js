import React, { useState } from 'react';
import './Sidebar.css';
import 'bootstrap/dist/css/bootstrap.min.css';
import { Nav, NavDropdown } from 'react-bootstrap';
import { FaHome, FaBars, FaBook, FaClipboardList, FaChartLine } from 'react-icons/fa';
import { FiUsers, FiFileText, FiSettings, FiBox } from 'react-icons/fi';
import { Link, NavLink } from 'react-router-dom';


function Sidebar() {
  const [isCollapsed, setIsCollapsed] = useState(false);

  const toggleSidebar = () => {
    setIsCollapsed(!isCollapsed);
  };

  return (

   
    <div>
     
      

    <div style={{width: "300px",}}>
    <div className={`sidebar d-flex flex-column bg-light p-3 ${isCollapsed ? 'collapsed' : ''}`}>
      <div className="sidebar-header d-flex justify-content-between align-items-center">
        <FaBars className="toggle-btn" onClick={toggleSidebar} />
        {!isCollapsed && <h4>My App</h4>}
      </div>
      
      <Nav className="flex-column">
        <Nav.Link className="nav-item">
          <FaHome className="nav-icon" /> {!isCollapsed && <NavLink to='/'>Dashboard</NavLink> }
        </Nav.Link>


        <NavDropdown
          title={
            <span>
              <FaBook className="nav-icon" /> {!isCollapsed && 'Contents'}
            </span>
          }
          id="nav-dropdown"
        >
          <NavDropdown.Item href="#course1"><NavLink className="text-decoration-none" to="/Courses">Courses</NavLink></NavDropdown.Item>
          <NavDropdown.Item href='#course1'><NavLink className="text-decoration-none" to="/LiveClasses">LiveClasses</NavLink></NavDropdown.Item>
          <NavDropdown.Item href="#course3"><NavLink className="text-decoration-none" to="/MockTest">MockTest</NavLink></NavDropdown.Item>
          <NavDropdown.Item href="#course4"> <NavLink className="text-decoration-none" to="/TestSeries">TestSeries</NavLink></NavDropdown.Item>
          <NavDropdown.Item href="#course5"> <NavLink className="text-decoration-none" to="/Bundles">Bundles</NavLink></NavDropdown.Item>
          <NavDropdown.Item href="#course6"><NavLink className="text-decoration-none" to="/Batch">Batch</NavLink></NavDropdown.Item>
          <NavDropdown.Item href="#course7"><NavLink className="text-decoration-none" to="/Ebook">Ebook</NavLink></NavDropdown.Item>
          <NavDropdown.Item href="#course8"><NavLink  className="text-decoration-none"to="/Podcasts">Podcasts</NavLink></NavDropdown.Item>
          <NavDropdown.Item href="#course8"><NavLink  className="text-decoration-none"to="/Webinars">Webinars</NavLink></NavDropdown.Item>
          <NavDropdown.Item href="#course8"><NavLink  className="text-decoration-none"to="/DigitalProducts">DigitalProducts</NavLink></NavDropdown.Item>
        </NavDropdown>


        <Nav.Link as={NavLink} to="/marketing" className="nav-item">
          <FaChartLine className="nav-icon" /> {!isCollapsed && 'Marketing'}
        </Nav.Link>

       



        <NavDropdown
          title={
            <span>
              <FaBook className="nav-icon" /> {!isCollapsed && 'Websites & Apps'}
            </span>
          }
          id="nav-dropdown"
        >
          <NavDropdown.Item href="#course1"><NavLink className="text-decoration-none" to="/Website">Website</NavLink></NavDropdown.Item>
          <NavDropdown.Item href='#course1'><NavLink className="text-decoration-none" to="/NavigationMenu">NavigationMenu</NavLink></NavDropdown.Item>
          <NavDropdown.Item href="#course3"><NavLink className="text-decoration-none" to="/MobileApp">MobileApp</NavLink></NavDropdown.Item>
          <NavDropdown.Item href="#course4"> <NavLink className="text-decoration-none" to="/Branding">Branding</NavLink></NavDropdown.Item>
          <NavDropdown.Item href="#course5"> <NavLink className="text-decoration-none" to="/Embeddable">Embeddable</NavLink></NavDropdown.Item>
          <NavDropdown.Item href="#course6"><NavLink className="text-decoration-none" to="/Language">Language</NavLink></NavDropdown.Item>
          <NavDropdown.Item href="#course7"><NavLink className="text-decoration-none" to="/SignUp">SignUp</NavLink></NavDropdown.Item>
          <NavDropdown.Item href="#course8"><NavLink  className="text-decoration-none"to="/CustomField">CustomFields</NavLink></NavDropdown.Item>
        </NavDropdown>


        <Nav.Link as={NavLink} to="/marketing" className="nav-item">
          <FaChartLine className="nav-icon" /> {!isCollapsed && 'Marketing'}
        </Nav.Link>
       

<NavDropdown
          title={
            <span>
              <FaBook className="nav-icon"/> {!isCollapsed && 'Users'}
            </span>
          }
          id="nav-dropdown"
        >
         <NavDropdown.Item href="#course1"><NavLink  className="text-decoration-none" to="/Groups">Groups</NavLink></NavDropdown.Item>
          <NavDropdown.Item href="#course2"><NavLink className="text-decoration-none" to="/Learners">Learners</NavLink></NavDropdown.Item>
          <NavDropdown.Item href="#course3"><NavLink className="text-decoration-none" to="/Contacts">Contacts</NavLink></NavDropdown.Item>

        </NavDropdown>




        <NavDropdown
          title={
            <span>
              <FaBook className="nav-icon"/> {!isCollapsed && 'Reports'}
            </span>
          }
          id="nav-dropdown"
        >
         <NavDropdown.Item href="#course1"><NavLink  className="text-decoration-none" to="/Enrollments">Enrollments</NavLink></NavDropdown.Item>
         <NavDropdown.Item href="#course2"><NavLink  className="text-decoration-none" to="/Transactions">Transactions</NavLink></NavDropdown.Item>
         <NavDropdown.Item href="#course3"><NavLink  className="text-decoration-none" to="/PaymentGateways">PaymentGateways</NavLink></NavDropdown.Item>
         <NavDropdown.Item href="#course4"><NavLink  className="text-decoration-none" to="/ProgressScore">ProgressScore</NavLink></NavDropdown.Item>
         <NavDropdown.Item href="#course5"><NavLink  className="text-decoration-none" to="/SalesMarketing">SalesMarketing</NavLink></NavDropdown.Item>
         <NavDropdown.Item href="#course6"><NavLink  className="text-decoration-none" to="/LiveClassLagacy">LiveClassLagacy</NavLink></NavDropdown.Item>
         <NavDropdown.Item href="#course7"><NavLink  className="text-decoration-none" to="/LiveClassInsights">LiveClassInsights</NavLink></NavDropdown.Item>
         <NavDropdown.Item href="#course8"><NavLink  className="text-decoration-none" to="/CustomFields">CustomFields</NavLink></NavDropdown.Item>
         <NavDropdown.Item href="#course9"><NavLink  className="text-decoration-none" to="/DigitalEvaluation">DigitalEvaluation</NavLink></NavDropdown.Item>
         <NavDropdown.Item href="#course10"><NavLink  className="text-decoration-none" to="/Exports">Exports</NavLink></NavDropdown.Item>
         <NavDropdown.Item href="#course11"><NavLink  className="text-decoration-none" to="/BroadCastMessage">BroadCastMessage</NavLink></NavDropdown.Item>
         <NavDropdown.Item href="#course12"><NavLink  className="text-decoration-none" to="/MessengerInsights">MessengerInsights</NavLink></NavDropdown.Item>
         <NavDropdown.Item href="#course13"><NavLink  className="text-decoration-none" to="/LegacyReport">LegacyReport</NavLink></NavDropdown.Item>

        </NavDropdown>



        <NavDropdown
          title={
            <span>
              <FaBook className="nav-icon" /> {!isCollapsed && 'Manage'}
            </span>
          }
          id="nav-dropdown"
        >
          <NavDropdown.Item href="#course1"><NavLink className="text-decoration-none" to="/CourseEncryption">CourseEncryption</NavLink></NavDropdown.Item>
          <NavDropdown.Item href="#course2"><NavLink className="text-decoration-none" to="/Discussions">Discussions</NavLink></NavDropdown.Item>
          <NavDropdown.Item href="#course2"><NavLink  className="text-decoration-none" to="/RatingReview">RatingReview</NavLink></NavDropdown.Item>
          <NavDropdown.Item href="#course2"><NavLink  className="text-decoration-none" to="/LegacyAnswerReview">LegacyAnswerReview</NavLink></NavDropdown.Item>
          <NavDropdown.Item href="#course2"><NavLink  className="text-decoration-none" to="/AnswerReview">AnswerReview</NavLink></NavDropdown.Item>
          <NavDropdown.Item href="#course2"><NavLink  className="text-decoration-none" to="/LearnerSupport">LearnerSupport</NavLink></NavDropdown.Item>
        
        </NavDropdown>


       
       

        <NavDropdown
          title={
            <span>
              <FaBook className="nav-icon" /> {!isCollapsed && 'AddOne'}
            </span>
          }
          id="nav-dropdown"
        >
          <NavDropdown.Item href="#course1"><NavLink className="text-decoration-none"  to="/AddOne">AddOne</NavLink></NavDropdown.Item>
        </NavDropdown>


        <NavDropdown
          title={
            <span>
              <FaBook className="nav-icon" /> {!isCollapsed && 'PriacyMonitor'}
            </span>
          }
          id="nav-dropdown"
        >
          <NavDropdown.Item href="#course1"><NavLink className="text-decoration-none"  to="/PriacyMonitor">PriacyMonitor</NavLink></NavDropdown.Item>
        </NavDropdown>

        <NavDropdown
          title={
            <span>
              <FaBook className="nav-icon" /> {!isCollapsed && 'Settings'}
            </span>
          }
          id="nav-dropdown"
        >
          <NavDropdown.Item href="#course1"><NavLink className="text-decoration-none"  to="/Settings">Settings</NavLink></NavDropdown.Item>
        </NavDropdown>


      </Nav>
    </div>
    </div>
    </div>
  );
}

export default Sidebar;
