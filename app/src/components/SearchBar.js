import React, { Component } from 'react';

class SearchBar extends Component {
    constructor(props) {
        super(props)

        this.state = {
            inputValue: ''
        }
    this.handleChange = this.handleChange.bind(this);
    this.addItem = this.addItem.bind(this);
    }

    handleChange(event) {
        const inputTerm = event.target.value;
        this.setState({
          inputValue: inputTerm
        })
    }

    addItem(props) {
        console.log(this.props.food)
        const food = this.props.food;
        food.push({value: this.state.inputValue})
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



// import React, { Component } from 'react';

// const SearchBar = (props) => {
//     const food = props.food;

//     const addItem = (event) => {
//         food.push(event.target.value)
//     }

//     const handleChange = (event) => {
//         event = event.target.value
//     }


//     return (
//         <div>
//             <form
//                className="form"
//                onSubmit={addItem}>
//                <div className="edit-input-div">
//                  <input type='text'
//                    onChange={handleChange}
//                    className='form-control'
//                    placeholder="AddItem"
//                  />
//                  <span> 
//                    <button onClick={addItem} className="add-new-item">Add Food</button>
//                  </span>
//                </div>
//              </form>
//         </div>
//     )
// }

// class SearchBar extends Component {
//     constructor(props) {
//         super(props)

//         this.state = {
//             inputValue: '',
//             food: this.props.food
//         }
//     this.handleChange = this.handleChange.bind(this);
//     }
    
//     addItem(props) {
//         const food = this.state.food;
//         food.push(this.state.inputValue)
//         this.setState({
//             food: food,
//             inputValue: ''
//           });
//         return false;
//     }

//     handleChange(event) {
//         this.setState({
//           inputValue: event.target.value
//         });
//     }
    
//     render() {
        


//         return (<div>
//             <form
//               className="form"
//               onSubmit={this.addItem}>
//               <div className="edit-input-div">
//                 <input type='text' value={this.state.inputValue}
//                   onChange={this.handleChange}
//                   className='form-control'
//                   placeholder="AddItem"
//                 />
//                 <span> 
//                   <button onClick={this.addItem} className="add-new-item">Add Food</button>
//                 </span>
//               </div>
//             </form>
//         </div>
//         )
//     }
// }
