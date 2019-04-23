import React, { Component } from 'react';
import { connect } from 'react-redux';
import { Tab, Tabs, TabList, TabPanel } from 'react-tabs';
import "react-tabs/style/react-tabs.css";

import { fetchSkaterData } from '../../action-creators/fetch';

import SkaterTable from './SkaterTable';
import TeamFilter from './TeamFilter';

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

  componentWillReceiveProps(nextProps) {
    if (nextProps.fetchReducer.loadedSkaterData) {
      this.setTodayTeams(nextProps.fetchReducer.data['C']);
    }
  }

  setTodayTeams = (skaters) => {
    const todayTeams = [];
    skaters.forEach((skater) => {
      if (!todayTeams.includes(skater.Team)) {
        todayTeams.push(skater.Team);
      }
    });
    this.setState({
      todayTeams
    });
  }

  render() {
    // search global
    // position filters on skater table, pairs table
    // tabs for stacks
    return (
      <div>
      <TeamFilter todayTeams={ this.state.todayTeams } />
      {
        this.props.fetchReducer.data ?
        <Tabs>
          <TabList>
            <Tab> Skaters </Tab>
            <Tab> Foward Line Stacks </Tab>
            <Tab> Pair Stacks </Tab>
          </TabList>
          <TabPanel>
            <SkaterTable data={ [...this.props.fetchReducer.data['C'], ...this.props.fetchReducer.data['D'], ...this.props.fetchReducer.data['W']] } /> 
          </TabPanel>
        </Tabs>
        :
        "Waiting For Data"
      }
      </div>
    );
  }
}

const mapStateToProps = state => ({
  ...state
})

const mapDispatchToProps = dispatch => ({
  fetchSkaterData: () => dispatch(fetchSkaterData())
})

export default connect(mapStateToProps, mapDispatchToProps) (Home);
