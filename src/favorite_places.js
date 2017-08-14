import React, { Component } from "react";

export default class Table extends Component {

	renderTable(data){
		return(
			<tr  >
				<td class="rows" >{data}</td>
			</tr>
			
		);
	}

	render(){
		return (
			<table id="table" className="table table-hover" >
				<thead>
					<tr >
					<th>Click To Select Your Favorite Places </th>
					</tr>
				</thead>
				<tbody>
					{this.props.stores.map(this.renderTable)}
				</tbody>
			</table>

		);
	}

}