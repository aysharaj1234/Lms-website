import './App.css';
import Batch from './Components/Contents/Batch';
import Courses from './Components/Contents/Courses';
import Selenium from './Components/Contents/Selenium';
import LiveClasses from './Components/Contents/LiveClasses';
import MockTest from './Components/Contents/MockTest';
import Dashboard from './Components/Dashboard/Dashboard';
import { BrowserRouter, Route, Routes } from 'react-router-dom';
import Header from './Components/Header';
import TestSeries from './Components/Contents/TestSeries';
import Bundles from './Components/Contents/Bundles';
import InstructorBatch from './Components/Contents/InstructorBatch';
import BatchesIns from './Components/Contents/BatchesIns';
import Ebook from './Components/Contents/Ebook';
import Podcasts from './Components/Contents/Podcasts';
import Webinars from './Components/Contents/Webinars';
import DigitalProducts from './Components/Contents/DigitalProducts';
import FreeResource from './Components/Contents/FreeResource';
import Telegram from './Components/Contents/Telegram';
import Utilities from './Components/Contents/Utilities';
import LagacyQuestionPool from './Components/Contents/LagacyQuestionPool';
import QuestionPool from './Components/Contents/QuestionPool';
import Subscription from './Components/Contents/Subscription';
import Newsfeed from './Components/Contents/Newsfeed';
import Communties from './Components/Contents/Communties';
import Categories from './Components/Contents/Categories';
import Segments from './Components/Contents/Segments';
import Tags from './Components/Contents/Tags';
import './Style.css';

// rashmi code
import Website from './Components/WebsiteApp/Website';
import NavigationMenu from './Components/WebsiteApp/NavigationMenu';
import MobileApp from './Components/WebsiteApp/MobileApp';
import Branding from './Components/WebsiteApp/Branding';
import Embeddable from './Components/WebsiteApp/Embeddable';
import Language from './Components/WebsiteApp/Language';
import SignUp from './Components/WebsiteApp/SignUp';
import CustomField from './Components/WebsiteApp/CustomField';
import Groups from './Components/Users/Groups';
import Contacts from './Components/Users/Contacts';
import Learners from './Components/Users/Learners';
import CourseEncryption from './Components/Manage/CourseEncryption';
import Discussions from './Components/Manage/Discussions';
import RatingReview from './Components/Manage/RatingReview';
import LegacyAnswerReview from './Components/Manage/LegacyAnswerReview';
import AnswerReview from './Components/Manage/AnswerReview';
import LearnerSupport from './Components/Manage/LearnerSupport';
import AddOne from './Components/AddOne/AddOne';
import PriacyMonitor from './Components/PriacyMonitor/PriacyMonitor';
import Settings from './Components/Settings/Settings';
import Enrollments from './Components/Reports/Enrollments';
import Transactions from './Components/Reports/Transactions';
import PaymentGateways from './Components/Reports/PaymentGateways';
import Invoices from './Components/Reports/Invoices';
import ProgressScore from './Components/Reports/ProgressScore';
import SalesMarketing from './Components/Reports/SalesMarketing';
import LiveClassLagacy from './Components/Reports/LiveClassLagacy'; 
import LiveClassInsights from './Components/Reports/LiveClassInsights'; 
import CustomFields from './Components/Reports/CustomFields'; 
import DigitalEvaluation from './Components/Reports/DigitalEvaluation'; 
import Exports from './Components/Reports/Exports';
import BroadCastMessage from './Components/Reports/BroadCastMessage';
import MessengerInsights from './Components/Reports/MessengerInsights';
import LegacyReport from './Components/Reports/LegacyReport';
import Resource from './Components/Reports/Resource';
import Demo1 from './Components/Demo/Demo1';



