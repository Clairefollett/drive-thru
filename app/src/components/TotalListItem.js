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

    removeItem(index) {
        const updated = this.props.food.splice(index, 1)

        this.setState({
            food: updated
        })
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
                        <li onClick={this.removeItem.bind(this, index)} className="cook-list-items" key={shortid.generate()} id={index}>{item.title}</li>
                    )
                })}
                <button className="delete" onClick={() => this.props.onDelete(this.props.food)}>Delete Order</button>
                <button className="complete" onClick={() => this.props.onComplete(this.props.food)}>Complete Order</button>
            </ul>
        )
    }
}

export default TotalListItem;
