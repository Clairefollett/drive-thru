import React, { Component } from 'react';
import FoodItems from './components/FoodItems';
import MenuList from './components/MenuList';
import OrderList from './components/OrderList';
import Total from './components/Total';
import { render } from 'react-dom';
import { Grid, Row, Col } from 'react-bootstrap';


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
    const remove = orders.indexOf(food);
    const refresh = orders.splice(remove, 1)
    this.setState({
      deletedItems: [...this.state.deletedItems, refresh],
      total: orders
    })
  }

  onComplete(food) {
    const orders = this.state.total;
    const remove = orders.indexOf(food);
    const refresh = orders.splice(remove, 1)
    this.setState({
      completedItems: [...this.state.completedItems, refresh],
      total: orders
    })
  }
  
  render() {
    return (
      <div className="App">
        <Grid>
        <Row className="show-grid">
          <Col xs={6} md={4}>
            <MenuList
              className="menu-list"
              onItemSelect={this.onItemSelect}
              items={this.state.items}
            />
          </Col>

          <Col xs={6} md={4}>
            <OrderList
              className="order-list"
              order={this.state.selectedItems}
              handleSubmit={this.handleSubmit}
            />
          </Col>

          <Col xsHidden md={4}>
            <Total
              className="total"
              complete={this.state.completedItems}
              cookList={this.state.total}
              onComplete={this.onComplete}
              onDelete={this.onDelete}
              inputValue={this.state.inputValue}
              selectedItems={this.state.selectedItems}
            />
          </Col>
        </Row>
        </Grid>
      </div>
    );
  }
}

export default App;
