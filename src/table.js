var React = require('react');
var api = require('./api.js');
var numeral = require('numeral');



export class TableRow extends React.Component{ 

  render() {
  	let vendorName = this.props.vendor_name
  	let vendorAmount = this.props.amount
  	vendorAmount = numeral(vendorAmount).format('$0,0.00')
    return (
      <tr>
        <td>{vendorName}</td>
        <td>{vendorAmount}</td>
      </tr>
    );
  }
}


export class Table extends React.Component {

	render() {
		var vendorRows = this.props.data;
		var renderRows = []
		vendorRows.forEach(function(vendor) {
			renderRows.push(<TableRow vendor_name={vendor.vendor_name} amount={vendor.total} />);
		})
		console.log(renderRows)
		return (
		<table>
			<tbody>
				{renderRows}
			</tbody>
		</table>
	)
	}
}