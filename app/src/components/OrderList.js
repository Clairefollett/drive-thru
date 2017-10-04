import React from 'react';
import shortid from 'shortid';

const OrderList = (props) => {
    const OrderListItem = ({ item }) => {
        return (
            <div>{item.title}</div>
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
    const handleSubmit= props.handleSubmit;
    
    return (
        <div className="order-list-container">
            <div className="added-food">
                {addedFoodItems}
            </div>
            <button className="send-cook"onClick={() => handleSubmit(order)}>Send to the Cook</button>
        </div>
    )
}

export default OrderList;
