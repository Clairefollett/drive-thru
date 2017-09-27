import React from 'react';
import MenuListItem from './MenuListItem';

const MenuList = (props) => {
    const foodItems = props.items.map((item) => {
        return <MenuListItem key={item.title} item={item} />
    });
    
    return (
        <ul>
            {foodItems}
        </ul>
    )
}

export default MenuList;