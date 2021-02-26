import React from "react";
import shared from "../../Shared.module.css";
import ExperienceTemplate from "../ResumeTemplateComponents/ExperienceTemplate"

function JobExperienceResume() {
    return (
        <div class={"m-5"}>
            <h1>Experience</h1>
            <hr></hr>
            <ExperienceTemplate position={"Teaching Assistant"} employer={"University of Toronto"} startDate={"Jan 2020"} endDate={"Dec 2020"} location={"Toronto, ON"} desc={["Lorem Ipsum", "pancakes and waffles"]}/>
        </div>
    );
}

export default JobExperienceResume;