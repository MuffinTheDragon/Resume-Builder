import React from 'react';
import {FontAwesomeIcon} from "@fortawesome/react-fontawesome";
import styles from "./Item.module.css";

function Item(props) {
    return (
        <div class={styles.item}>
            <div class={styles.icon}>
                <FontAwesomeIcon icon={props.icon} size={"2x"}/>
            </div>
            <div class={styles.title}>
                {props.name}
            </div>
        </div>
    )
}

export default Item;
