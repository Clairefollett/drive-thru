import React from 'react';
import OrderListItem from './OrderListItem';

const OrderList = (props) => {
    const addedFoodItems = props.order.map((item) => {
        return (
            <OrderListItem 
                key={item.title}
                item={item}
            />
        )
    })

    return (
        <ul>
            {addedFoodItems}
        </ul>
    )
}

export default OrderList;