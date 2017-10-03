import React from 'react';
import shortid from 'shortid';

const TotalListItem = (props) => {
    return (
        <ul>
        <button onClick={() => props.onDelete(props.food)}>Delete Order</button>
        <button onClick={() => props.onComplete(props.food)}>Complete Order</button>
            {props.food.map((item, index) => {
                return (
                    <li key={shortid.generate()} id={index}>{item.title}</li>     
                )
            })}
        </ul>
    );
};

export default TotalListItem;
