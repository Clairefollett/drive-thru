import React from 'react';
import OrderListItem from './OrderListItem';
import shortid from 'shortid';

const OrderList = (props) => {

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