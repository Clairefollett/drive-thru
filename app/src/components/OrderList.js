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
    const order = props.order;
    const handleSubmit=props.handleSubmit;
    
    return (
        <div>
            <div>
                {addedFoodItems}
            </div>
            <button onClick={() => handleSubmit(order)}>Send to the Cook</button>
        </div>
    )
}

export default OrderList;
