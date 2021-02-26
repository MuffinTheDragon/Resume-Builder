import React from "react";
import styles from "../JobExperienceResume/TemplateStyles.module.css";
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faCalendar, faMapMarkerAlt } from '@fortawesome/free-solid-svg-icons';

function ExperienceTemplate(props) {
    const jobDesc = props.desc;
    const listItems = jobDesc.map((point) =>
        <li key={point}>
            {point}
        </li>
    );

    return (
        <div>
            <h2>{props.position}</h2>
            <h3 class="resumeRender">{props.employer}</h3>
            <span class={styles.date}><FontAwesomeIcon icon={faCalendar} /> {props.startDate} - {props.endDate}</span> <span class={styles.location}><FontAwesomeIcon icon={faMapMarkerAlt} /> {props.location}</span>
            <ul>
                {listItems}
            </ul>
        </div>
    );
}

export default ExperienceTemplate;
