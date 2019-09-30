import React from 'react';
import Table from '../../../components/table';
import { sortIntegerColumn, sortFloatColumn } from '../../../components/table/tableUtils';

const columns = [
  {
    Header: 'NAME',
    accessor: 'Name',
    width: 500
  }, {
    Header: 'POS',
    accessor: 'Pos',
    width: 75
  }, {
    Header: 'FPTS',
    accessor: 'FPts',
    sortMethod: sortFloatColumn,
    width: 100
  }, {
    Header: 'SALARY',
    accessor: 'Salary',
    sortMethod: sortIntegerColumn,
    width: 100
  }, {
    Header: 'VALUE',
    accessor: 'Value',
    sortMethod: sortFloatColumn,
    width: 100
  }, {
    Header: 'RANK',
    accessor: 'Rank',
    sortMethod: sortIntegerColumn,
    width: 75
  }, {
    Header: 'TEAM',
    accessor: 'Team'
  }, {
    Header: 'OPP',
    accessor: 'OppTeam'
  }
];

const defaultSorted = [
  {
    id: "Value",
    desc: true
  }
];

export default (props) => {
  return <div className=""> <Table columns={ columns } data={ props.data } defaultSorted={ defaultSorted } addSkaterToOptimizer={ props.addSkaterToOptimizer } individualData={ props.individualData }/> </div>
}
