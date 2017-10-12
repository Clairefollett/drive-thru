import React, { Component } from 'react';
import MdAddCircleOutline from 'react-icons/lib/md/add-circle-outline'
import FoodItems from './FoodItems';

class SearchBar extends Component {
    constructor(props) {
        super(props);
        this.state = {
            inputValue: ''
        }
        this.handleChange = this.handleChange.bind(this)
        this.addItem = this.addItem.bind(this)
    }
    handleChange(event) {
        this.setState({
            inputValue: event.target.value
        })
    }

    addItem(event) {
        event.preventDefault();
        const input = { title: "", price: 0 };
        input.title = this.state.inputValue;
        FoodItems.forEach((item) => {
            if (item.title === input.title || item.title.toLowerCase() === input.title) {
                const itemPrice = item.price;
                input.price = itemPrice;
                const newFood = this.props.food.push(input)
                this.props.updateFoodList(newFood)
            }
        })
        this.setState({
            inputValue: ''
        })

    }


    render() {
        return (<div>
            <form
                className="form"
                onSubmit={this.addItem}>
                <div className="edit-input-div">
                    <input type='text' value={this.state.inputValue}
                        onChange={this.handleChange}
                        className='form-control'
                        placeholder="AddItem"
                    />
                    <span>
                        <MdAddCircleOutline onClick={this.addItem} className="add-new-item" />
                    </span>
                </div>
            </form>
        </div>

        )
    }
}

export default SearchBar;
