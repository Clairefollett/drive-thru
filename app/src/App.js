import React, { Component } from 'react';
import FoodItems from './components/FoodItems';
import MenuList from './components/MenuList';
import OrderList from './components/OrderList';

class App extends Component {
  constructor(props) {
    super(props);

    this.state = {
      items: FoodItems,
      selectedItems: []
    }
    this.onItemSelect = this.onItemSelect.bind(this);
  }

  onItemSelect(item) {
    this.setState({
      selectedItems: [...this.state.selectedItems, item]
    }) 
  }
  
  render() {
    return (
      <div className="App">
        <OrderList 
          order={this.state.selectedItems} 
        />
        <MenuList
          onItemSelect={this.onItemSelect}
          items={this.state.items}
        />
      </div>
    );
  }
}

export default App;
