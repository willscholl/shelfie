import React, { Component } from 'react'

class Product  extends Component {
  
  render() {
    return(
      <div>
      <p>
        Name: {this.props.name} 
      </p>
      <p>
        Price: {this.props.price}
      </p>
      <p>
        Image Url: {this.props.imgurl}
      </p>
      <button onClick={() => this.props.delete(this.props.id)}>Delete</button>
      <button>Edit</button>
      </div>
    )
  }
}

export default Product