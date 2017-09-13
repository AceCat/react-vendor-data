import React from 'react';
import './App.css';
import { Table } from './table.js';
import { Pagination } from './paginate.js'
import { Selector } from './select.js'
var api = require('./api.js');



class App extends React.Component {
  constructor(props) {
    super(props)
    this.state = {
      data: [],
      currentPage: 1,
      itemsPerPage: 10,
      queryType: 'vendors'
    }
    this.changePage = this.changePage.bind(this);
    this.changeQuery = this.changeQuery.bind(this);
  }

  changePage(pageNum) {
    this.setState({currentPage: pageNum})
  }

  changeQuery(queryValue){
    this.setState({queryType: queryValue})
  }

  render() {
    const vendorRows = this.state.data;
    const currentPage = this.state.currentPage;
    const itemsPerPage = this.state.itemsPerPage;

  if (this.state.queryType === 'vendors') {
      api.fetchDescendingVendorAmt()
      .then((response) => {
        this.setState({
          data: response
        });
    })
  } else if (this.state.queryType === 'payments') {
      api.fetchDescendingPaymentAmt()
      .then((response) => {
        this.setState({
          data: response
        });
    })
  }

    return (
      <div className='container'>
          <h1 className='center'>Chicago Vendor Payment Amounts</h1>
          <Selector onPageChange={this.changeQuery} />
          <Table data={vendorRows} currentPage={currentPage}/>
        <Pagination 
        vendors={vendorRows} 
        currentPage={currentPage} 
        itemsPerPage={itemsPerPage} 
        onPageChange={this.changePage}/>
      </div>
    );
  }
}


export default App;