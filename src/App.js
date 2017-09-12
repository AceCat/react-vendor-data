import React, { Component } from 'react';
import logo from './logo.svg';
import './App.css';
import { Table, TableRow } from './table.js';
import { Pagination } from './paginate.js'
var api = require('./api.js');



class App extends React.Component {
  constructor(props) {
  super(props)
  this.state = {
    data: [],
    currentPage: 1,
    itemsPerPage: 10
  }
  this.changePage = this.changePage.bind(this);

}


  componentDidMount() {
    var self = this;
    api.fetchDescendingVendorAmt()
      .then(function (response) {
        self.setState({
          data: response
        });
    })
  }

  changePage(pageNum) {
    this.setState({currentPage: pageNum})
  }



  render() {
    const vendorRows = this.state.data;
    const currentPage = this.state.currentPage;
    const itemsPerPage = this.state.itemsPerPage;
    return (
      <div>
        <h1>Chicago Vendor Payment Amounts</h1>
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