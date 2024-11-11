import React, { useState } from 'react';
import './Sidebar.css';
import { Link, NavLink } from 'react-router-dom';

const Sidebar = () => {
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

        
<div className="sidenav border" style={{backgroundColor:"white"}}>
<Link to={'/'}><i class="fa-solid fa-house"></i><span className='ms-2'>Dashboard</span></Link>

      {/* contents folder */}
        <button className="dropdown-btn" onClick={handleDropdownClick}><i class="fa-solid fa-book-bookmark"></i>
        <span className='ms-2'> Contents</span>
          <i className="fa fa-caret-down"></i>
        </button>

        <div
          className="dropdown-container"
          style={{ display: isDropdownOpen ? 'block' : 'none' }}
        >
             <a href="courses">Courses</a>
          <a href="liveclasses">LiveClasses</a>
          <a href="mocktest">MockTest</a>
          <a href="testseries">TestSeries</a>
          <a href="bundles">Bundles</a>
          <a href="batch">Batch</a>
          <a href="ebook">Ebook</a>
          <a href="podcasts">Podcasts</a>
          <a href="webinars">Webinars</a>
          <a href="freeresource">FreeResource</a>
          <a href="telegram">Telegram</a>
          <a href="lagacyquestion">LagacyQuestionPool</a>
          <a href="questionpool">QuestionPool</a>
          <a href="subscription">Subscription</a>
          <a href="newsfeed">Newsfeed</a>
          <a href="communties">Communties</a>
          <a href="categories">Categories</a>
          <a href="segments">Segments</a>
          <a href="tags">Tags</a>
        </div>


{/* website folder */}
        <button className="dropdown-btn" onClick={handleDropdownClick1}> <i class="fa-solid fa-globe"></i>
        <span className='ms-2'>Website & Apps</span>
          <i className="fa fa-caret-down"></i>
        </button>
        <div
          className="dropdown-container"
          style={{ display: isDropdownOpen1 ? 'block' : 'none' }}
        >
          <a href="website">Website</a>
          <a href="navigationmenu">NavigationMenu</a>
          <a href="mobileapp">MobileApp</a>
          <a href="branding">Branding</a>
          <a href="embeddable">Embeddable</a>
          <a href="language">Language</a> 
          <a href="signup">SignUp</a>
          <a href="customfields">CustomFields</a>

        </div>


  
        {/* users folder */}
        <button className="dropdown-btn" onClick={handleDropdownClick2}> <i class="fa-solid fa-user"></i>
        <span className='ms-2'>Users</span>
          <i className="fa fa-caret-down"></i>
        </button>
        <div
          className="dropdown-container"
          style={{ display: isDropdownOpen2 ? 'block' : 'none' }}
        >
          <a href="groups">Groups</a>
          <a href="learners">Learners</a>
          <a href="contacts">Contacts</a>

        </div>



              {/* marketing */}

              <button className="dropdown-btn" onClick={handleDropdownClick3}> <i class="fa-solid fa-chart-simple"></i>
              <span className='ms-2'>Marketing</span>
          <i className="fa fa-caret-down"></i>
        </button>
        <div
          className="dropdown-container"
          style={{ display: isDropdownOpen3 ? 'block' : 'none' }}
        >
        </div>


        {/* Reports */}
        <button className="dropdown-btn" onClick={handleDropdownClick4}> <i class="fa-solid fa-book"></i>
        <span className='ms-1'>Reports</span>
          <i className="fa fa-caret-down"></i>
        </button>
        <div
          className="dropdown-container"
          style={{ display: isDropdownOpen4 ? 'block' : 'none' }}
        >
            <a href="enrollments">Enrollments</a>
          <a href="transactions">Transactions</a>
          <a href="paymentgateways">PaymentGateways</a>
          <a href="progressscore">ProgressScore</a>
          <a href="salesmarketing">SalesMarketing</a>
          <a href="liveclasslagacy">LiveClassLagacy</a> 
          <a href="liveclassinsights">LiveClassInsights</a>
          <a href="customfields">CustomFields</a>
          <a href="digitalevaluation">DigitalEvaluation</a> 
          <a href="exports">Exports</a>
          <a href="broadcastmessage">BroadCastMessage</a>
          <a href="messengerinsights">MessengerInsights</a>
          <a href="legacyreport">LegacyReport</a>
          <a href="resource">Resource</a>
        </div>


        {/* manage */}
        <button className="dropdown-btn" onClick={handleDropdownClick5}> <i class="fa-solid fa-people-roof"></i>
        <span className='ms-2'>Manage</span>
          <i className="fa fa-caret-down"></i>
        </button>
        <div
          className="dropdown-container"
          style={{ display: isDropdownOpen5 ? 'block' : 'none' }}
        >
          <a href="courseencryption">CourseEncryption</a>
          <a href="discussions">Discussions</a>
          <a href="ratingreview">RatingReview</a>
          <a href="legacyanswerreview">LegacyAnswerReview</a>
          <a href="answerreview">AnswerReview</a>
          <a href="learnersupport">LearnerSupport</a> 
        </div>


{/* AddOne */}

<button className="dropdown-btn" onClick={handleDropdownClick6}> <i class="fa-solid fa-file-circle-plus"></i>
<span className='ms-2'>AddOne</span>
          <i className="fa fa-caret-down"></i>
        </button>
        <div
          className="dropdown-container"
          style={{ display: isDropdownOpen6 ? 'block' : 'none' }}
        >
         <a href="addone">AddOne</a>
          
        </div>

        {/* PriacyMonitor */}

        <button className="dropdown-btn" onClick={handleDropdownClick7}> <i class="fa-solid fa-tv"></i>
        <span className='ms-2'>PriacyMonitor</span>
          <i className="fa fa-caret-down"></i>
        </button>
        <div
          className="dropdown-container"
          style={{ display: isDropdownOpen7 ? 'block' : 'none' }}
        >
          <a href="priacymonitor">PriacyMonitor</a>
          
        </div>

        {/* Settings */}
        <button className="dropdown-btn" onClick={handleDropdownClick8}> <i class="fa-solid fa-gear"></i>
        <span className='ms-2'>Settings</span>
          <i className="fa fa-caret-down"></i>
        </button>
        <div
          className="dropdown-container"
          style={{ display: isDropdownOpen8 ? 'block' : 'none' }}
        >
          <a href="settings">Settings</a>
          
        </div>



      </div>
    </div>
  );
};

export default Sidebar;
