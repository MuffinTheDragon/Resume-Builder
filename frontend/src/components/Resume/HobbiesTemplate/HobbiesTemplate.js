import React from "react";
import styles from "./HobbiesTemplate.module.css";

function HobbiesTemplate(props) {
    return (
        <div className="mt-2">
            <p className={styles.hobbies}>
            {props.hobbies}
            </p>
        </div>
    )
}

export default HobbiesTemplate;
