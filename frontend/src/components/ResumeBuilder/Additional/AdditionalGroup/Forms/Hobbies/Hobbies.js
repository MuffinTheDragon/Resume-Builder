import React, { useContext } from 'react';
import styles from "../Project/Project.module.css";
import { Row, Col, Accordion, Card } from "react-bootstrap";
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { ResumeContext } from "../../../../../../App";
import { faTrashAlt } from '@fortawesome/free-solid-svg-icons';

const Hobbies = ({id}) => {
    // let {resumeState, setResume} = useContext(ResumeContext);
    // let project = resumeState.Projects.filter(proj => { 
    //     return proj.id === id
    // })[0]

    // const handleChange=(event, section)=> {
    //     let updatedProjects = [...resumeState.Projects]
    //     for(let projIdx in updatedProjects){
    //         if (updatedProjects[projIdx].id === id) {
    //             let val;
    //             if(section === "desc") {
    //                 val = event.target.value.split("\n");
    //             } else {
    //                 val = event.target.value;
    //             }
    //             updatedProjects[projIdx][section] = val;
    //         }
    //     }
    //     const newResumeState = {...resumeState, Projects: updatedProjects};
    //     setResume(newResumeState);
    // }

    // const deleteProject = (event) => {
    //     let updatedProjects = [...resumeState.Projects].filter(proj => proj.id !== id);
    //     const newResumeState = {...resumeState, Projects: updatedProjects};
    //     setResume(newResumeState);
    // }

    // const getDesc = (data) => {
    //     let desc = "";
    //     for(let i = 0; i < data.length; i++){
    //         desc += data[i];
    //         if (i !== data.length - 1){
    //             desc += "\n";
    //         }
    //     }
    //     return desc;
    // }

    return (
        <>
            <Accordion defaultActiveKey={"0"} className="m-3 mr-5 ml-5">
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
                                    <input type="text" id="hobbies" name="hobbies"></input>
                                </Col>
                            </Row>
                        </Card.Body>
                    </Accordion.Collapse>
                </Card>
            </Accordion>
        </>
    );
}

export default Hobbies;
