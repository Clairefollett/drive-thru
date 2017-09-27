import React, { Component } from 'react';
import FoodItems from './components/FoodItems';
import MenuList from './components/MenuList';

class App extends Component {
  constructor(props) {
    super(props);

    this.state = {
      items: FoodItems,
      selectedItems: []
    }
  }
  
  
  render() {
    return (
      <div className="App">
        <MenuList
          items={this.state.items}
        />
      </div>
    );
  }
}

export default App;
