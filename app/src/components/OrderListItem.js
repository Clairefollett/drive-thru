import React from 'react';

const OrderListItem = ({item}) => {
    return (
            <div>{item.title} {item.price}</div>
    )
}

export default OrderListItem;