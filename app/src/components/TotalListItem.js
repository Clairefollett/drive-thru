import React, { Component } from 'react';
import shortid from 'shortid';
import SearchBar from './SearchBar';


class TotalListItem extends Component {
    constructor(props) {
        super(props);
        this.updateFoodList = this.updateFoodList.bind(this)
    }

    updateFoodList() {
        const orders = this.props.food
        this.setState({ food: orders})
    }

    render() {
        return (
            <ul className="cook-list" id={this.props.index}>
                <SearchBar
                    food={this.props.food}
                    inputValue={this.props.inputValue}
                    updateFoodList={this.updateFoodList}
                />
                {this.props.food.map((item, index) => {
                    return (
                        <li className="cook-list-items" key={shortid.generate()} id={index}>{item.title}</li>
                    )
                })}
                <button className="delete" onClick={() => this.props.onDelete(this.props.food)}>Delete Order</button>
                <button className="complete" onClick={() => this.props.onComplete(this.props.food)}>Complete Order</button>
            </ul>
        )
    }
}
// const TotalListItem = (props) => {
//     return (
        // <ul className="cook-list" id={props.index}>
        // <SearchBar 
        //     food={props.food}
        //     inputValue={props.inputValue}
        // />
        //     {props.food.map((item, index) => {
        //         return (
        //             <li className="cook-list-items" key={shortid.generate()} id={index}>{item.title}</li>     
        //         )
        //     })}
        // <button className="delete" onClick={() => props.onDelete(props.food)}>Delete Order</button>
        // <button className="complete" onClick={() => props.onComplete(props.food)}>Complete Order</button>
        // </ul>
        
//     );
// };

export default TotalListItem;
