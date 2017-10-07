import React, { Component } from 'react';
import shortid from 'shortid';
import SearchBar from './SearchBar';
import MdClose from 'react-icons/lib/md/close';


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

    calculatePrice(prev, next) {
        const total = this.props.food.reduce(function(a, b) {
            return a + b.price;
          }, 0)
          const number = parseFloat(Math.round(total * 100) / 100).toFixed(2);
          return ('Total: ' + '$' + number)
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
                        <div className="cook-list-items-wrapper" key={index}>
                            <li className="cook-list-items" key={shortid.generate()} id={index}>{item.title}</li>
                            <MdClose className="icon" onClick={this.removeItem.bind(this, index)} />
                        </div>
                    )
                })}
                <div className="total">{this.calculatePrice()}</div>
                <div className="delete-button-wrapper">
                    <button className="delete" onClick={() => this.props.onDelete(this.props.food)}>Delete Order</button>
                </div>
                <div className="complete-button-wrapper">
                    <button className="complete" onClick={() => this.props.onComplete(this.props.food)}>Complete Order</button>
                </div>
            </ul>
        )
    }
}

export default TotalListItem;
