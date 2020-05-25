import React from 'react';

export const Searchbar = (props) => {
    return(
    <div>
        <input type='search' placeholder='find monster' onChange={props.handleChange}/>
    </div>
    )
    }