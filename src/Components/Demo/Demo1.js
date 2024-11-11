import React, { useState } from 'react';
import './Stylee.css';
import { Link, NavLink } from 'react-router-dom';

const Demo1 = () => {
  const [isDropdownOpen, setIsDropdownOpen] = useState(false);
  const [isDropdownOpen1, setIsDropdownOpen1] = useState(false);
  const [isDropdownOpen2, setIsDropdownOpen2] = useState(false);
  const [isDropdownOpen3, setIsDropdownOpen3] = useState(false);
  const [isDropdownOpen4, setIsDropdownOpen4] = useState(false);
  const [isDropdownOpen5, setIsDropdownOpen5] = useState(false);
  const [isDropdownOpen6, setIsDropdownOpen6] = useState(false);
  const [isDropdownOpen7, setIsDropdownOpen7] = useState(false);
  const [isDropdownOpen8, setIsDropdownOpen8] = useState(false);

  // Toggle dropdown visibility
  const handleDropdownClick = () => {
    setIsDropdownOpen(!isDropdownOpen);
  };

  
  const handleDropdownClick1 = () => {
    setIsDropdownOpen1(!isDropdownOpen1);
  };

  const handleDropdownClick2 = () => {
    setIsDropdownOpen2(!isDropdownOpen2);
  };


  const handleDropdownClick3 = () => {
    setIsDropdownOpen3(!isDropdownOpen3);
  };

  const handleDropdownClick4 = () => {
    setIsDropdownOpen4(!isDropdownOpen4);
  };

  const handleDropdownClick5 = () => {
    setIsDropdownOpen5(!isDropdownOpen5);
  };

  const handleDropdownClick6 = () => {
    setIsDropdownOpen6(!isDropdownOpen6);
  };


  const handleDropdownClick7 = () => {
    setIsDropdownOpen7(!isDropdownOpen7);
  };


  const handleDropdownClick8 = () => {
    setIsDropdownOpen8(!isDropdownOpen8);
  };


  return (
    <div>

        
      <div className="sidenav">
      <a href="#about">  <i class="fa-solid fa-house"></i>  Dashboard</a>
       

      {/* contents folder */}
        <button className="dropdown-btn" onClick={handleDropdownClick}><i class="fa-solid fa-book-bookmark"></i>
        Contents
          <i className="fa fa-caret-down"></i>
        </button>

        <div
          className="dropdown-container"
          style={{ display: isDropdownOpen ? 'block' : 'none' }}
        >
           <a href="#">Courses</a>
          <a href="#">LiveClasses</a>
          <a href="#">MockTest</a>
          <a href="#">TestSeries</a>
          <a href="#">Bundles</a>
          <a href="#">Batch</a>
          <a href="#">Ebook</a>
          <a href="#">Podcasts</a>
          <a href="#">Webinars</a>
          <a href="#">FreeResource</a>
          <a href="#">Telegram</a>
          <a href="#">LagacyQuestionPool</a>
          <a href="#">QuestionPool</a>
          <a href="#">Subscription</a>
          <a href="#">Newsfeed</a>
          <a href="#">Communties</a>
          <a href="#">Categories</a>
          <a href="#">Segments</a>
          <a href="#">Tags</a>
        </div>


{/* website folder */}
        <button className="dropdown-btn" onClick={handleDropdownClick1}> <i class="fa-solid fa-globe"></i>
      Website & Apps
          <i className="fa fa-caret-down"></i>
        </button>
        <div
          className="dropdown-container"
          style={{ display: isDropdownOpen1 ? 'block' : 'none' }}
        >
          <a href="#">Website</a>
          <a href="#">NavigationMenu</a>
          <a href="#">MobileApp</a>
          <a href="#">Branding</a>
          <a href="#">Embeddable</a>
          <a href="#">Language</a> 
          <a href="#">SignUp</a>
          <a href="#">CustomFields</a>

        </div>


  
        {/* users folder */}
        <button className="dropdown-btn" onClick={handleDropdownClick2}> <i class="fa-solid fa-user"></i>
 Users
          <i className="fa fa-caret-down"></i>
        </button>
        <div
          className="dropdown-container"
          style={{ display: isDropdownOpen2 ? 'block' : 'none' }}
        >
          <a href="#">Groups</a>
          <a href="#">Learners</a>
          <a href="#">Contacts</a>

        </div>



              {/* marketing */}

              <button className="dropdown-btn" onClick={handleDropdownClick3}> <i class="fa-solid fa-chart-simple"></i>
   marketing
          <i className="fa fa-caret-down"></i>
        </button>
        <div
          className="dropdown-container"
          style={{ display: isDropdownOpen3 ? 'block' : 'none' }}
        >
        </div>


        {/* Reports */}
        <button className="dropdown-btn" onClick={handleDropdownClick4}> <i class="fa-solid fa-book"></i>
   Reports
          <i className="fa fa-caret-down"></i>
        </button>
        <div
          className="dropdown-container"
          style={{ display: isDropdownOpen4 ? 'block' : 'none' }}
        >
          <a href="#">Enrollments</a>
          <a href="#">Transactions</a>
          <a href="#">PaymentGateways</a>
          <a href="#">ProgressScore</a>
          <a href="#">SalesMarketing</a>
          <a href="#">LiveClassLagacy</a> 
          <a href="#">LiveClassInsights</a>
          <a href="#">CustomFields</a>
          <a href="#">DigitalEvaluation</a> 
          <a href="#">Exports</a>
          <a href="#">BroadCastMessage</a>
          <a href="#">MessengerInsights</a>
          <a href="#">LegacyReport</a>
          <a href="#">Resource</a>
        </div>


        {/* manage */}
        <button className="dropdown-btn" onClick={handleDropdownClick5}> <i class="fa-solid fa-people-roof"></i>
 Manage
          <i className="fa fa-caret-down"></i>
        </button>
        <div
          className="dropdown-container"
          style={{ display: isDropdownOpen5 ? 'block' : 'none' }}
        >
          <a href="#">CourseEncryption</a>
          <a href="#">Discussions</a>
          <a href="#">RatingReview</a>
          <a href="#">LegacyAnswerReview</a>
          <a href="#">AnswerReview</a>
          <a href="#">LearnerSupport</a> 
        </div>


{/* AddOne */}

<button className="dropdown-btn" onClick={handleDropdownClick6}> <i class="fa-solid fa-file-circle-plus"></i>
AddOne
          <i className="fa fa-caret-down"></i>
        </button>
        <div
          className="dropdown-container"
          style={{ display: isDropdownOpen6 ? 'block' : 'none' }}
        >
          <a href="#">AddOne</a>
          
        </div>

        {/* PriacyMonitor */}

        <button className="dropdown-btn" onClick={handleDropdownClick7}> <i class="fa-solid fa-tv"></i>
        PriacyMonitor
          <i className="fa fa-caret-down"></i>
        </button>
        <div
          className="dropdown-container"
          style={{ display: isDropdownOpen7 ? 'block' : 'none' }}
        >
          <a href="#">PriacyMonitor</a>
          
        </div>

        {/* Settings */}
        <button className="dropdown-btn" onClick={handleDropdownClick8}> <i class="fa-solid fa-gear"></i>
       Settings
          <i className="fa fa-caret-down"></i>
        </button>
        <div
          className="dropdown-container"
          style={{ display: isDropdownOpen8 ? 'block' : 'none' }}
        >
          <a href="#">Settings</a>
          
        </div>



      </div>
    </div>
  );
};

export default Demo1;
