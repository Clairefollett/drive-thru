import React, { Component } from 'react';

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
        const input = this.state.inputValue;
        this.props.food.push({title: input}) 
        console.log(this.props.food) 
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
                        <button onClick={this.addItem} className="add-new-item">Add Food</button>
                    </span>
                </div>
            </form>
        </div>

        )
    }
}

export default SearchBar;
