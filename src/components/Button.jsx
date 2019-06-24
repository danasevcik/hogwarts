import React from 'react';

class Button extends React.Component {
  render() {
    return (
      <div>
        <button onClick={this.props.handleFilter}>Filter</button>
        <button onClick={this.props.handleNameSort}>Sort By Name</button>
        <button onClick={this.props.handleWeightSort}>Sort By Weight</button>
      </div>
    )

  }

}

export default Button;
