import React, {  useContext } from "react";
import shared from '../../Shared.module.css';
import {Row, Col } from "react-bootstrap";
import {faSeedling, faHammer, faCode, faPalette, faAward, faBook} from '@fortawesome/free-solid-svg-icons';
import ItemButton from '../ItemButton/ItemButton';
import { ResumeContext } from "../../../App";
import Achievement from "./AdditionalGroup/Forms/Achievement/Achievement"
import Project from "./AdditionalGroup/Forms/Project/Project";
import Hobbies from "./AdditionalGroup/Forms/Hobbies/Hobbies";
import Clubs from "./AdditionalGroup/Forms/Clubs/Clubs";

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

    const achievements = resumeState.Achievements.map((achievement, _) => {
        return <Achievement key={achievement.id} id={achievement.id}/>;
    })

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
        {icon: faAward, name: "Achievement"},
        {icon: faPalette, name: "Hobbies"},
        {icon: faHammer, name: "Skills"}
    ];

    let addSection = (type) => {
        // let newCount = sectionCards[type] + 1;
        // let updatedSectionCard = {
        //     ...sectionCards
        // };
        // updatedSectionCard[type] = newCount;
        // addSection(updatedSectionCard);

        let updatedResumeState = null;
        switch(type){
                    
            case "Project":
                let newProj = {
                    id: Math.random(),
                    title: "",
                    subtitle: "",
                    startDate: "",
                    endDate: "",
                    desc: []
                }
                let updatedProjects = [...resumeState.Projects, newProj];
                updatedResumeState = {...resumeState, Projects: updatedProjects};
                setResume(updatedResumeState);
                break;
            
            case "Achievement":
                let newAch = {
                    id: Math.random(),
                    title: "",
                    desc: ""
                }
                let updatedAchievements = [...resumeState.Achievements, newAch];
                updatedResumeState = {...resumeState, Achievements: updatedAchievements};
                setResume(updatedResumeState);
                break;
        }
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
    // let addClubs = (type) => {
    //     let newClubs = { //empty project
    //         id: Math.random(),
    //         title: "Clubs",
    //         desc: []
    //     }
    //     let updatedProjects = [...resumeState.Projects, newClubs];
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
                {achievements}
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
