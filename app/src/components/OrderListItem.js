import React from 'react';

const OrderListItem = ({item}) => {
    return (
        <li>
            <div>{item.title}</div>
            <div>{item.price}</div>
        </li>
    )
}

export default OrderListItem;