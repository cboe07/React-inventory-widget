import React, { Component } from 'react';
import './App.css';
// import $ from 'jquery';
// import FilterableProductTable from './FilterableProductTable';
import SearchBar from "./SearchBar";
import ProductTable from "./ProductTable";



class App extends Component {
  constructor(props) {
    super(props);
    this.products = props.products
    console.log(props.products)
  }
  render() {
    return (
      <div className="App container">
        <h1>Inventory widget</h1>
        <SearchBar />
        <ProductTable products={this.products}/>
        

      </div>
    );
  }
}

export default App;
