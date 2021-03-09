import React, { useContext } from 'react';
import styles from "./Achievement.module.css";
import { Row, Col, Accordion, Card } from "react-bootstrap";
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { ResumeContext } from "../../../../../../App";
import { faTrashAlt } from '@fortawesome/free-solid-svg-icons';

const Achievement = ({id}) => {
    let {resumeState, setResume} = useContext(ResumeContext);
    let achievement = resumeState.Achievements.filter(achv => { 
        return achv.id === id
    })[0]

    const handleChange=(event, section)=> {
        let updatedAchievements = [...resumeState.Achievements]
        for(let achIdx in updatedAchievements){
            if (updatedAchievements[achIdx].id === id) {
                let val;
                if(section === "desc") {
                    val = event.target.value.split("\n");
                } else {
                    val = event.target.value;
                }
                updatedAchievements[achIdx][section] = val;
            }
        }
        const newResumeState = {...resumeState, Achievements: updatedAchievements};
        setResume(newResumeState);
    }

    const deleteAchievement = (event) => {
        let updatedAchievements = [...resumeState.Achievements].filter(achv => achv.id !== id);
        const newResumeState = {...resumeState, Achievements: updatedAchievements};
        setResume(newResumeState);
    }

    const getDesc = (data) => {
        let desc = "";
        for(let i = 0; i < data.length; i++){
            desc += data[i];
            if (i !== data.length - 1){
                desc += "\n";
            }
        }
        return desc;
    }
    return (
        <>
            <Accordion defaultActiveKey={"0"} className="m-3 mr-5 ml-5">
                <Card>
                    <Accordion.Toggle as={Card.Header} eventKey={"1"}>
                        <h2>{achievement.title === "" ? "New Achievement" : achievement.title}</h2>
                    </Accordion.Toggle>
                    <Accordion.Collapse eventKey={"1"}>
                        <Card.Body>
                            <Row>
                                <Col xs={12} md={12} lg={12} xl={6}>
                                    <label htmlFor="achievementTitle">Title</label><br></br>
                                    <input type="text" id="achievementTitle" name="achievementTitle" onChange={(event) => handleChange(event, "title")} defaultValue={achievement.title}></input>
                                </Col>
                                <Col xs={12} md={12} lg={12} xl={6}>
                                    <label htmlFor="desc">Description</label><br></br>
                                    <input type="text" id="desc" name="desc" onChange={(event) => handleChange(event, "desc")} defaultValue={achievement.desc}></input>
                                </Col>
                            </Row>
                            <Row className="d-flex justify-content-end mt-4 mr-1">
                                <button type="button"  className={styles.decline} onClick={(event) => deleteAchievement(event)} >
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

export default Achievement;
