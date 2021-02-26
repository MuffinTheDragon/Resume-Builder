import React from 'react';
import styles from "./ExperienceForm.module.css";
import {Row, Col, Accordion, Card } from "react-bootstrap";
import {FontAwesomeIcon} from '@fortawesome/react-fontawesome'
import {faTrashAlt} from '@fortawesome/free-solid-svg-icons';

function ExperienceForm(prop) {

    function handleClick(e) {
        e.preventDefault();
        console.log('The link was clicked.');
    }

    return (
        <>
            <Accordion defaultActiveKey={"0"}>
                <Card>
                    <Accordion.Toggle as={Card.Header} eventKey={"0"}>
                        <h2>{prop.title}</h2>
                    </Accordion.Toggle>
                    <Accordion.Collapse eventKey={"0"}>
                        <Card.Body>
                                <Row>
                                    <Col xs={12} md={12} lg={12} xl={6}>
                                        <label htmlFor="projectName">Company Name</label><br></br>
                                        <input type="text" id="companyName" name="companyName"></input>
                                    </Col>
                                    <Col xs={12} md={12} lg={12} xl={6}>
                                        <label htmlFor="role">Role</label><br></br>
                                        <input type="text" id="role" name="role"></input>
                                    </Col>
                                </Row>
                                <Row>
                                    <Col xs={12} md={12} lg={12} xl={5}>
                                        <label htmlFor="startDate">Start Date</label><br></br>
                                        <input type="month" id="startDate" name="startDate"></input>
                                    </Col>
                                    <Col xs={12} md={12} lg={12} xl={5}>
                                        <label htmlFor="endDate">End Date</label><br></br>
                                        <input type="month" id="endDate" name="endDate"></input>
                                    </Col>
                                    <Col xs={12} md={12} lg={12} xl={2}>
                                        <label htmlFor="location">Location</label><br></br>
                                        <input type="text" id="location" name="location"></input>
                                    </Col>
                                </Row>
                                <Row>
                                    <Col xs={12} md={12} lg={12} xl={12}>
                                        <label htmlFor="description">Description</label><br></br>
                                        <textarea id="description" name="description" className="w-100"></textarea>
                                    </Col>
                                </Row>
                                
                                <Row className="d-flex justify-content-end mt-4 mr-1">
                                        <button type="button" onClick={handleClick} className={styles.decline} >
                                            <FontAwesomeIcon icon={faTrashAlt}/>
                                        </button>
                                </Row>
                        </Card.Body>
                    </Accordion.Collapse>
                </Card>
            </Accordion>
        </>
    )
};

export default ExperienceForm;
