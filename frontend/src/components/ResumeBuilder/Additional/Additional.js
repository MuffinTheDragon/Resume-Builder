import React, {  useContext } from "react";
import shared from '../../Shared.module.css';
import {Row, Col } from "react-bootstrap";
import {faSeedling, faHammer, faCode, faPalette, faAward, faBook} from '@fortawesome/free-solid-svg-icons';
import ItemButton from '../ItemButton/ItemButton';
import { ResumeContext } from "../../../App";
import Project from "./AdditionalGroup/Forms/Project/Project"
import Achievement from "./AdditionalGroup/Forms/Achievement/Achievement"

let Additional = () => {
    // let [sectionCards, addSection] = useState({
    //     "Project": 0,
    //     "Club": 0,
    //     "Hackathon": 0,
    //     "Award": 0,
    //     "Hobbies": 0,
    //     "Skills": 0,
    // });
    let {resumeState, setResume} = useContext(ResumeContext);
    const projects = resumeState.Projects.map((project, _) => {
        return <Project key={project.id} id={project.id}/>;
    });

    const achievements = resumeState.Achievements.map((achievement, _) => {
        return <Achievement key={achievement.id} id={achievement.id}/>;
    })

    // let additionalSection = { 
    //     Projects: []
    // };
    
    let sections = [
        {icon: faBook, name: "Project"},
        {icon: faSeedling, name: "Club"},
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

    let additionalSectionsMenu = sections.map((section, index) => (
        <ItemButton icon={section.icon}
              name={section.name}
              
              addNewSection={() => addSection(section.name)}
              key={index}/>
    ));

    return (
        <>
            <Row>
                <Col >
                    {/* <AdditionalGroup cards={sectionCards}/> */}
                    {projects}
                    {achievements}
                    <div className={"ml-5 mt-3 " + shared.itemButtonGroup}>
                        {additionalSectionsMenu}
                    </div>
                </Col>
            </Row>
        </>
    )
}

export default Additional;
