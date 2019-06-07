import React, { Component } from 'react';

class Coin extends Component {
  render() { 
    return ( 
        <img src={this.props.data.url} alt={this.props.data.side}/>
     );
  }
}

export default Coin;
 
