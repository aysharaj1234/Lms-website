import React from 'react';
import 'bootstrap/dist/css/bootstrap.min.css';
import Sidebar from './Sidebar';
import { Container, Row, Col, Card, ListGroup } from 'react-bootstrap';
import { Bar } from 'react-chartjs-2';
import 'chart.js/auto';
import './Dashboard.css'; 
import { BsHeadset, BsChatDots, BsStar } from 'react-icons/bs';
import Header from '../Header';

function Dashboard() {
    const salesData = {
        labels: ['Sep \'24'],
        datasets: [
            {
                label: 'Online Sales',
                backgroundColor: '#6A5ACD',
                data: [12447],
            },
            {
                label: 'Direct Sales',
                backgroundColor: '#F4A460',
                data: [15000],
            },
        ],
    };

    const options = {
        responsive: true,
        plugins: {
            legend: {
                position: 'top',
            },
        },
        scales: {
            y: {
                beginAtZero: true,
            },
        },
    };

    return (
        <div className="d-flex">
            <div>
                <Header/>
            </div>
            <div>
            <Sidebar />
            </div>
            <div className="flex-grow-1" style={{ marginLeft: '250px',zIndex:"-99",marginTop:"3.5rem" }}></div>
            <div className="container mt-5">
              <h3 className='pt-5'>Welcome to Rastogi?</h3>
              <div className="row pt-3">
                <div className="col-12 col-lg-8 mb-3">
                  <div className='d-flex border justify-content-around rounded'>
                  <div className=" ">
                  <p>Total Products</p>
                  <h5>&#8377;  27,447</h5>
                  </div>

                  <div className="">
                  <p>Products</p>
                  <h5>1</h5>
                  </div>

                  <div className="">
                  <p>Learners</p>
                  <h5>14</h5>
                  </div>
                  </div>

                  <div className='d-flex gap-5 baseline  border rounded mt-3 '>
                  <a href="#" className='activate mb-0  p-3' style={{marginLeft:"20px"}}>Sales</a>
                  <a href="#" className='mb-0 p-3'>Learners</a>
                  <a href="#" className='mb-0 p-3'>Orders</a>
                  <a href="#" className='mb-0 p-3'>Apps</a>
                  </div>

                  <div className=' mt-3 rounded  border'>
                    <h5 className='p-3 fw-bold'>Sales(12 Months)</h5>

                  <div className='d-flex justify-content-around '>
                  <div className=" ">
                  <p>Total Products</p>
                  <h5>&#8377;  27,447</h5>
                  </div>

                  <div className="">
                  <p>Online Sales</p>
                  <h5>&#8377;  12,447</h5>
                  </div>

                  <div className="">
                  <p>Direct Sales</p>
                  <h5>&#8377;  15,000</h5>
                  </div>
                  </div>
                  </div>

                  <div className='infographic mt-3 ' >
                    <div className=' border media rounded p-2' >
                        <h5 className='fw-bold p-3'> Monthly Sales</h5>

                        <p className=' fw-semibold ps-3 pt-0'>- (For Sep 2024)</p>
                        <p className='p-3 py-0'> <i class="fa-solid fa-left-right bg-light p-2 rounded "></i> in selected time</p>
                        <div className='d-flex gap-1'>
                            <p className='p-3 pt-0'><i class="fa-solid fa-square-full " style={{color:"#563D7C"}}></i> Online Sales</p>
                            <p className='p-3 pt-0'> <i class="fa-solid fa-square-full text-warning "></i> Direct Sales</p>
                        </div>


                        <div className=''  style={{borderBottom:"1px solid gray" , paddingLeft:"20px"}}>
                            <p className='mb-0  '>30k</p>

                        </div>
                        <br />

                        <div className=''  style={{borderBottom:"1px solid gray" , paddingLeft:"20px"}}>
                            <p className='mb-0 '>25k</p>

                        </div>
                        <br />

                        <div className=''  style={{borderBottom:"1px solid gray" , paddingLeft:"20px"}}>
                            <p className='mb-0 '>20k</p>

                        </div>
                        <br />

                        <div className=''  style={{borderBottom:"1px solid gray" , paddingLeft:"20px"}}>
                            <p className='mb-0 '>15k</p>

                        </div>

                        <br />

                       <div className=''  style={{borderBottom:"1px solid gray" , paddingLeft:"20px"}}>
                           <p className='mb-0 '>10k</p>

                       </div>

                       <br />

                       <div className=''  style={{borderBottom:"1px solid gray" , paddingLeft:"20px"}}>
                           <p className='mb-0 '>5k</p>

                       </div>

                       <br />

                       <div className=''  style={{borderBottom:"1px solid gray" , paddingLeft:"20px"}}>
                           <p className='mb-0 '>0</p>

                       </div>

                       <div className='text-center'>
                  <p className='fw-semibold'>Sep  24 <br /> Timeline</p>

                  </div>
                  <div className='main' >
                      <div className='scoda' >

                      </div>
                      <div className='virtus'>

                      </div>
                      </div>


                    </div>





                  </div>


                </div>
                <div className="col-12 col-lg-4 cursor ">
                  <div className=' border rounded p-3 for-hover '>

                    <p className='ps-2'>Schedualed Events <span className='bg-warning fs-6  d-inline-block  text-center  rounded-5 text-white '  style={{width:"25px" ,height:"25px"}}> 1</span></p>


                    <div  className='d-flex '>

                    <i class="fa-solid fa-l text-center p-2 fs-6 bg-secondary text-white rounded-5 mt-2 " style={{width:"40px" ,height:"40px"}}></i>
                      <div>
                    <h5 className=''>Live lesson 1</h5>
                    <p>07-Oct-2024 - 8:00 PM</p>
                    </div>


                    </div>
                  </div>
                  <div className=' border rounded mt-3 p-3 for-hover '>

                    <p className='ps-2'>Pendding Tasks</p>
                    <div  className='d-flex'>
                    <i class="fa-solid fa-headphones text-center p-2 fs-6  pt-2 bg-light rounded-5 mt-2" style={{width:"40px" ,height:"40px"}}
                      ></i>
                      <div>
                    <h5>Support Tickets</h5>
                    <p>No Pending Task</p>
                    </div>


                    </div>



                    </div>

                    <div className=' border rounded mt-1 p-3 d-flex for-hover  '>

                    <i class="fa-regular fa-message text-center fs-6 p-2 pt-2 mt-2 bg-light rounded-5" style={{width:"40px" ,height:"40px"}}></i>

                    <div>
                    <h5>Unanswered Discussions</h5>
                    <p>No Pending Task</p>
                    </div>


                    </div>

                     <div className=' border rounded mt-1 p-3 d-flex for-hover '>


                     <i class="fa-solid fa-star text-center mt-2 pt-2 fs-6 p-2 bg-light rounded-5"  style={{width:"40px" ,height:"40px"}}></i>

                    <div>
                    <h5>Ratings & Reviews</h5>
                    <p>No Pending Task</p>
                    </div>

                    </div>



                </div>
              </div>

            </div>
        </div>
    );
}

export default Dashboard;
