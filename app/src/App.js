import React, { Component } from 'react';
import FoodItems from './components/FoodItems';
import MenuList from './components/MenuList';
import OrderList from './components/OrderList';
import Total from './components/Total';

class App extends Component {
  constructor(props) {
    super(props);

    this.state = {
      items: FoodItems,
      selectedItems: [],
      total: []
    }
    this.onItemSelect = this.onItemSelect.bind(this);
    this.handleSubmit = this.handleSubmit.bind(this);
  }

  onItemSelect(item) {
    this.setState({
      selectedItems: [...this.state.selectedItems, item],
    }) 
  }

  handleSubmit(order) {
    this.setState({
      total: [...this.state.total, order]
    })
  }
  
  render() {
    return (
      <div className="App">
        <Total cookList={this.state.total}/>
        <OrderList
          order={this.state.selectedItems}
          handleSubmit={this.handleSubmit}
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
