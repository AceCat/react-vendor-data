var React = require('react');

export class Pagination extends React.Component{ 

	constructor(props) {
		super(props)
		this.handleClick = this.handleClick.bind(this);
	}
	
	handleClick(event) {
		this.props.onPageChange(event.target.id)
    };


	render(){
		let totalItems = this.props.vendors.length
		let currentPage = this.props.currentPage
		let itemsPerPage = this.props.itemsPerPage
		console.log(this)


        const pageNumbers = [];
        for (let i = 1; i <= Math.ceil(totalItems / itemsPerPage); i++) {
          pageNumbers.push(i);
        }

		const renderPageNumbers = pageNumbers.map(number => {
          return (
            <li
              key={number}
              id={number}
              onClick={this.handleClick}
            >
              {number}
            </li>
          );
        });


		return(
          <div>
            <ul id="page-numbers">
              {renderPageNumbers}
            </ul>
          </div>	
        )
	}
}