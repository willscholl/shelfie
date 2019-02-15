import React, { Component } from "react";
import axios from "axios";
import Dashboard from "./components/Dashboard";
import Form from "./components/Form";

import "./App.css";

class App extends Component {
  constructor() {
    super();

    this.state = {
      inventory: [],
      currentProduct: {}
    };

    this.getAllInventory = this.getAllInventory.bind(this);
  }

  componentDidMount() {
    axios.get("/api/inventory").then(res => {
      this.setState({
        inventory: res.data
      });
    });
  }

  getAllInventory() {
    axios.get("/api/inventory").then(res => {
      this.setState({
        inventory: res.data
      });
    });
  }

  selectedProduct() {
    //UGHHHHHH I WAS SO CLOSE TO FINISHING 
  }

  render() {
    return (
      <div className="App">
        <Dashboard 
          inventoryList={this.state.inventory} 
          getAllInventory={this.getAllInventory}
          />
        <Form 
        getAllInventory={this.getAllInventory} 
        currentProduct={this.state.currentProduct}/>
      </div>
    );
  }
}

export default App;
 