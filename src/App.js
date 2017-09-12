import React, { Component } from 'react';
import logo from './logo.svg';
import './App.css';
import { Table, TableRow } from './table.js';
var api = require('./api.js');



class App extends React.Component {
  constructor(props) {
  super(props)
  this.state = {
    data: [],
    rows: []
  }
}


  componentDidMount() {
    var self = this;
    api.fetchDescendingVendorAmt()
      .then(function (response) {
        self.setState({
          data: response
        });
        self.state.data.forEach(function(vendor) {
          self.state.rows.push(<TableRow key={self.state.data.indexOf(vendor)} Vendor_Name={vendor.vendor_name} Amount={vendor.total} />);
        }.bind(this));
    })
  }




  render() {
    const vendorRows = this.state.data
    return (
      <div>
        <h1>Chicago Vendor Payment Amounts</h1>
        <Table data={vendorRows} />
      </div>
    );
  }
}


export default App;