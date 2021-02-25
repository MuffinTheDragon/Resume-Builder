import React from "react";
import styles from '../TemplateStyles.module.css';
import { faCalendarAlt } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";

function EducationTemplate(props) {
    return (
        <>
            <h2>{props.school}</h2>
            <h3>{props.degree}</h3>
            <span class={styles.date}><FontAwesomeIcon icon={faCalendarAlt} /> {props.date} | GPA: {props.gpa}</span>
        </>
    );
}

export default EducationTemplate;