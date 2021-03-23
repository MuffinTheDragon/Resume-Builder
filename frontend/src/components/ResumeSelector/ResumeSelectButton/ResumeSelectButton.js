import React from 'react';
import styles from './ResumeSelectButton.module.css';

const ResumeSelectButton = (props) => {
    return (
        <div className={styles.button}>
            <div onClick={props.selectResume} className={styles.selectResume}>
                Select Resume
            </div>
            {props.children} <br/>
            {props.resumeid}
            <div onClick={props.deleteResume} className={styles.deleteResume}>
                Delete Resume
            </div>
        </div>
    )
};

export default ResumeSelectButton;