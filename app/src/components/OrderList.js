import React from 'react';
import shortid from 'shortid';

const OrderList = (props) => {
    const OrderListItem = ({ item }) => {
        return (
            <div>{item.title} {item.price}</div>
        )
    }

    const addedFoodItems = props.order.map((item) => {
        return (
            <OrderListItem
                key={shortid.generate()}
                item={item}
            />
        )
    })

    return (
        <div>
            {addedFoodItems}
        </div>
    )
}

export default OrderList;
