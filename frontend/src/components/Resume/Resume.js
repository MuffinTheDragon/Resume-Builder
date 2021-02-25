import React from 'react';
import styles from "../Shared.module.css";
import "./TemplateStyles.module.css";
import 'bootstrap/dist/css/bootstrap.min.css';
import PersonalTemplate from "./PersonalTemplate/PersonalTemplate";
import HeaderTemplate from "./HeaderTemplate/HeaderTemplate";
import ExperienceTemplate from "../Resume/ExperienceTemplate/ExperienceTemplate";
import EducationTemplate from "./EducationTemplate/EducationTemplate";
import AchievementsTemplate from "./AchievementsTemplate/AchievementsTemplate";
import CollectionTemplate from "./CollectionTemplate/CollectionTemplate";

const Resume = ({resume}) => {
    const resumeComponents = {
        Experience: [],
        Projects: [],
        Achievements: [],
        EducationHistory: [],
        Skills: [],
        CourseWork: []
    };

    let component;
    for (let key in resume) {
        for (let i=0; i < resume[key].length; i++){
            let data = resume[key][i];
            let isCollection = false;
            switch(key) {
                case "Projects":
                case "Experience":
                    component = <ExperienceTemplate key={i} title={data.title} subtitle={data.subtitle} startDate={data.startDate} endDate={data.endDate} location={data.location} desc={data.desc}/>
                    break;
                case "Achievements":
                    component = <AchievementsTemplate key={i} title={data.title} desc={data.desc} />
                    break;
                case "EducationHistory":
                    component = <EducationTemplate key={i} school={data.EducationHistory} degree={data.degree} date={data.date} gpa={data.gpa}/>   
                    break;
                case "CourseWork":
                case "Skills":
                    isCollection = !isCollection;
                    component = <CollectionTemplate key={i} items={resume[key]}/>
                    break;
                default:
                    break;            
            }
            resumeComponents[key].push(component);
            if (isCollection){
                break;
            }
        }
    }
    return ( 
        <div id="resumeRender">
            <PersonalTemplate name={resume.Personal.name} email={resume.Personal.email} telephone={resume.Personal.telephone} linkedin={resume.Personal.linkedin} github={resume.Personal.github}/>
            <div class="d-flex pl-5 pr-5 pb-5">
                <div class={"mr-3 " + styles.w65}>
                    <HeaderTemplate header="Experience"/>
                    {resumeComponents.Experience}   
                    <HeaderTemplate header="Projects"/>
                    {resumeComponents.Projects}
                </div>
                <div class={styles.w35}>
                    <HeaderTemplate header="Education"/>
                    {resumeComponents.EducationHistory}
                    <HeaderTemplate header="Achievements"/>
                    {resumeComponents.Achievements}     
                    <HeaderTemplate header="Skills"/>
                    {resumeComponents.Skills}
                    <HeaderTemplate header="Course Work"/>
                    {resumeComponents.CourseWork}

                </div>
            </div>
        </div>
    );
};

export default Resume;