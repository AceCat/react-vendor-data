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
		let currentPage = parseInt(this.props.currentPage, 10)
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
            } else if (currentPage + 4 >= totalPages) {
                startPage = totalPages - 9;
                endPage = totalPages;
            } else {
                startPage = currentPage - 5;
                endPage = currentPage + 4;
            }
        
        const renderLimitedPages = []
        for (let i = startPage; i <= endPage; i++){
        	if (i === currentPage) {
        		renderLimitedPages.push(<li className='pagination active' id={i} key={i} onClick={this.handleClick}>{i}</li>)
        	} else {
        		renderLimitedPages.push(<li className='pagination' id={i} key={i} onClick={this.handleClick}>{i}</li>)
        	}
        }

		return(
          <div>
          	<ul className='center' id="page-numbers">
            	<li className='pagination' id='1' onClick={this.handleClick}>First</li>
            	<li className='pagination' id={currentPage - 1} onClick={this.handleClick}>Back</li>
              	{renderLimitedPages}
            	<li className='pagination' id={currentPage + 1} onClick={this.handleClick}>Next</li>
            	<li className='pagination' id={totalPages} onClick={this.handleClick}>Last</li>
          	</ul>
          </div>	
        )
	}
}

