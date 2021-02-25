import React from "react";
import styles from "./PersonalTemplate.module.css";
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faAt, faPhone } from '@fortawesome/free-solid-svg-icons';
import { faGithub, faLinkedinIn } from '@fortawesome/free-brands-svg-icons';
import NumberFormat from 'react-number-format';

function PersonalTemplate(props) {
    return (
        <div class={styles["personal-template"]}>
            <p class={styles.name}>{props.name}</p>
            <div class={styles['personal-info']}>
                <h4><span class={styles['info-icon']}><FontAwesomeIcon icon={faAt} /></span>{props.email}</h4>
                <h4><span class={styles['info-icon']}><FontAwesomeIcon icon={faPhone} /></span><NumberFormat value={props.telephone} displayType={'text'} format={"(###) ###-####"} /></h4>
                <h4><span class={styles['info-icon']}><FontAwesomeIcon icon={faLinkedinIn} /></span>{props.linkedin}</h4>
                <h4><span class={styles['info-icon']}><FontAwesomeIcon icon={faGithub} /></span>{props.github}</h4>
            </div>
        </div>
    );
}

export default PersonalTemplate;
