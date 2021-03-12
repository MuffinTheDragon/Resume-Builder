import React from "react";
import TemplateStyles from "../TemplateStyles.module.css";
import styles from "./AchievementsTemplate.module.css";
import { faTrophy } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";

function AchievementsTemplate({title, desc}) {
    return (
        <div className="m-2">
            <div className={styles.trophy}>
            {(title === "" && desc === "") ? <></> : <FontAwesomeIcon icon={faTrophy}/>}
            </div>
            <div>
                <h4>{title}</h4>
                <span className={TemplateStyles.date}>{desc}</span>
            </div>
        </div>
    );

}

export default AchievementsTemplate;