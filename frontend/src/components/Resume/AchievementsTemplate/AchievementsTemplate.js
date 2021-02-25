import React from "react";
import TemplateStyles from "../TemplateStyles.module.css";
import styles from "./AchievementsTemplate.module.css";
import { faTrophy } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";

function AchievementsTemplate({title, desc}) {
    return (
        <div class="m-2">
            <div class={styles.trophy}><FontAwesomeIcon icon={faTrophy} /></div>
            <div>
                <h4>{title}</h4>
                <span class={TemplateStyles.date}>{desc}</span>
            </div>
        </div>
    );

}

export default AchievementsTemplate;