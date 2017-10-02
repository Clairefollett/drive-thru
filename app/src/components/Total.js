import React from 'react';
import shortid from 'shortid';
import TotalListItem from './TotalListItem';

const Total = (props) => {
    if (props.cookList.length > 4) {
        alert('The manager has been alerted')
    }

    const renderProps = props.cookList.map((food) => {
        console.log(TotalListItem)
        return (
            <TotalListItem 
                food={food}
                key={shortid.generate()}
            />
        );
    })
    
    return (
        <div>
            <div>Props are rendering</div>
            <div>{renderProps}</div>
        </div>
    )
}

export default Total;