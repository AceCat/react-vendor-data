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
		let currentPage = parseInt(this.props.currentPage)
		let itemsPerPage = this.props.itemsPerPage
		let totalPages = Math.ceil(totalItems/itemsPerPage)
		let startPage, endPage;


        const pageNumbers = [];
        for (let i = 1; i <= totalPages; i++) {
          pageNumbers.push(i);
        }

        if (currentPage <= 6) {
                startPage = 1;
                endPage = 10;
                console.log(currentPage)
            } else if (currentPage + 4 >= totalPages) {
                startPage = totalPages - 9;
                endPage = totalPages;
            } else {
                startPage = currentPage - 5;
                endPage = currentPage + 4;
                console.log(currentPage)
                console.log(endPage)
            }
        
        const renderLimitedPages = []
        for (let i = startPage; i <= endPage; i++){
        	renderLimitedPages.push(<li id={i} key={i} onClick={this.handleClick}>{i}</li>)
        }

		return(
          <div>
            <ul id="page-numbers">
              {renderLimitedPages}
            </ul>
          </div>	
        )
	}
}