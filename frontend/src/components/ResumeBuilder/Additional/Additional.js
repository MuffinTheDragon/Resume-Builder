import React, {useState} from "react";
import styles from './Additional.module.css';
import shared from '../Shared.module.css';
import {faSeedling, faHammer, faCode, faPalette, faAward, faBook} from '@fortawesome/free-solid-svg-icons';
import Item from "./Item/Item";
import CardsSection from "./CardsSection/CardsSection";

let Additional = () => {
    let [sectionCards, addSection] = useState({
        "Project": 0,
        "Club": 0,
        "Hackathon": 0,
        "Award": 0,
        "Hobbies": 0,
        "Skills": 0,
    });

    let sections = [
        {icon: faBook, name: "Project"},
        {icon: faSeedling, name: "Club"},
        {icon: faCode, name: "Hackathon"},
        {icon: faAward, name: "Award"},
        {icon: faPalette, name: "Hobbies"},
        {icon: faHammer, name: "Skills"}
    ];

    let addProject = (type) => {
        let newCount = sectionCards[type] + 1;
        let updatedSectionCard = {
            ...sectionCards
        };

        updatedSectionCard[type] = newCount;
        addSection(updatedSectionCard);
    };

    let additionalSectionsMenu = sections.map((section) => (
        <Item icon={section.icon}
              name={section.name}
              addNewSection={() => addProject(section.name)}/>
    ));

    return (
        <div class={shared.editmenu}>
            <div class={styles.additional}>
                <h3>Additional Sections</h3>
                <hr/>
                <CardsSection cards={sectionCards}/>
                <div class={styles.additionalItems}>
                    {additionalSectionsMenu}
                </div>
            </div>
        </div>
    )
}

export default Additional;
