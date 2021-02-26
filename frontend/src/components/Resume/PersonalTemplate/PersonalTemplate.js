import React from "react";
import styles from "./PersonalTemplate.module.css";
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faAt, faPhone, faGlobe } from '@fortawesome/free-solid-svg-icons';
import { faGithub } from '@fortawesome/free-brands-svg-icons';
import NumberFormat from 'react-number-format';

function PersonalTemplate(props) {
    return (
        <div className={styles.personalTemplate}>
            <p className={styles.name}>{props.fname} {props.lname}</p>
            <div className={styles.personalInfo}>
                <h4><span className={styles.infoIcon}><FontAwesomeIcon icon={faAt} /></span>{props.email}</h4>
                <h4><span className={styles.infoIcon}><FontAwesomeIcon icon={faPhone} /></span><NumberFormat value={props.telephone} displayType={'text'} format={"(###) ###-####"} /></h4>
                <h4><span className={styles.infoIcon}><FontAwesomeIcon icon={faGlobe} /></span>{props.website}</h4>
                <h4><span className={styles.infoIcon}><FontAwesomeIcon icon={faGithub} /></span>{props.github}</h4>
            </div>
        </div>
    );
}

export default PersonalTemplate;
