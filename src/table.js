var React = require('react');
var api = require('./api.js');
var numeral = require('numeral');



export class TableRow extends React.Component{ 

  render() {
  	let vendorName = this.props.vendor_name
  	let vendorAmount = this.props.amount
  	let rank = this.props.rank
  	vendorAmount = numeral(vendorAmount).format('$0,0.00')
    return (
      <tr>
      	<td>{rank}</td>
        <td>{vendorName}</td>
        <td>{vendorAmount}</td>
      </tr>
    );
  }
}


export class Table extends React.Component {

	render() {
		var vendorRows = this.props.data;
		var currentPage = this.props.currentPage;
		var renderRows = []

		vendorRows.forEach(function(vendor, index) {
			if (index + 1 <= (currentPage * 10) && index >= currentPage * 10 - 10) {
			renderRows.push(<TableRow rank={index + 1} vendor_name={vendor.vendor_name} amount={vendor.total} />);
		}
		})
		return (
		<table>
			<tbody>
				{renderRows}
			</tbody>
		</table>
	)
	}
}