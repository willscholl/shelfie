import React, { Component } from 'react'
import Product from './Product'
import axios from 'axios'
class Dashboard  extends Component {
  
  handleDelete = id => {
    axios.delete(`/api/inventory/${id}`).then(res => {
      this.props.getAllInventory()
    })
  }
  
  render() {
    const mappedInventory = this.props.inventoryList.map((item, index) => {
      return(
        <Product
          id = {item.id}
          delete = {this.handleDelete}
          key = {index}
          name = {item.name}
          price = {item.price}
          imgurl = {item.imgurl}
        />
      )
    }) 
    return(
      <div>
        <h1>Dashboard</h1>
        <div> 
          {mappedInventory}
        </div>
      </div>

      
    )
  }
}

export default Dashboard