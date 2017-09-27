import React from 'react';
import OrderListItem from './OrderListItem';
import shortid from 'shortid';

const OrderList = (props) => {
    const addedFoodItems = props.order.map((item) => {
        console.log(props)
        return (
            <OrderListItem 
                key={shortid.generate()}
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