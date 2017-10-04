import React, { Component } from 'react';

class SearchBar extends Component {
    constructor(props) {
        super(props)

        this.state = {
            inputValue: ''
        }
    this.handleChange = this.handleChange.bind(this);
    }
    
    addItem(props) {
        const food = this.props.food;
        food.push(this.state.inputValue)
    }

    handleChange(event) {
        this.setState({
          inputValue: event.target.value
        });
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
                  <button className="add-new-item">Add Food</button>
                </span>
              </div>
            </form>
        </div>
        )
    }
}

export default SearchBar;