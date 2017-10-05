import React from 'react';
import shortid from 'shortid';
import SearchBar from './SearchBar';

const TotalListItem = (props) => {
    return (
        <ul className="cook-list" id={props.index}>
            {props.food.map((item, index) => {
                return (
                    <li className="cook-list-items" key={shortid.generate()} id={index}>{item.title}</li>     
                )
            })}
        <button className="delete" onClick={() => props.onDelete(props.food)}>Delete Order</button>
        <button className="complete" onClick={() => props.onComplete(props.food)}>Complete Order</button>
        <SearchBar 
            food={props.food}
        />
        </ul>
    );
};

export default TotalListItem;
