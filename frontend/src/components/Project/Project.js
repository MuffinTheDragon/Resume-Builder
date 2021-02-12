import React from 'react';
import styles from "./Project.module.css";
import shared from "../Shared.module.css";
import {Accordion, Card} from "react-bootstrap";
import {FontAwesomeIcon} from '@fortawesome/react-fontawesome'
import {faCheck, faTimesCircle} from '@fortawesome/free-solid-svg-icons'

function Project() {
    return (
        <div className={shared}>
            <Accordion defaultActiveKey={"0"}>
                <Card>
                    <Accordion.Toggle as={Card.Header} eventKey={"0"}>
                        Project
                    </Accordion.Toggle>
                    <Accordion.Collapse eventKey={"0"}>
                        <Card.Body>
                            <div className={styles.project}>
                                <form>
                                    <h3>Project</h3>
                                    <div className={styles.formRow}>
                                        <div>
                                            <label htmlFor="projectName">Project Name</label><br></br>
                                            <input type="text" id="projectName" name="projectName"></input>
                                        </div>
                                        <div>
                                            <label htmlFor="projectURL">Project URL</label><br></br>
                                            <input type="text" id="projectURL" name="projectURL"></input>
                                        </div>
                                    </div>
                                    <div className={styles.formRow}>
                                        <div>
                                            <label htmlFor="startDate">Start Date</label><br></br>
                                            <input type="text" id="startDate" name="startDate"></input>
                                        </div>
                                        <div>
                                            <label htmlFor="endDate">End Date</label><br></br>
                                            <input type="text" id="endDate" name="endDate"></input>
                                        </div>
                                    </div>
                                    <div className={styles.description}>
                                        <div>
                                            <label htmlFor="description">Description</label><br></br>
                                            <input type="text" id="description" name="description"></input>
                                        </div>
                                    </div>
                                    <div className={styles.submit}>
                                        <div>
                                            <FontAwesomeIcon className={styles.accept} icon={faCheck}/>
                                        </div>
                                        <div>
                                            <FontAwesomeIcon className={styles.decline} icon={faTimesCircle}/>
                                        </div>
                                    </div>
                                </form>
                            </div>
                        </Card.Body>
                    </Accordion.Collapse>
                </Card>
            </Accordion>
        </div>
    )
};

export default Project;