function App() {
  return (
    <div>
      <BrowserRouter>
        <Routes>
          {/* Home Route */}
          <Route path="/" element={<Dashboard />} />

          General Routes
          <Route path='/courses' element={<Courses/>} />
          <Route path='/Selenium' element={<Selenium/>} />
          <Route path="/liveclasses" element={<LiveClasses/>} />
          <Route path="/mocktest" element={<MockTest />} />
          <Route path="/batch" element={<Batch />} />
          <Route path="/testseries" element={<TestSeries />} />
          <Route path="/bundles" element={<Bundles />} />
          <Route path="/ebook" element={<Ebook />} />
          <Route path="/podcasts" element={<Podcasts />} />
          <Route path="/webinars" element={<Webinars />} />
          <Route path="/DigitalProducts" element={<DigitalProducts/>} />
          <Route path="/FreeResource" element={<FreeResource/>} />
          <Route path="/Telegram" element={<Telegram/>} />
          <Route path="/Utilities" element={<Utilities/>} />
          <Route path="/LagacyQuestionPool" element={<LagacyQuestionPool/>} />
          <Route path="/QuestionPool" element={<QuestionPool/>} />
          <Route path="/Subscription" element={<Subscription/>} />
          <Route path="/Newsfeed" element={<Newsfeed/>} />
          <Route path="/Communties" element={<Communties/>} />
          <Route path="/Categories" element={<Categories/>} />
          <Route path="/Segments" element={<Segments/>} />
          <Route path="/Tags" element={<Tags/>} />
         
          
          {/* Rashmi's Routes */}
          <Route path="/website" element={<Website />} />
          <Route path="/NavigationMenu" element={<NavigationMenu />} />
          <Route path="/MobileApp" element={<MobileApp />} />
          <Route path="/Branding" element={<Branding />} />
          <Route path="/Embeddable" element={<Embeddable />} />
          <Route path="/Language" element={<Language />} />
          <Route path="/SignUp" element={<SignUp />} />
          <Route path="/CustomField" element={<CustomField />} />

          {/* User Routes */}
          <Route path="/Groups" element={<Groups />} />
          <Route path="/Contacts" element={<Contacts />} />
          <Route path="/Learners" element={<Learners />} />
{/* 
          Manage Routes */}
          <Route path="/CourseEncryption" element={<CourseEncryption />} />
          <Route path="/Discussions" element={<Discussions />} />
          <Route path="/RatingReview" element={<RatingReview />} />
          <Route path="/LegacyAnswerReview" element={<LegacyAnswerReview />} />
          <Route path="/AnswerReview" element={<AnswerReview />} />
          <Route path="/LearnerSupport" element={<LearnerSupport />} />
          <Route path="/AddOne" element={<AddOne />} />
          <Route path="/PriacyMonitor" element={<PriacyMonitor />} />
          <Route path="/Settings" element={<Settings />} />

          {/* Reports Routes */}
          <Route path="/Enrollments" element={<Enrollments />} />
          <Route path="/Transactions" element={<Transactions />} />
          <Route path="/PaymentGateways" element={<PaymentGateways />} />
          <Route path="/Invoices" element={<Invoices />} />
          <Route path="/Progressscore" element={<ProgressScore />} />
          <Route path="/SalesMarketing" element={<SalesMarketing />} />
          <Route path="/LiveClassLagacy" element={<LiveClassLagacy />} />
          <Route path="/LiveClassInsights" element={<LiveClassInsights />} />
          <Route path="/CustomFields" element={<CustomFields />} />
          <Route path="/DigitalEvaluation" element={<DigitalEvaluation />} />
          <Route path="/Exports" element={<Exports />} />
          <Route path="/BroadCastMessage" element={<BroadCastMessage />} />
          <Route path="/MessengerInsights" element={<MessengerInsights />} />
          <Route path="/LegacyReport" element={<LegacyReport/>} />
          <Route path="/Resource" element={<Resource/>} />
        </Routes> 
        
      </BrowserRouter>

  {/* <Demo1/> */}
    </div>
  );
}

export default App;
