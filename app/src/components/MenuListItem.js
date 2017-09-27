import React from 'react';

const MenuListItem = ({item, onItemSelect}) => {
    console.log(onItemSelect)
    return (
        <li onClick={() => onItemSelect(item)}>
            <div>{item.title}</div>
            <div>{item.price}</div>
        </li>
    )
}

export default MenuListItem;