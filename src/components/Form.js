import React, { Component } from 'react'
import axios from 'axios'


class Form extends Component {
  constructor(props) {
    super(props);

    this.state = {
      editing: false,
      name: '',
      price: 0,
      imgurl: '',
      currentproduct: props.currentProduct || null
    }
  }

  handleName(val) {
    this.setState({
      name: val
    })
  }

  handlePrice(val) {
    this.setState({
      price: val
    })
  }

  handleImgurl(val) {
    this.setState({
      imgurl: val
    })
  }
  
  handleCancel() {
    this.setState({
      name: '',
      price: '',
      imgurl: ''
    })
  }

  handleCreate() {
    const { name, price, imgurl } = this.state;
    axios.post('/api/inventory', {name, price, imgurl}).then(res => {
      this.props.getAllInventory()
    })
    this.handleCancel()
  }

  componentDidUpdate(prevProps) {
    if (this.state.currentproduct.id !== this.props.currentProduct.id) {
      this.setState({
        currentproduct: this.props.currentProduct
      })
    }
  }

  render() {
    return(
      <div>
        <input
          type="text"
          onChange={e => this.handleName(e.target.value)}
          value={this.state.name}
        />
        <input 
          type="number"
          onChange={e => this.handlePrice(e.target.value)} 
          value={this.state.price}
        />
        <input 
          type="text"
          onChange={e => this.handleImgurl(e.target.value)}
          value={this.state.imgurl}
        />
        <button onClick={() => this.handleCancel()}>Cancel</button>
        <button onClick={() => this.handleCreate()}>Add to Inventory</button>
      </div>
    )
  }
}

export default Form;