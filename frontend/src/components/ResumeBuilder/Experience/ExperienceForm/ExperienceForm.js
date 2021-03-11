import React, {useContext} from 'react';
import styles from "./ExperienceForm.module.css";
import {Row, Col, Accordion, Card} from "react-bootstrap";
import {FontAwesomeIcon} from '@fortawesome/react-fontawesome'
import {ResumeContext} from "../../../../App"
import {faTrashAlt} from '@fortawesome/free-solid-svg-icons';

const ExperienceForm = ({id}) => {
    let {resumeState, setResume} = useContext(ResumeContext);
    let experience = resumeState.Experience.filter(experience => {
        return experience.id === id;
    })[0]
    const handleChange = (event, section) => {
        let updatedExperience = [...resumeState.Experience]
        for (let experienceId in updatedExperience) {
            if (updatedExperience[experienceId].id === id){
                let val;
                if (section === "desc"){
                    val = event.target.value.split("\n");
                } else {
                    val = event.target.value;
                }
                updatedExperience[experienceId][section] = val;
            }
        }
        const newResumeState = {...resumeState, Experience: updatedExperience};
        setResume(newResumeState);
    }

    const deleteExperience = (event) => {
        let updatedExperience = [...resumeState.Experience].filter(experience => experience.id !== id);
        const newResumeState = {...resumeState, Experience: updatedExperience};
        setResume(newResumeState);
    }

    const getDesc = (data) => {
        let desc = ""; 
        for (let i = 0; i < data.length; i++){
            desc += data[i];
            if(i !== data.length - 1){
                desc += "\n";
            }
        }
        return desc;
    }

    return (
        <Accordion defaultActiveKey={"0"}>
            <Card>
                <Accordion.Toggle as={Card.Header} eventKey={"1"}>
                    <h2>{experience.title === "" ? "New Experience" : experience.title}</h2>
                </Accordion.Toggle>
                <Accordion.Collapse eventKey={"1"}>
                    <Card.Body>
                            <Row>
                                <Col xs={12} md={12} lg={12} xl={6}>
                                    <label htmlFor="projectName">Company Name</label><br></br>
                                    <input type="text" id="companyName" name="companyName"
                                    onChange={(event) => handleChange(event, "title")}
                                    defaultValue={experience.title}></input>
                                </Col>
                                <Col xs={12} md={12} lg={12} xl={6}>
                                    <label htmlFor="role">Role</label><br></br>
                                    <input type="text" id="role" name="role"
                                    onChange={(event) => handleChange(event, "subtitle")}
                                    defaultValue={experience.subtitle}></input>
                                </Col>
                            </Row>
                            <Row>
                                <Col xs={12} md={12} lg={12} xl={5}>
                                    <label htmlFor="startDate">Start Date</label><br></br>
                                    <input type="month" id="startDate" name="startDate"
                                    onChange={(event) => handleChange(event, "startDate")}
                                    defaultValue={experience.startDate}></input>
                                </Col>
                                <Col xs={12} md={12} lg={12} xl={5}>
                                    <label htmlFor="endDate">End Date</label><br></br>
                                    <input type="month" id="endDate" name="endDate"
                                    onChange={(event) => handleChange(event, "endDate")}
                                    defaultValue={experience.endDate}
                                    ></input>
                                </Col>
                                <Col xs={12} md={12} lg={12} xl={2}>
                                    <label htmlFor="location">Location</label><br></br>
                                    <input type="text" id="location" name="location"
                                    onChange={(event) => handleChange(event, "location")}
                                    defaultValue={experience.location}></input>
                                </Col>
                            </Row>
                            <Row>
                                <Col xs={12} md={12} lg={12} xl={12}>
                                    <label htmlFor="description">Description</label><br></br>
                                    <textarea id="description" name="description" className="w-100"
                                    onChange={(event) => handleChange(event, "desc")}
                                    defaultValue={getDesc(experience.desc)}></textarea>
                                </Col>
                            </Row>
                            
                            <Row className="d-flex justify-content-end mt-4 mr-1">
                                    <button type="button" className={styles.decline} 
                                    onClick={(event) => deleteExperience(event)}>
                                        <FontAwesomeIcon icon={faTrashAlt}/>
                                    </button>
                            </Row>
                    </Card.Body>
                </Accordion.Collapse>
            </Card>
        </Accordion>
    )
};

export default ExperienceForm;
