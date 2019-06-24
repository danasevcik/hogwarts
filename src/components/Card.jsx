import React from 'react';
import HogDetails from './HogDetails.jsx';

class Card extends React.Component {

  state = {
    clicked: false
  }

  getImage = (name) => {
    let formattedName = name.split(' ').join('_').toLowerCase()
    let pic = require(`../hog-imgs/${formattedName}.jpg`);
    return pic
  }

  handleClick = () => {
    this.setState({clicked: !this.state.clicked})
  }

  render() {
    return (
      <div>
        <h1>{this.props.hog.name}</h1>
        <img src={this.getImage(this.props.hog.name)}/>
        <button onClick={() => this.handleClick()}>Hog Details</button>
        <div>
        {this.state.clicked ? <HogDetails hog={this.props.hog}/> : null}
        </div>
      </div>
    )
  }
}

export default Card;
