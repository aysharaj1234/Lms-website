import React, { useState } from 'react';
import './Sidebar.css';
import 'bootstrap/dist/css/bootstrap.min.css';
import { Nav, NavDropdown } from 'react-bootstrap';
import { FaHome, FaBars, FaBook, FaClipboardList, FaChartLine } from 'react-icons/fa';
import { FiUsers, FiFileText, FiSettings, FiBox } from 'react-icons/fi';
import { NavLink } from 'react-router-dom';

function Sidebar() {
  const [isCollapsed, setIsCollapsed] = useState(false);

  const toggleSidebar = () => {
    setIsCollapsed(!isCollapsed);
  };

  return (
    <div className={`sidebar d-flex flex-column bg-light p-3 ${isCollapsed ? 'collapsed' : ''}`} style={{top:"3.5rem"}}>
      <div className="sidebar-header d-flex justify-content-between align-items-center">
        <FaBars className="toggle-btn" onClick={toggleSidebar} />
        {!isCollapsed && <h4>My App</h4>}
      </div>
      <Nav className="flex-column">
        <Nav.Link className="nav-item">
          <FaHome className="nav-icon" /> {!isCollapsed && <NavLink to='/'>Dashboard</NavLink>}
        </Nav.Link>
        <NavDropdown
      title={
        <span>
          <FaBook className="nav-icon" /> {!isCollapsed && "Contents"}
        </span>
      }
      className="nav-dropdown-scrollable"  // Apply the scrollable class
    >
          <NavDropdown.Item href="#course1"><NavLink to="/Courses">Course</NavLink></NavDropdown.Item>
          <NavDropdown.Item href="#course2"> <NavLink to='/liveclasses'>Live Classes </NavLink></NavDropdown.Item>
          <NavDropdown.Item href="#course3"><NavLink to='/mocktest'>Mock Test</NavLink> </NavDropdown.Item>
          <NavDropdown.Item href="#course4"><NavLink to='/testseries'>Test Series</NavLink></NavDropdown.Item>
          <NavDropdown.Item href="#course5"><NavLink to='/bundles'>Bundles</NavLink></NavDropdown.Item>
          <NavDropdown.Item href="#course6"><NavLink to='/batch'>Batch</NavLink></NavDropdown.Item>
          <NavDropdown.Item href="#course7"><NavLink to='/ebook'>Ebook</NavLink></NavDropdown.Item>
          <NavDropdown.Item href="#course8"><NavLink to='/podcasts'>Podcasts</NavLink></NavDropdown.Item>
          <NavDropdown.Item href="#course9"><NavLink to='/webinar'>Webinar</NavLink></NavDropdown.Item>
          <NavDropdown.Item href="#course10"><NavLink>Digital Product</NavLink></NavDropdown.Item>
          <NavDropdown.Item href="#course11"><NavLink>Free Resources</NavLink></NavDropdown.Item>
          <NavDropdown.Item href="#course12"><NavLink>Telegram</NavLink></NavDropdown.Item>
          <NavDropdown.Item href="#course13"><NavLink>Utilities</NavLink></NavDropdown.Item>
          <NavDropdown.Item href="#course14"><NavLink>Legacy Question Pool</NavLink></NavDropdown.Item>
          <NavDropdown.Item href="#course15"><NavLink>Question Pool</NavLink></NavDropdown.Item>
          <NavDropdown.Item href="#course16"><NavLink>Subscription</NavLink></NavDropdown.Item>
          <NavDropdown.Item href="#course17"><NavLink>NewsFeed</NavLink></NavDropdown.Item>
        </NavDropdown>
         <NavDropdown
          title={
            <span>
              <FaBook className="nav-icon" /> {!isCollapsed && 'Websites $ Apps'}
            </span>
          }
          id="nav-dropdown"
        >
          <NavDropdown.Item href="#course1"><NavLink to="/website">Website</NavLink></NavDropdown.Item>
          <NavDropdown.Item href='#course1'><NavLink to="/NavigationMenu">NavigationMenu</NavLink></NavDropdown.Item>
          <NavDropdown.Item href="#course3"><NavLink to="/MobileApp">MobileApp</NavLink></NavDropdown.Item>
          <NavDropdown.Item href="#course4"> <NavLink to="/Branding">Branding</NavLink></NavDropdown.Item>
          <NavDropdown.Item href="#course5"> <NavLink to="/Embeddable">Embeddable</NavLink></NavDropdown.Item>
          <NavDropdown.Item href="#course6"><NavLink to="/Language">Language</NavLink></NavDropdown.Item>
          <NavDropdown.Item href="#course7"><NavLink to="/SignUp">SignUp</NavLink></NavDropdown.Item>
          <NavDropdown.Item href="#course8"><NavLink to="/CustomField">CustomFields</NavLink></NavDropdown.Item>
        </NavDropdown>
        <Nav.Link className="nav-item">
          <FaChartLine className="nav-icon" /> {!isCollapsed && "Marketing"}
        </Nav.Link>
        <Nav.Link className="nav-item">
          <FiUsers className="nav-icon" /> {!isCollapsed && "Users"}
        </Nav.Link>
        <Nav.Link className="nav-item">
          <FiFileText className="nav-icon" /> {!isCollapsed && "Reports"}
        </Nav.Link>
        <Nav.Link className="nav-item">
          <FiSettings className="nav-icon" /> {!isCollapsed && "Manage"}
        </Nav.Link>
        <Nav.Link className="nav-item">
          <FiBox className="nav-icon" /> {!isCollapsed && "Add-Ons"}
        </Nav.Link>
      </Nav>
    </div>
  );
}

export default Sidebar;
