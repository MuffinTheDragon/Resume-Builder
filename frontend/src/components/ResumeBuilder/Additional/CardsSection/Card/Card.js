import React from 'react';
import Project from "../../../ResumeBuilder/Project/Project";

let Card = (props) => {
    let card = null;
    switch (props.name) {
        case "Project":
            card = <Project/>
            break;
        case "Club":
            break;
        case "Hackathon":
            break;
        case "Award":
            break;
        case "Hobbies":
            break;
        case "Skills":
            break;
        default:
            break;
    }
    return card;
}
export default Card;
