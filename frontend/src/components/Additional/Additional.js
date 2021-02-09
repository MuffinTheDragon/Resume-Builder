import React from "react";
import styles from './Additional.module.css';
import shared from '../Shared.module.css';
import {faSeedling, faHammer, faCode, faPalette, faAward, faBook} from '@fortawesome/free-solid-svg-icons';
import Item from "./Item/Item";

function Additional() {
    let items = [
        {icon: faBook, name: "Project"},
        {icon: faSeedling, name: "Club"},
        {icon: faCode, name: "Hackathon"},
        {icon: faAward, name: "Award"},
        {icon: faPalette, name: "Hobbies"},
        {icon: faHammer, name: "Skills"}
    ]
    let additionalItems = items.map((item) => (
        <Item icon={item.icon} name={item.name}/>
    ));

    return (
        <div class={shared.editmenu}>
            <div class={styles.additional}>
                <h3>Additional Sections</h3>
                <hr/>
                <div class={styles.additionalItems}>
                    {additionalItems}
                </div>
            </div>
        </div>
    )
}

export default Additional;
