import React from "react";
import styles from '../TemplateStyles.module.css';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faCalendarAlt } from '@fortawesome/free-solid-svg-icons';

function ClubsTemplate(props) {
    const listItems = props.desc.map((point, index) => {
        return (
            <li key={index}>
                {point}
            </li>
        )
    })
    return (
        <div>
            <h2>{props.title}</h2>
            <h3 className="resumeRender">{props.subtitle}</h3>
            <span className={styles.date}>{props.startDate !== "" ? <><FontAwesomeIcon icon={faCalendarAlt} /> {props.startDate} - {props.endDate}</> : ''}</span>
            {(props.desc[0] === "" && props.desc.length === 1) ? "" : <ul>{listItems}</ul>}
        </div>
    );
}

export default ClubsTemplate;
