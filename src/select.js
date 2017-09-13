var React = require('react');

export class Selector extends React.Component {

	constructor(props) {
		super(props)
		this.changeQuery = this.changeQuery.bind(this);
	}

	changeQuery(event) {
		var selectedQuery = this.refs.querySelector.value
		this.props.onPageChange(selectedQuery)
    };

	render() {
		return (
			<div>
				<select ref='querySelector' defaultValue='vendors'>
					<option value='vendors'>Vendors</option>
					<option value='payments'>Payments</option>
				</select>
				<button onClick={this.changeQuery}>Change Query</button>
			</div>
		)
	}
}