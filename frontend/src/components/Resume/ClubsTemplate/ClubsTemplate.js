import React from "react";
import styles from '../TemplateStyles.module.css';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faCalendarAlt } from '@fortawesome/free-solid-svg-icons';

function ClubsTemplate(props) {
    return (
        // <div>
        //     <h2>{props.title}</h2>
        //     <h3 className="resumeRender">{props.subtitle}</h3>
        //     <span className={styles.date}><FontAwesomeIcon icon={faCalendarAlt} /> {props.start_date} - {props.end_date}</span>
        //     <br></br>
        //     <span className={styles.desc}>{props.desc}</span>
        // </div>
        <div>
            <h2>Club poggers</h2>
            <h3 className="resumeRender">im a subtitle</h3>
            <span className={styles.date}><FontAwesomeIcon icon={faCalendarAlt} /> jan1 - idk how to do a date</span>
            <br></br>
            <span className={styles.desc}>desc goes here. wow!</span>
        </div>
    );
}

export default ClubsTemplate;
