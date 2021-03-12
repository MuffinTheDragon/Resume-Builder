import React, {  useContext } from "react";
import shared from '../../Shared.module.css';
import {Row, Col } from "react-bootstrap";
import {faSeedling, faHammer, faCode, faPalette, faAward, faBook} from '@fortawesome/free-solid-svg-icons';
import ItemButton from '../ItemButton/ItemButton';
import { ResumeContext } from "../../../App";
import Project from "./AdditionalGroup/Forms/Project/Project";
import Hobbies from "./AdditionalGroup/Forms/Hobbies/Hobbies";

let Additional = () => {
    let {resumeState, setResume} = useContext(ResumeContext);
    const additionalCards = {
        Projects: [],
        Club: [],
        Hackathon: [],
        Skills: [],
        Award: [],
        Hobbies: [], // Only sure that there's only 1 in here
    };
    let component;
    let isSingleComponent
    for (let key in resumeState){
        isSingleComponent = false;
        let isAdditionalCard = false;
        let data = resumeState[key];
        for (let i=0; i < resumeState[key].length; i++){
            switch (key){
                case "Projects":
                    component = <Project key={resumeState[key][i].id} id={resumeState[key][i].id}/>
                    isAdditionalCard = true;
                    break;
                case "Hobbies":
                    component = <Hobbies/>
                    isSingleComponent = true;
                    isAdditionalCard = true;
                    break;
            }
            if (isAdditionalCard) {
                additionalCards[key].push(component);
            }
            if (isSingleComponent) {
                break;
            }
        }

    }
    // Rendering cards
    // const projects = resumeState.Projects.map((project) => {
    //     if (project.title === "Hobbies") {
    //         return <Hobbies key={project.id} id={project.id}/>
    //     }
    //     return <Project key={project.id} id={project.id}/>;
    // });

    // const hobbies = resumeState.Hobbies.map((project, _) => {
    //     return <Hobbies key={hobbies.id} id ={hobbies.id}/> 
    // });

    
    let sections = [
        {icon: faBook, name: "Project"},
        {icon: faSeedling, name: "Club"},
        {icon: faCode, name: "Hackathon"},
        {icon: faAward, name: "Award"},
        {icon: faPalette, name: "Hobbies"}
    ];

    let addSection = (type) => {
        switch(type){
            case "Projects":
                addProject();
                break;
            case "Hobbies":
                // addHobby();
                break;    
        }
    };

    let addProject = (type) => {
        let id = Math.random();
        additionalCards["Projects"].push(<Project id={id} key={id}/>)
        let newProj = { //empty project
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

    // let addHobbies = (type) => {
    //     let newHobbies = { //empty project
    //         id: Math.random(),
    //         title: "Hobbies",
    //         desc: []
    //     }
    //     let updatedProjects = [...resumeState.Projects, newHobbies];
    //     let updatedResumeState = {...resumeState, Projects: updatedProjects};
    //     setResume(updatedResumeState);
    // };

    let additionalSectionsMenu = sections.map((section, index) => (
        <ItemButton icon={section.icon}
            name={section.name}
            addNewSection={() => addSection(section.name)}
            key={index}/>
    ));

    return (
        <Row>
            <Col >
                {/* <AdditionalGroup cards={sectionCards}/> */}
                {additionalCards.Projects}
                {additionalCards.Hobbies}
                <div className={"ml-5 mt-3 " + shared.itemButtonGroup}>
                    {additionalSectionsMenu}
                </div>
            </Col>
        </Row>
    )
}

export default Additional;
