import React, { Component } from 'react';
import { connect } from 'react-redux';
import { Tab, Tabs, TabList, TabPanel } from 'react-tabs';
import { Button, ButtonGroup, Colors, Sizes } from 'react-foundation';
import { fetchSkaterData } from '../../action-creators/fetch';
import { applyTeamFilter, applyIndividualPositionFilter, applyPairPositionFilter } from '../../action-creators/filters';

import SkaterTable from './SkaterTable';
import PairTable from './PairsTable';
import StackTable from './StacksTable';
import Optimizer from './Optimizer';

import TeamFilter from './TeamFilter';
import PositionFilter from './PositionFilter';

import './home.scss';

const CustomTab = ({ children }) => {
  return (
    <Tab>
      <Button
        color={ Colors.ALERT }
      >
        {children}
      </Button>
    </Tab>
  );
};

CustomTab.tabsRole = 'Tab';

class Home extends Component {
  constructor(props) {
    super(props);
    this.state = {
      todayTeams: []
    };
  }

  componentWillMount() {
    this.props.fetchSkaterData();
  }

  // these functions apply filters data for each table in tabs
  setSkaterTableData() {
    const initialData = this.props.skaterReducer.individualData;
    return initialData.filter(x => this.props.skaterReducer.selectedTeams.includes(x.Team) && this.props.skaterReducer.selectedIndividualPositions.includes(x.Pos))
  }

  setPairTableData() {
    const initialData = this.props.skaterReducer.pairData;
    return initialData.filter(x => this.props.skaterReducer.selectedTeams.includes(x.Team) && this.props.skaterReducer.selectedPairPositions.includes(x.Pos))
  }

  setStackTableData() {
    const initialData = this.props.skaterReducer.stackData;
    return initialData.filter(x => this.props.skaterReducer.selectedTeams.includes(x.Team))
  }

  render() {
    let skaterDisplay = 'Waiting For Data';
    let pairDisplay = 'Waiting For Data';
    let stackDisplay = 'Waiting For Data';
    let teamFilterDisplay;
    let individualPositionFilterDisplay;
    let pairPositionFilterDisplay;
    if (this.props.skaterReducer.loadedSkaterData) {
      // skater table
      skaterDisplay = (
        <SkaterTable
          data={ this.setSkaterTableData() }
        />
      );

      individualPositionFilterDisplay = (
        <PositionFilter
          positions={ ['C', 'W', 'D'] }
          selectedPositions={ this.props.skaterReducer.selectedIndividualPositions}
          onCheck={ this.props.applyIndividualPositionFilter }
        />
      );

      //pairs table
      pairDisplay = (
        <PairTable
          data={ this.setPairTableData() }
        />
      );

      pairPositionFilterDisplay = (
        <PositionFilter
          positions={ ['DC', 'DW', 'CW', 'WW'] }
          selectedPositions={ this.props.skaterReducer.selectedPairPositions}
          onCheck={ this.props.applyPairPositionFilter }
        />
      );

      // stacks table
      stackDisplay = (
        <StackTable
          data={ this.setStackTableData() }
        />
      );
      
      teamFilterDisplay = (
        <TeamFilter
          todayTeams={ this.props.skaterReducer.todayTeams }
          onCheck={ this.props.applyTeamFilter }
          selectedTeams={ this.props.skaterReducer.selectedTeams }
        />
      );
    }
    
    return (
      <div className="grid-container fluid">
        <div className="grid-x grid-padding-x">
          <div className="cell large-8">
            <div className="grid-x grid-margin-x">
              <div className="cell">
                { teamFilterDisplay }
              </div>
            </div>
            <div className="cell">
              <Tabs>
                <TabList>
                  <ButtonGroup isExpanded size={ Sizes.LARGE }>
                    <Tab className="button expanded large alert"> Skaters </Tab>
                    <Tab className="button expanded large alert"> Pair Stacks </Tab>
                    <Tab className="button expanded large alert"> Foward Line Stacks </Tab>
                  </ButtonGroup>
                </TabList>
                <TabPanel>
                  <div className="grid-y large-grid-frame">
                    <div className="cell large-1">
                      { individualPositionFilterDisplay }
                    </div>
                    <div className="cell auto">
                      { skaterDisplay }
                    </div>
                  </div>
                </TabPanel>
                <TabPanel>
                  <div className="grid-y large-grid-frame">
                    <div className="cell large-1">
                      { pairPositionFilterDisplay }
                    </div>
                    <div className="cell auto">
                      { pairDisplay }
                    </div>
                  </div>
                </TabPanel>
                <TabPanel>
                  <div className="grid-y large-grid-frame">
                    <div className="cell auto">
                      { stackDisplay }
                    </div>
                  </div>
                </TabPanel>
              </Tabs>
            </div>
          </div>
          <div className="cell large-4">
            <Optimizer />
          </div>
        </div>
      </div>
    );
  }
}

const mapStateToProps = state => ({
  ...state
})

const mapDispatchToProps = dispatch => ({
  fetchSkaterData: () => dispatch(fetchSkaterData()),
  applyTeamFilter: (team) => dispatch(applyTeamFilter(team)),
  applyIndividualPositionFilter: (position) => dispatch(applyIndividualPositionFilter(position)),
  applyPairPositionFilter: (position) => dispatch(applyPairPositionFilter(position))
})

export default connect(mapStateToProps, mapDispatchToProps) (Home);
