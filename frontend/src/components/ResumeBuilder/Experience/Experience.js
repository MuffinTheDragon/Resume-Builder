import React from "react";
import EmploymentCard from "./EmploymentCard/EmploymentCard";
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faUserTie, faBriefcase } from '@fortawesome/free-solid-svg-icons';
import "./style.css";
import Job from "./EmploymentCard/Job/Job";

function Experience() {
    return (
        <div>
			<h3>Experience <FontAwesomeIcon icon={faUserTie}/></h3>
			<hr/>
            <div class="exp-selection">
                <Job />
                <div class="add-menu">
                    <div class="add-internship">
                        <FontAwesomeIcon icon={faBriefcase} size={"3x"}/>
                        <h4>Internship</h4>
                    </div>
                    <div class="add-job">
                        <FontAwesomeIcon icon={faBriefcase} size={"3x"}/>
                        <h4>Job</h4>
                    </div>
                </div>
                
            </div>
        </div>
    )
}

export default Experience;