import React from 'react';
import { Card } from '../card/card.component';
import './cardlist.style.css';

export const CardList = props => (
    <div className="cardlist">
        {props.monster.map(item => (
            <Card key={item.id} monster={item}/>
        ))}
    </div>
)