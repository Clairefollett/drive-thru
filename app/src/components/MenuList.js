import React from 'react';
import MenuListItem from './MenuListItem';
import shortid from 'shortid'

const MenuList = (props) => {
    const foodItems = props.items.map((item) => {
        return (
            <MenuListItem
                onItemSelect={props.onItemSelect}
                key={shortid.generate()} 
                item={item} />
        )
    });

    return (
        <ul className="menu">
            {foodItems}
        </ul>
    )
}

export default MenuList;