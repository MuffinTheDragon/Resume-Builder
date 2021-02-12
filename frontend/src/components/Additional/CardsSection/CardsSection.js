import React from 'react';
import Card from "./Card/Card";

let CardsSection = (props) => {
    let cards = Object.keys(props.cards).map((name) => {
        return [...Array(props.cards[name])].map((_, index) => {
            return <Card name={name} key={index}/>
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

export default CardsSection;
