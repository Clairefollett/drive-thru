import React from 'react';
import shortid from 'shortid';

const TotalListItem = (props) => {
    return (
        <ul>
            {props.food.map((item) => {
                return (
                    <li key={shortid.generate()}>{item.title}</li>     
                )
            })}
        </ul>
    );
};

export default TotalListItem;
