import React from 'react';
import TotalListItem from './TotalListItem';
import SearchBar from './SearchBar';

const Total = (props) => {
    if (props.cookList.length === 4) {
        alert('the manager has been alerted')
    }

    const renderProps = props.cookList.map((food, index) => {
        return (
            <TotalListItem
                index={index}
                food={food}
                key={index}
                onDelete={props.onDelete}
                onComplete={props.onComplete}
                inputValue={props.inputValue}
            />
        );
    })
    
    return (
        <div>
            <h1>Opal's Drive Thru</h1>
            <div>{renderProps}</div>
        </div>
    )
}

export default Total;