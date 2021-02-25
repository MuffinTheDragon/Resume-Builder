import React from "react";
import styles from "./Collection.module.css";

function Collection(props) {
    const items = props.items.map((item, index) => {
        return (
            <div className={styles.item} key={index}>
                {item}
            </div>
        )
    })
    return (
        <div className={styles.container}>
            {items}
        </div>
    )
}

export default Collection
