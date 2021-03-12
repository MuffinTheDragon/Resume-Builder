import React, {  useContext } from "react";
import shared from '../../Shared.module.css';
import {Row, Col } from "react-bootstrap";
import {faSeedling, faHammer, faCode, faPalette, faAward, faBook} from '@fortawesome/free-solid-svg-icons';
import ItemButton from '../ItemButton/ItemButton';
import { ResumeContext } from "../../../App";
import Project from "./AdditionalGroup/Forms/Project/Project";
import Hobbies from "./AdditionalGroup/Forms/Hobbies/Hobbies";
import Clubs from "./AdditionalGroup/Forms/Clubs/Clubs";

let Additional = () => {
    let {resumeState, setResume} = useContext(ResumeContext);
    const projects = resumeState.Projects.map((project, _) => {
        if (project.title === "Hobbies") {
            return <Hobbies key={project.id} id ={project.id}/>
        }
        else if (project.title === "Clubs") {
            return <Clubs key={project.id} id ={project.id}/>
        }
        return <Project key={project.id} id={project.id}/>;
    });

    const hobbies = resumeState.Hobbies.map((project, _) => {
        return <Hobbies key={hobbies.id} id={hobbies.id}/> 
    });

    // const clubs = resumeState.Clubs.map((project, _) => {
    //     return <Clubs key={clubs.id} id={clubs.id}/> 
    // });

    // let additionalSection = { 
    //     Projects: []
    // };
    
    let sections = [
        {icon: faBook, name: "Project"},
        {icon: faSeedling, name: "Clubs"},
        {icon: faCode, name: "Hackathon"},
        {icon: faAward, name: "Award"},
        {icon: faPalette, name: "Hobbies"},
        {icon: faHammer, name: "Skills"}
    ];

    let addSection = (type) => {
        console.log(type);
        if (type === "Project") {
            addProject();
        }
        else if (type === "Hobbies") {
            addHobbies();
        }
        else if (type === "Clubs") {
            addClubs();
        }
    };

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

    let addHobbies = (type) => {
        let newHobbies = { //empty project
            id: Math.random(),
            title: "Hobbies",
            desc: []
        }
        let updatedProjects = [...resumeState.Projects, newHobbies];
        let updatedResumeState = {...resumeState, Projects: updatedProjects};
        setResume(updatedResumeState);
    };
    let addClubs = (type) => {
        let newClubs = { //empty project
            id: Math.random(),
            title: "Clubs",
            desc: []
        }
        let updatedProjects = [...resumeState.Projects, newClubs];
        let updatedResumeState = {...resumeState, Projects: updatedProjects};
        setResume(updatedResumeState);
    };

    let additionalSectionsMenu = sections.map((section, index) => (
        <ItemButton icon={section.icon}
            name={section.name}
            addNewSection={() => addSection(section.name)}
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
