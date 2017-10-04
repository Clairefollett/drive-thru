import React from 'react';

const MenuListItem = ({item, onItemSelect}) => {
    return (
        <li className="food-item" onClick={() => onItemSelect(item)}>
            <div className="specific-item">{item.title}</div>
        </li>
    )
}

export default MenuListItem;