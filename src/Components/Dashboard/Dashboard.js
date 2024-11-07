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
            <div className="flex-grow-1" style={{ marginLeft: '250px',zIndex:"-99",marginTop:"3.5rem" }}> {/* Adjusted offset */}
                <Container fluid className="p-4">
                    <h4 className="mb-4">Welcome, Jai Rastogi</h4>

                    <Row>
                        <Col lg={7}>
                            <Card className="mb-3 p-3 shadow-sm">
                                <Row>
                                    <Col>
                                        <div className="text-muted">Total Sales</div>
                                        <h4>₹ 27,447</h4>
                                    </Col>
                                    <Col>
                                        <div className="text-muted">Products</div>
                                        <h4>1</h4>
                                    </Col>
                                    <Col>
                                        <div className="text-muted">Learners</div>
                                        <h4>14</h4>
                                    </Col>
                                </Row>
                            </Card>
                        </Col>

                        <Col lg={5}>
                            <Card className="shadow-sm">
                                <Card.Header className="bg-white">
                                    <strong>Scheduled Events</strong>
                                </Card.Header>
                                <Card.Body className="d-flex align-items-center">
                                    <div className="me-3">
                                        <div className="bg-light rounded-circle text-center" style={{ width: '40px', height: '40px' }}>
                                            <span style={{ lineHeight: '40px', color: '#4CAF50' }}>L</span>
                                        </div>
                                    </div>
                                    <div>
                                        <h6 className="mb-0">Live Lesson 1</h6>
                                        <small>07-Oct-2024 • 8:00 PM</small>
                                    </div>
                                </Card.Body>
                            </Card>
                        </Col>
                    </Row>

                    <Row className="mt-4">
                        <Col md={7}>
                            <Card className="p-3 mb-4">
                                <h5>Sales (12 Months)</h5>
                                <Row>
                                    <Col>
                                        <div>Total Sales</div>
                                        <h4>₹ 27,447</h4>
                                    </Col>
                                    <Col>
                                        <div>Online Sales</div>
                                        <h4>₹ 12,447</h4>
                                    </Col>
                                    <Col>
                                        <div>Direct Sales</div>
                                        <h4>₹ 15,000</h4>
                                    </Col>
                                </Row>
                            </Card>

                            <Card className="p-3">
                                <h5>Monthly Sales</h5>
                                <Bar data={salesData} options={options} />
                            </Card>
                        </Col>

                        <Col md={5}>
                            <Card className="mb-3 p-3">
                                <Card.Body>
                                    <h5>Pending Tasks</h5>
                                    <ListGroup variant="flush">
                                        <ListGroup.Item className="d-flex justify-content-between align-items-center">
                                            <div className="d-flex align-items-center">
                                                <BsHeadset className="me-2" />
                                                <span>Support Tickets</span>
                                            </div>
                                            <div>No Pending Task</div>
                                        </ListGroup.Item>

                                        <ListGroup.Item className="d-flex justify-content-between align-items-center">
                                            <div className="d-flex align-items-center">
                                                <BsChatDots className="me-2" />
                                                <span>Unanswered Discussions</span>
                                            </div>
                                            <div>No Pending Task</div>
                                        </ListGroup.Item>

                                        <ListGroup.Item className="d-flex justify-content-between align-items-center">
                                            <div className="d-flex align-items-center">
                                                <BsStar className="me-2" />
                                                <span>Ratings & Reviews</span>
                                            </div>
                                            <div>No Pending Task</div>
                                        </ListGroup.Item>
                                    </ListGroup>
                                </Card.Body>
                            </Card>
                        </Col>
                    </Row>
                </Container>
            </div>
        </div>
    );
}

export default Dashboard;
