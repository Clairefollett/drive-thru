import React from 'react';
import TotalListItem from './TotalListItem';

const Total = (props) => {
    if (props.cookList.length === 4 && props.selectedItems.length === 0) {
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