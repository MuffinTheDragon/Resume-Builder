import React, {  useContext } from "react";
import shared from '../../Shared.module.css';
import {Row, Col } from "react-bootstrap";
import {faSeedling, faHammer, faCode, faPalette, faAward, faBook} from '@fortawesome/free-solid-svg-icons';
import ItemButton from '../ItemButton/ItemButton';
import { ResumeContext } from "../../../App";
import Project from "./AdditionalGroup/Forms/Project/Project"

let Additional = () => {
    let {resumeState, setResume} = useContext(ResumeContext);
    const projects = resumeState.Projects.map((project) => {
        return <Project key={project.id} id={project.id}/>;
    });
    
    let sections = [
        {icon: faBook, name: "Project"},
        {icon: faSeedling, name: "Club"},
        {icon: faCode, name: "Hackathon"},
        {icon: faAward, name: "Award"},
        {icon: faPalette, name: "Hobbies"},
        {icon: faHammer, name: "Skills"}
    ];

    let addProject = (type) => {
        let newProj = {
            id: Math.random(),
            title: "",
            subtitle: "",
            startDate: "",
            endDate: "",
            desc: []
        }
        let updatedProjects = [...resumeState.Projects, newProj];
        let updatedResumeState = {...resumeState, Projects: updatedProjects};
        setResume(updatedResumeState);
    };

    let additionalSectionsMenu = sections.map((section, index) => (
        <ItemButton icon={section.icon}
              name={section.name}
              addNewSection={() => addProject(section.name)}
              key={index}/>
    ));

    return (
        <Row>
            <Col >
                {projects}
                <div className={"ml-5 mt-3 " + shared.itemButtonGroup}>
                    {additionalSectionsMenu}
                </div>
            </Col>
        </Row>
    )
}

export default Additional;
