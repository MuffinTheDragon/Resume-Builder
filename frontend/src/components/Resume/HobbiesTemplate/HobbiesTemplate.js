import React from "react";
import styles from "./HobbiesTemplate.module.css";

function HobbiesTemplate({desc}) {
    return (
        <div>
            <h1>Hobbies</h1>
            <hr></hr>
            <span className={styles.desc}>{desc}</span>
        </div>
    );
}

export default HobbiesTemplate;
