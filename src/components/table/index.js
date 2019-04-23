import React, { Component } from 'react';
import ReactTable from 'react-table';
import 'react-table/react-table.css'

class Table extends Component {
  render() {
    return (
      <ReactTable
        data={ this.props.data }
        columns={ this.props.columns }
        defaultSorted={ this.props.defaultSorted }
        defaultPageSize={50}
      />
    );
  }
};

export default Table;
