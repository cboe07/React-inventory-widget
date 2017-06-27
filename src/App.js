import React, { Component } from 'react';
import './App.css';
import $ from 'jquery';
import FilterableProductTable from './FilterableProductTable';



class App extends Component {
  constructor(props) {
    super(props);
  }
  render() {
    return (
      <div className="App">
        <h1>Inventory widget</h1>
        <FilterableProductTable product={this.props.products}/>
        

      </div>
    );
  }
}

export default App;
