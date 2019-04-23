import React from 'react';

import Table from '../../components/table';
import { sortIntegerColumn, sortFloatColumn } from '../../components/table/tableUtils';

const columns = [
  {
    Header: 'NAME',
    accessor: 'Name',
    width: 400
  }, {
    Header: 'POS',
    accessor: 'Pos',
    width: 75
  }, {
    Header: 'FPTS',
    accessor: 'FPts',
    sortMethod: sortFloatColumn
  }, {
    Header: 'FPTS SD',
    accessor: 'FPtsSD',
    sortMethod: sortFloatColumn
  }, {
    Header: 'SALARY',
    accessor: 'Salary',
    sortMethod: sortIntegerColumn
  }, {
    Header: 'SALARY SD',
    accessor: 'SalarySD',
    sortMethod: sortIntegerColumn
  }, {
    Header: 'VALUE',
    accessor: 'Value',
    sortMethod: sortFloatColumn
  }, {
    Header: 'VALUE SD',
    accessor: 'ValueSD',
    sortMethod: sortFloatColumn
  }, {
    Header: 'RANK',
    accessor: 'Rank',
    sortMethod: sortIntegerColumn,
    width: 75
  }, {
    Header: 'RANK SD',
    accessor: 'RankSD',
    sortMethod: sortIntegerColumn,
    width: 100
  }, {
    Header: 'TEAM',
    accessor: 'Team'
  }, {
    Header: 'OPP',
    accessor: 'OppTeam'
  }, {
    Header: 'PROJTOIEV',
    accessor: 'ProjTOIEV',
    sortMethod: sortFloatColumn,
    width: 125
  }, {
    Header: 'PROJTOIPP',
    accessor: 'ProjTOIPP',
    sortMethod: sortFloatColumn,
    width: 125
  }, {
    Header: 'PROJTOISH',
    accessor: 'ProjTOISH',
    sortMethod: sortFloatColumn,
    width: 125
  }
];

const defaultSorted = [
  {
    id: "Value",
    desc: true
  }
];

export default (props) => {
  return <Table columns={ columns } data={ props.data } defaultSorted={ defaultSorted } />
}
