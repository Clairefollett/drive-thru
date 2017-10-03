import React from 'react';
import shortid from 'shortid';
import TotalListItem from './TotalListItem';

const Total = (props) => {
    if (props.cookList.length > 4) {
        alert('the manager has been alerted')
    }

    const renderProps = props.cookList.map((food) => {
        console.log(props.complete)
        return (
            <TotalListItem 
                food={food}
                key={shortid.generate()}
                onDelete={props.onDelete}
                onComplete={props.onComplete}
            />
        );
    })
    
    return (
        <div>
            <div>Cookslist</div>
            <div>{renderProps}</div>
        </div>
    )
}

export default Total;