import React, { Component } from 'react';
import ReactTable from 'react-table';
import 'react-table/react-table.css'
import './table.scss';

import Cell from './DragCell';

class Table extends Component {
  render() {
    const expandedRows = this.props.data.map((row) => true);
    return (
      <div className="tableSection">
        <ReactTable
          data={ this.props.data }
          columns={ this.props.columns }
          defaultSorted={ this.props.defaultSorted }
          defaultPageSize={50}
          resizable={ false }
          expanded={expandedRows}
          onExpandedChange={(newExpanded, index) => {
              this.setState((oldState) => {
                const itemIndex = index[0];
                const isExpanded = oldState.expandedRows[itemIndex];
                const expandedList = [...expandedRows];
                expandedList[itemIndex] = !isExpanded;
                return {
                  expandedRows: expandedList
                };
              });
          }}
          SubComponent={ row => {
              return (
                <Cell
                  value={ row.row }
                  addSkaterToOptimizer={ this.props.addSkaterToOptimizer }
                />
              );
          }}
        />
      </div>
    );
  }
};

export default Table;
