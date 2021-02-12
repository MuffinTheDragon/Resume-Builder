import React from "react";
import Job from "./Job/Job";

let EmploymentCard = (props) => {
    let type = null;
    switch (props.name) {
        case "Internship":
            type = <Internship />
            break;
        case "Job":
            type = <Job />
            break;
        default:
            break;
    }
}

export default EmploymentCard;