var React = require('react');


export class Pagination extends React.Component{ 

	constructor(props) {
		super(props);
		this.changePage = this.changePage.bind(this);
	}

	changePage(event) {
		if (event.target.id < 1) {
			event.target.id = 1;
		} else if (event.target.id > 100) {
			event.target.id = 100;
		}
		this.props.onPageChange(event.target.id);
    }

	render(){
		let totalItems = this.props.vendors.length;
		let currentPage = parseInt(this.props.currentPage, 10);
		let itemsPerPage = this.props.itemsPerPage;
		let totalPages = Math.ceil(totalItems/itemsPerPage);
		let startPage, endPage;

        const pageNumbers = [];
        for (let i = 1; i <= totalPages; i++) {
          pageNumbers.push(i);
        }

        var getVisibleBand = function() {
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
   		};
    	getVisibleBand();
        
        const renderLimitedPages = [];
        for (let i = startPage; i <= endPage; i++){
        	if (i === currentPage) {
        		renderLimitedPages.push(<li className='pagination active' id={i} key={i} onClick={this.changePage}>{i}</li>);
        	} else {
        		renderLimitedPages.push(<li className='pagination' id={i} key={i} onClick={this.changePage}>{i}</li>);
        	}
        }

		return(
          <div>
          	<ul className='center' id="page-numbers">
            	<li className='pagination' id='1' onClick={this.changePage}>First</li>
            	<li className='pagination' id={currentPage - 1} onClick={this.changePage}>Back</li>
              	{renderLimitedPages}
            	<li className='pagination' id={currentPage + 1} onClick={this.changePage}>Next</li>
            	<li className='pagination' id={totalPages} onClick={this.changePage}>Last</li>
          	</ul>
          </div>	
        )
	}
}

