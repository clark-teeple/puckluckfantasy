import React, { Component } from 'react';
import { connect } from 'react-redux';
import { Tab, Tabs, TabList, TabPanel } from 'react-tabs';
import { Button, ButtonGroup, Colors, Sizes } from 'react-foundation';
import { addSkaterToOptimizer } from '../../action-creators/optimizer';
import { applyTeamFilter, applyIndividualPositionFilter, applyPairPositionFilter } from '../../action-creators/filters';

import SkaterTable from './Tables/SkaterTable';
import PairTable from './Tables/PairsTable';
import StackTable from './Tables/StacksTable';
import Optimizer from './Optimizer/Optimizer';

import TeamFilter from './Filters/TeamFilter';
import PositionFilter from './Filters/PositionFilter';

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

  // these functions apply filters data for each table in tabs
  setSkaterTableData() {
    const initialData = this.props.skaterReducer.individualData;
    return initialData.filter(x => this.props.skaterReducer.selectedTeams.includes(x.Team) && this.props.skaterReducer.selectedIndividualPositions.includes(x.Pos));
  }

  setPairTableData() {
    const initialData = this.props.skaterReducer.pairData;
    return initialData.filter(x => this.props.skaterReducer.selectedTeams.includes(x.Team) && this.props.skaterReducer.selectedPairPositions.includes(x.Pos));
  }

  setStackTableData() {
    const initialData = this.props.skaterReducer.stackData;
    return initialData.filter(x => this.props.skaterReducer.selectedTeams.includes(x.Team));
  }

  render() {

    const skaterData = this.setSkaterTableData();
    const pairData = this.setPairTableData();
    const stackData = this.setStackTableData();

    const {
      todayTeams,
      selectedTeams,
      selectedIndividualPositions,
      selectedPairPositions
    } = this.props.skaterReducer;

    const {
      applyIndividualPositionFilter,
      applyPairPositionFilter,
      applyTeamFilter,
      addSkaterToOptimizer
    } = this.props;

    return (
      <div className="grid-container fluid">
        <div className="grid-x grid-padding-x">
          <div className="cell large-8">
            <div className="grid-x grid-margin-x">
              <div className="cell">
                <TeamFilter
                  todayTeams={ todayTeams }
                  onCheck={ applyTeamFilter }
                  selectedTeams={ selectedTeams }
                />
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
                      <PositionFilter
                        positions={ ['C', 'W', 'D'] }
                        selectedPositions={ selectedIndividualPositions}
                        onCheck={ applyIndividualPositionFilter }
                      />
                    </div>
                    <div className="cell auto">
                      <SkaterTable
                        addSkaterToOptimizer={ addSkaterToOptimizer }
                        data={ skaterData }
                      />
                    </div>
                  </div>
                </TabPanel>
                <TabPanel>
                  <div className="grid-y large-grid-frame">
                    <div className="cell large-1">
                      <PositionFilter
                        positions={ ['DC', 'DW', 'CW', 'WW'] }
                        selectedPositions={ selectedPairPositions}
                        onCheck={ applyPairPositionFilter }
                      />
                    </div>
                    <div className="cell auto">
                      <PairTable
                        data={ pairData }
                      />
                    </div>
                  </div>
                </TabPanel>
                <TabPanel>
                  <div className="grid-y large-grid-frame">
                    <div className="cell auto">
                      <StackTable
                        data={ stackData }
                      />
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
});

const mapDispatchToProps = dispatch => ({
  addSkaterToOptimizer: (skater, sourceId) => dispatch(addSkaterToOptimizer(skater, sourceId)),
  applyTeamFilter: (team) => dispatch(applyTeamFilter(team)),
  applyIndividualPositionFilter: (position) => dispatch(applyIndividualPositionFilter(position)),
  applyPairPositionFilter: (position) => dispatch(applyPairPositionFilter(position))
});

export default connect(mapStateToProps, mapDispatchToProps)(Home);
