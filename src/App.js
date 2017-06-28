import React, { Component } from 'react';
import './App.css';
// import $ from 'jquery';
// import FilterableProductTable from './FilterableProductTable';
import SearchBar from "./SearchBar";
import ProductTable from "./ProductTable";

import Toggle from './Toggle';
import MyForm from './MyForm';
import Calculator from './Calculator';


class App extends Component {
  constructor(props) {
    super(props);
    this.products = props.products
    console.log(props.products)
  }
  render() {

    return(
      <Calculator />
    )

    return(
      <MyForm />
    )


    // Basic Render Component
    return(
      <Toggle />
    )

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
