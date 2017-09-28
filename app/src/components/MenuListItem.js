import React from 'react';

const MenuListItem = ({item, onItemSelect}) => {
    return (
        <li onClick={() => onItemSelect(item)}>
            <div>{item.title}</div>
        </li>
    )
}

export default MenuListItem;