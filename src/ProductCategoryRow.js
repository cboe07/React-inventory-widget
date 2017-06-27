import React, {Component} from 'react';

// class ProductCategoryRow extends Component{
// 	render(){
// 		return(
// 			<tr>
// 				<th>{this.props.category}</th>
// 			</tr>
// 		)
// 	}
// }

function ProductCategoryRow(props){
	return(
		<tr>
			<td>{props.category}</td>
		</tr>
	)
}


export default ProductCategoryRow;