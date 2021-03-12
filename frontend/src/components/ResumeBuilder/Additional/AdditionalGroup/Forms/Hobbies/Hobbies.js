import React, { useContext, useState } from 'react';
import styles from "../Project/Project.module.css";
import { Row, Col, Accordion, Card, Modal, Button } from "react-bootstrap";
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { ResumeContext } from "../../../../../../App";
import { faTrashAlt } from '@fortawesome/free-solid-svg-icons';

const Hobbies = () => {
    let {resumeState, setResume} = useContext(ResumeContext);
    const hobbies = resumeState.Hobbies.join(', ').trim();

    let handleInputChange = (event) => {
        let updatedHobbies = event.target.value;
        setResume({...resumeState, Hobbies: updatedHobbies.split(',')});
    }

    const deleteHobbies = (event) => {
        // let updatedProjects = [...resumeState.Projects].filter(proj => proj.id !== id);
        // const newResumeState = {...resumeState, Projects: updatedProjects};
        // setResume(newResumeState);
    }

    const [show, setShow] = useState(false);

    const handleClose = () => setShow(false);
    const handleShow = () => setShow(true);

    return (
        <>
            <Modal show={show} onHide={handleClose}>
                <Modal.Header closeButton>
                </Modal.Header>
                <Modal.Body className={styles.modal}>Are you sure you want to delete your hobbies?</Modal.Body>
                <Modal.Footer>
                    <Button variant="outline-secondary" onClick={handleClose}>
                        Cancel
                    </Button>
                    <Button variant="danger" onClick={deleteHobbies}>
                        Delete
                    </Button>
                </Modal.Footer>
            </Modal>
            <Accordion defaultActiveKey={"0"} className="mb-3 mr-5 ml-5">
                <Card>
                    <Accordion.Toggle as={Card.Header} eventKey={"1"}>
                        <h2>Hobbies</h2>
                    </Accordion.Toggle>
                    <Accordion.Collapse eventKey={"1"}>
                        <Card.Body>
                            <Row>
                                <Col xs={12} md={12} lg={12} xl={12}>
                                    <label htmlFor="hobbies">Hobbies</label><br></br>
                                    {/* <input type="text" id="hobbies" name="hobbies" onChange={(event) => handleChange(event, "title")} defaultValue={project.title}></input> */}

                                    <input type="text" id="hobbies" name="hobbies" onChange={(event) => handleInputChange(event)} defaultValue={hobbies}></input>
                                </Col>
                            </Row>
                            <Row className="d-flex justify-content-end mt-4 mr-1">
                                <button type="button"  className={styles.decline} onClick={(event) => handleShow()} >
                                    <FontAwesomeIcon icon={faTrashAlt}/>
                                </button>
                            </Row>
                        </Card.Body>
                    </Accordion.Collapse>
                </Card>
            </Accordion>
        </>
    );
}

export default Hobbies;
