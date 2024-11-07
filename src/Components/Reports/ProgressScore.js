import React from 'react';
import Sidebar from '../Sidebar';
import Header from './Header';

const ProgressScore = () => {
  return (
    <div>
      <Sidebar />
      <Header />
      {/* section-27 */}
      <div className='section-27'>
        <div className='container'>
          <div className='row'>
            <div className='col-12 col-md-6 col-sm-6'>
              <nav aria-label="breadcrumb">
                <ol className="breadcrumb">
                  <li className="breadcrumb-item"><a href="#">Dashboard</a></li>
                  <li className="breadcrumb-item active" aria-current="page">Progress & Score Reports</li>
                </ol>
              </nav>
              <h4 className='ms-5'>Progress & Score Reports</h4>
              <p className='ms-5'>All details analytics to evaluate the quality of the course and track the Learners activity.</p>
              <h5 className='ms-5 mt-5'>Progress</h5>
            </div>
          </div>
        </div>

        <div className="container mt-4">
          <div className="row">
            {[
              {
                title: "Course Progress",
                description: "View learners progress report for courses.",
                imgSrc: "https://www.dragnsurvey.com/blog/en/wp-content/uploads/2024/02/quiz-line-computer.jpg"
              },
              {
                title: "Test Series Progress",
                description: "View learners progress report Test Series.",
                imgSrc: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSIA1DNg07TSohJUH48ZjsWSg6PgJ7aCLrPsS_V-Y64rSHAdyOsYO1XJSoD03dr-0RTrRQ&usqp=CAU"
              },
              {
                title: "Bundle Progress",
                description: "View how bundles are performing and evaluate based on report.",
                imgSrc: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTa638ymUQ_2He44XbnkS4eR7gJfFjsuTJSMA&s"
              }
            ].map((card, index) => (
              <div className="col-md-4 col-sm-6 mb-4" key={index}>
                <div className="card" style={{ border: "1px solid lightgray" }}>
                  <img src={card.imgSrc} className="card-img-top" alt="..." style={{ maxWidth: "100%", height: "auto" }} />
                  <div className="card-body">
                    <h5 className="card-title">{card.title}</h5>
                    <p className="card-text">{card.description}</p>
                    <p className="card-text"><small className="text-body-secondary">View</small></p>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>

        <div className="container mt-3">
          <div className="row">
            {[
              {
                title: "Subscriptions Report",
                description: "View subscriptions performance total number of students enrolled.",
                imgSrc: "https://cdni.iconscout.com/illustration/premium/thumb/subscription-to-newsletter-illustration-download-in-svg-png-gif-file-formats--email-notify-notification-communication-subscribe-mail-assorted-pack-business-illustrations-4812384.png"
              },
              {
                title: "Ebook Progress",
                description: "View learners progress report for ebooks.",
                imgSrc: "https://media.istockphoto.com/id/1292677543/vector/digital-library-concept-man-and-women-read-online-book-on-screen-online-book-application-e.jpg?s=612x612&w=0&k=20&c=fwnlcqFlJvEcj4dbC8Y_TIAn2k_H-RYst_Gorm30G_Y="
              },
              {
                title: "Podcast Progress",
                description: "View learners progress report for podcasts.",
                imgSrc: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTteADC4p91k3djUHzNRVYTkYAr0VI9PMvjtQ&s"
              }
            ].map((card, index) => (
              <div className="col-md-4 col-sm-6 mb-4" key={index}>
                <div className="card" style={{ border: "1px solid lightgray" }}>
                  <img src={card.imgSrc} className="card-img-top" alt="..." style={{ maxWidth: "100%", height: "auto" }} />
                  <div className="card-body">
                    <h5 className="card-title">{card.title}</h5>
                    <p className="card-text">{card.description}</p>
                    <p className="card-text"><small className="text-body-secondary">View</small></p>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>

        <h5 className='ms-5 mt-5'>Scores</h5>
        <div className="container ms-4">
          <div className="row">
            {[
              {
                title: "Course Quiz Scores",
                description: "View learners score report for courses quizzes created.",
                imgSrc: "https://thumbs.dreamstime.com/b/online-test-concept-quiz-computer-education-learning-digital-device-isolated-vector-illustration-133354079.jpg"
              },
              {
                title: "Mock Test Progress",
                description: "View learners score report for mock Tests created.",
                imgSrc: "https://static.vecteezy.com/system/resources/thumbnails/009/352/659/small/online-test-illustration-concept-on-white-background-vector.jpg"
              },
              {
                title: "Test Series Scores",
                description: "View learners score report for section test series.",
                imgSrc: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQvmwPmtfhFWRnzJLmDg8136PBLGEiMfgdyKpur7MNkXNSymBg4FMw9rrlnANK0p-ZLkwI&usqp=CAU"
              }
            ].map((card, index) => (
              <div className="col-md-4 col-sm-6 mb-4" key={index}>
                <div className="card" style={{ border: "1px solid lightgray" }}>
                  <img src={card.imgSrc} className="card-img-top" alt="..." style={{ maxWidth: "100%", height: "auto" }} />
                  <div className="card-body">
                    <h5 className="card-title">{card.title}</h5>
                    <p className="card-text">{card.description}</p>
                    <p className="card-text"><small className="text-body-secondary">View</small></p>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>

        <h5 className='ms-5 mt-5'>Reports & Analysis</h5>
        <div className="container ms-4">
          <div className="row">
            <div className="col-md-4 col-sm-6 mb-4">
              <div className="card" style={{ border: "1px solid lightgray" }}>
                <img src="https://appsgeyser.com/blog/wp-content/uploads/2020/09/Animated-explainer-videos-for-apps-1024x576.png" className="card-img-top" alt="..." style={{ maxWidth: "100%", height: "auto" }} />
                <div className="card-body">
                  <h5 className="card-title">Play Store App Review</h5>
                  <p className="card-text">View reviews of your app on play store.</p>
                  <p className="card-text"><small className="text-body-secondary">View</small></p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}

export default ProgressScore;
