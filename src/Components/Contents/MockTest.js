import React, { useState } from "react";
import Sidebar from "../Dashboard/Sidebar";
import { Button, Form, InputGroup } from "react-bootstrap";
import { FaSync, FaPlus, FaFilter, FaArrowLeft } from "react-icons/fa"; // Added FaArrowLeft icon for back
import "./MockTest.css";
import Modal from "react-bootstrap/Modal";
import Header from "../Header";
import "bootstrap/dist/js/bootstrap.bundle.min.js";

function MockTest() {
  const [quizType, setQuizType] = useState(null);

  const values = [true];
  const [fullscreen, setFullscreen] = useState(true);
  const [show, setShow] = useState(false);

  function handleShow(breakpoint) {
    setFullscreen(breakpoint);
    setShow(true);
  }

  return (
    <>
      <div className="d-flex">
        <div>
          <Header />
        </div>
        <div>
          <Sidebar />
        </div>

        <section
  style={{
    marginLeft: "250px",
    width: "calc(100% - 250px)",
    height: "100vh",
    padding: "1rem",
    marginTop: "3.5rem",
  }}
>
          <div className="row">
            <div className="col-md-4">
              <h3>MockTest</h3>
              <p>Welcome to your Mocktest Dashboard</p>
            </div>
            <div className="col-md-8 d-flex justify-content-end align-items-center">
              <div className="button-group d-flex gap-2">
                {/* Reorder Button */}
                <Button
                  variant="light"
                  className="reorder-btn"
                  style={{ height: "40px" }}
                >
                  <FaSync className="icon" /> REORDER
                </Button>

                {/* Create Button */}
                {values.map((v, idx) => (
               <Button
               key={idx}
               className="me-2 mb-2 create-btn"
               variant="success"
               onClick={() => setShow(true)} // Directly setting to true
               style={{ height: "40px" }}
             >
               <FaPlus className="icon" /> CREATE
             </Button>
                ))}
                {/* Modal for CREATE button */}
                <Modal
                  show={show}
                  fullscreen={fullscreen}
                  onHide={() => setShow(false)} // Close modal on 'x' or backdrop click
                >
                  <Modal.Header closeButton>
                    {" "}
                    {/* Close button added */}
                    {/* Custom back button */}
                    <Button variant="light" onClick={() => setShow(false)}>
                      <FaArrowLeft /> {/* Back arrow icon */}
                    </Button>
                    <Modal.Title className="ms-2" style={{ fontSize: "18px" }}>
                      Back
                    </Modal.Title>
                  </Modal.Header>
                  <Modal.Body>
                    <div
                      className="container mt-8"
                      style={{ marginRight: "20px" }}
                    >
                      <div className="row">
                        <div className="col-md-6">
                          <span style={{ fontSize: "12px" }}>
                            MOCK TESTS /{" "}
                          </span>
                          <span style={{ fontSize: "12px" }}>
                            CREATE MOCK TEST
                          </span>
                          <h2 className="mt-3" style={{ fontSize: "20px" }}>
                            Create Mock Test
                          </h2>
                          <p style={{ fontSize: "15px" }}>
                            Start creating a new mock test
                          </p>

                          <Form>
                            {/* Title Input */}
                            <Form.Group className="mb-3">
                              <Form.Label style={{ fontSize: "15px" }}>
                                Title* <span className="text-muted">0/60</span>
                              </Form.Label>
                              <Form.Control
                                type="text"
                                placeholder="Enter mock test title"
                                maxLength={60}
                              />
                            </Form.Group>

                            {/* Price Input */}
                            <Form.Group className="mb-3">
                              <Form.Label style={{ fontSize: "15px" }}>
                                Price
                              </Form.Label>
                              <InputGroup>
                                <InputGroup.Text>₹</InputGroup.Text>
                                <Form.Control type="text" placeholder="Price" />
                              </InputGroup>
                              <Form.Check
                                type="checkbox"
                                label="Make this a free mock test"
                              />
                            </Form.Group>

                            {/* Quiz Type */}
                            <Form.Group className="mb-3">
                              <Form.Label style={{ fontSize: "15px" }}>
                                Quiz Type
                              </Form.Label>
                              <div className="d-flex flex-column">
                                <div
                                  style={{
                                    border: "1px solid #ccc",
                                    padding: "10px",
                                    borderRadius: "5px",
                                    marginBottom: "10px",
                                  }}
                                >
                                  <Form.Check
                                    style={{ fontSize: "15px" }}
                                    type="radio"
                                    id="onlineQuiz"
                                    label={
                                      <span>
                                        <strong>Online Quiz</strong> - Create
                                        online quiz by using competitive exam
                                        template
                                      </span>
                                    }
                                    name="quizType"
                                    onChange={() => setQuizType("online")}
                                  />
                                </div>
                                <div
                                  style={{
                                    border: "1px solid #ccc",
                                    padding: "10px",
                                    borderRadius: "5px",
                                  }}
                                >
                                  <Form.Check
                                    style={{ fontSize: "15px" }}
                                    type="radio"
                                    id="offlineQuiz"
                                    label={
                                      <span>
                                        <strong>Offline Quiz</strong> - Create
                                        offline quiz using essay type questions
                                        & digitally evaluate the answers
                                      </span>
                                    }
                                    name="quizType"
                                    onChange={() => setQuizType("offline")}
                                  />
                                </div>
                              </div>
                            </Form.Group>

                            {/* Template Selector */}
                            <Form.Group className="mb-3">
                              <Form.Label>Select Template</Form.Label>
                              <Form.Select>
                                <option>Select...</option>
                                {/* Add more template options here */}
                              </Form.Select>
                            </Form.Group>

                            {/* Action Buttons */}
                            <div className="d-flex justify-content-start gap-3">
                              <Button variant="success">CREATE</Button>
                              <Button
                                variant="secondary"
                                onClick={() => setShow(false)}
                              >
                                CANCEL
                              </Button>{" "}
                              {/* Close modal on Cancel */}
                            </div>
                          </Form>
                        </div>
                      </div>
                    </div>
                  </Modal.Body>
                </Modal>
              </div>
            </div>
          </div>

          {/* Search box and filter */}
          <div className="row mt-4">
            <div className="col-md-6">
              <div className="input-group mb-3 d-flex gap-2">
                <input
                  type="text"
                  className="form-control "
                  placeholder="search by title (alt+k or cmd+k)"
                  aria-label="Search by title"
                />
                <button
                  className="btn btn-primary"
                  type="button"
                  style={{ backgroundColor: "blue", color: "white" }}
                >
                  Search
                </button>
                <div className="ms-2">
                  <Button variant="light" className="filter-btn">
                    <FaFilter className="icon" /> Add Filter
                  </Button>
                </div>
              </div>
            </div>

            {/* Align the "Filter By Published Date" button to the right */}
            <div className="col-md-6 d-flex justify-content-end">
              <Button
                variant="light"
                className="filter-btn"
                style={{ height: "40px" }}
              >
                Filter By Published Date
              </Button>
            </div>
          </div>
        </section>
      </div>
    </>
  );
}

export default MockTest;
