import React from 'react';
import shortid from 'shortid';
import TiArrowUpOutline from 'react-icons/lib/ti/arrow-up-outline'

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
            <TiArrowUpOutline className="send-cook"onClick={() => handleSubmit(order)} />
            <p>Send</p>
        </div>
    )
}

export default OrderList;
