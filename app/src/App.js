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
      total: [],
      completedItems: [],
      deletedItems: []
    }
    this.onItemSelect = this.onItemSelect.bind(this);
    this.handleSubmit = this.handleSubmit.bind(this);
    this.onComplete = this.onComplete.bind(this);
    this.onDelete = this.onDelete.bind(this);
  }

  onItemSelect(item) {
    this.setState({
      selectedItems: [...this.state.selectedItems, item],
    }) 
  }

  handleSubmit(order) {
    this.setState({
      total: [...this.state.total, order],
      selectedItems: []
    })
  }

  onDelete(food) {
    const orders = this.state.total;
    if(orders > 1) {
      orders.forEach((food) => {
        for(var i = orders.length-1; i--;){
          if (orders[i] === food) orders.splice(i, 1);
        }
        this.setState({
          deletedItems: [...this.state.deletedItems, food],
          total: orders
        })
      })
    } else {
      orders.shift();
      this.setState({
        deletedItems: [...this.state.deletedItems, food],
        total: orders
      })
    }
  }

  onComplete(food) {
    const orders = this.state.total;
    if(orders > 1) {
      orders.forEach((food) => {
        for(var i = orders.length-1; i--;){
          if (orders[i] === food) orders.splice(i, 1);
        }
        this.setState({
          completedItems: [...this.state.completedItems, food],
          total: orders
        })
      })
    } else {
      orders.shift();
      this.setState({
        completedItems: [...this.state.completedItems, food],
        total: orders
      })
    }
  }
  
  render() {
    return (
      <div className="App">
        <Total
          className="cook-list"
          complete={this.state.completedItems}
          cookList={this.state.total}
          onComplete={this.onComplete}
          onDelete={this.onDelete}
        />
        <MenuList
          className="menu"
          onItemSelect={this.onItemSelect}
          items={this.state.items}
        />
        <OrderList
          className="current-order"
          order={this.state.selectedItems}
          handleSubmit={this.handleSubmit}
        />
      </div>
    );
  }
}

export default App;
