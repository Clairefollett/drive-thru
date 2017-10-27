import React from 'react';

const MenuListItem = ({item, onItemSelect}) => {
    const number = '$' + parseFloat(Math.round(item.price * 100) / 100).toFixed(2);
    return (
        <li className="food-item" onClick={() => onItemSelect(item)}>
            <div className="specific-item">{item.image}</div>
        </li>
    )
}

export default MenuListItem;