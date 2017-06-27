import React, {Component} from 'react';
import ProductRow from "./ProductRow";
import ProductCategoryRow from "./ProductCategoryRow";

class ProductTable extends Component {
	render(){
		var rows = [];
		var lastCategory = "";
		var key = 0;
		this.props.products.products.map(function(currProduct, index){
			if(currProduct.category !== lastCategory){
				//we need to add this to our rows array becasue its a new cat
				rows.push(<ProductCategoryRow key={key} category={currProduct.category} />)
				lastCategory = currProduct.category;
				key++;
			}
			rows.push(<ProductRow key={key} randomThing={currProduct} />)
			key++;
		});
		console.log(rows);
		return(
			<table>
				<thead>
					<tr>
						<th>Name</th>
						<th>Price</th>
					</tr>
				</thead>
				<tbody>
					{rows}
				</tbody>
			</table>
		)
	}
}


export default ProductTable;