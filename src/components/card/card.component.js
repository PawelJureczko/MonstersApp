import React from 'react';
import './card.style.css';

export const Card = props => {
    return(
    <div className="card">
        <img src={`https://robohash.org/${props.monster.id}?set=set2`} alt="terryfing monster"/>
        <h2>{props.monster.name}</h2>
        <h3>{props.monster.email}</h3>
    </div>
    )
}