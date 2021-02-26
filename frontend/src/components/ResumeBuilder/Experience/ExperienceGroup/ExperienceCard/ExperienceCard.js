import React from 'react';
import ExperienceForm from "../../ExperienceForm/ExperienceForm";

let ExperienceCard = (props) => {
    let card = null;
    switch (props.name) {
        case "Internship":
            card = <ExperienceForm title="Internship" />
            break;
        case "Job":
            card = <ExperienceForm title="Job" />
            break;
        default:
            break;
    }
    return card;
}
export default ExperienceCard;
