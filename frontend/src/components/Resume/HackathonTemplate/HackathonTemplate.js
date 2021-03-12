import React from "react";
import styles from '../TemplateStyles.module.css';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faCalendarAlt } from '@fortawesome/free-solid-svg-icons';

function HackathonTemplate(props) {
    return (
        // <div>
        //     <h2>{props.title}</h2>
        //     <h3 className="resumeRender">{props.subtitle}</h3>
        //     <span className={styles.date}><FontAwesomeIcon icon={faCalendarAlt} /> {props.start_date} - {props.end_date}</span>
        //     <br></br>
        //     <span className={styles.desc}>{props.desc}</span>
        // </div>
        <div>
            <h2>Hackathon 2021 motion tracking pomgers</h2>
            <h3 className="resumeRender">this subtitle says that chris will merge goodly</h3>
            <span className={styles.date}><FontAwesomeIcon icon={faCalendarAlt} /> chris - topher</span>
            <br></br>
            <span className={styles.desc}>chris very stink</span>
        </div>
    );
}

export default HackathonTemplate;
