import React, { Component } from 'react';
import ReactTable from 'react-table';
import 'react-table/react-table.css'
import './table.scss';

class Table extends Component {
  render() {
    return (
      <div className="tableSection">
        <ReactTable
          data={ this.props.data }
          columns={ this.props.columns }
          defaultSorted={ this.props.defaultSorted }
          defaultPageSize={50}
          resizable={ false }
        />
      </div>
    );
  }
};

export default Table;
