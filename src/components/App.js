import React, { Component } from 'react';
import '../App.css';

import Nav from './Nav';
import CardList from './CardList';
import Button from './Button';

import hogs from '../porkers_data';

class App extends Component {

  state = {
    hogs: hogs,
    filter: false,
    nameSort: false,
    weightSort: false
  }


  handleFilter = () => {
    console.log('click');
    this.setState({filter: !this.state.filter}, console.log(this.state.filter))
    if (this.state.filter) {
      let greased = hogs.filter(hog => {
        return hog.greased === true
      })
      this.setState({hogs: greased})
    }
    else {
      this.setState({hogs: hogs})
    }
  }

  handleNameSort = () => {
    console.log('clciked');
    this.setState({nameSort: !this.state.nameSort}, console.log(this.state.nameSort))
    if (this.state.nameSort === true) {
      let names = hogs.sort((a,b) => {
        console.log(a['name']);
        return a['name'].localeCompare(b['name'])
      })
    }
  }

  handleWeightSort = () => {
    console.log('weight');
    this.setState({weightSort: !this.state.weightSort}, console.log(this.state.weightSort))
    if (this.state.weightSort === true) {
      let weight = "weight as a ratio of hog to LG - 24.7 Cu. Ft. French Door Refrigerator with Thru-the-Door Ice and Water"
      let weights = hogs.sort((a,b) => {
        console.log(a[weight]);
        return a[weight] - b[weight]
      })

    }
  }

  render() {
    return (
      <div className="App">
        <Nav />
        <Button handleFilter={this.handleFilter} handleNameSort={this.handleNameSort} handleWeightSort={this.handleWeightSort}/>
        <CardList hogList={this.state.hogs}/>
      </div>
    )
  }
}

export default App;
