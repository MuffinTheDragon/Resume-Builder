import React from 'react';
import ExperienceCard from "./ExperienceCard/ExperienceCard";

let ExperienceGroup = (props) => {
    let cards = Object.keys(props.cards).map((name) => {
        return [...Array(props.cards[name])].map((_, index) => {
            return <ExperienceCard name={name} key={index}/>
        });
    }).reduce((arr, el) => {
        return arr.concat(el)
    }, []);

    return (
        <div>
            {cards}
        </div>
    )
};

export default ExperienceGroup;
