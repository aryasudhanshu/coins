import React, { Component } from 'react';

class CoinContainer extends Component {
  static defaultProps = {
    coins: [
      {side: 'heads', url: 'http://tinyurl.com/react-coin-heads-jpg'},
      {side: 'tails', url: 'http://tinyurl.com/react-coin-tails-jpg'}
    ]
  }
  
  constructor(props) {
    super(props);
    this.state = {
      currCoin: null,
      nFlips: 0,
      nHeads: 0,
      nTails: 0
    }

    this.handleClick = this.handleClick.bind(this);

  }

  flipCoin() {

  }

  handleClick(e) {
    this.flipCoin();
  }

  render() { 
    return ( 
      <div className="CoinContainer">
        <h2>Let's Flip a coin</h2>
        <button onClick={this.handleClick}>Flip Me!</button>
        <p>Out of {this.state.nFlips}, there have been {this.state.nHeads} Heads and {this.state.nTails} Tails.</p>
      </div>
     );
  }
}
 
export default CoinContainer;