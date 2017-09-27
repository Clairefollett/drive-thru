import React from 'react';

const MenuListItem = ({item}) => {
    return (
        <li>
            <div>{item.title}</div>
            <div>{item.price}</div>
        </li>
    )
}

export default MenuListItem;