import React, {useState} from "react";
import shared from '../../Shared.module.css';
import {Row, Col } from "react-bootstrap";
import {faBriefcase, faUserTie} from '@fortawesome/free-solid-svg-icons';
import ItemButton from "../ItemButton/ItemButton";
import ExperienceGroup from './ExperienceGroup/ExperienceGroup';

let Experience = () => {
    let [sectionCards, addSection] = useState({
        "Internship": 0,
        "Job": 0
    });

    let sections = [
        {icon: faBriefcase, name: "Internship"},
        {icon: faUserTie, name: "Job"},
    ];

    let addProject = (type) => {
        let newCount = sectionCards[type] + 1;
        let updatedSectionCard = {
            ...sectionCards
        };

        updatedSectionCard[type] = newCount;
        addSection(updatedSectionCard);
    };

    let ExperienceSectionMenu = sections.map((section, index) => (
        <ItemButton icon={section.icon}
              name={section.name}
              addNewSection={() => addProject(section.name)}
              key={index}/>
    ));

    return (
        <>
            <Row>
                <Col >
                    <ExperienceGroup cards={sectionCards}/>
                    <div className={"ml-5 mt-3 " + shared.itemButtonGroup}>
                        {ExperienceSectionMenu}
                    </div>
                </Col>
            </Row>
        </>
    )
}

export default Experience;
