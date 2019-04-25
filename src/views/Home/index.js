import React, { Component } from 'react';
import { connect } from 'react-redux';

import Home from './Home';

import { fetchSkaterData } from '../../action-creators/fetch';

class HomeWrapper extends Component {
  componentWillMount() {
    this.props.fetchSkaterData();
  }

  render() {
    return (
      <div>
        { this.props.skaterReducer.loadedSkaterData ?
          <Home />
          :
          "Waiting For Data"
        }
      </div>
    );
  }
}

const mapStateToProps = state => ({
  ...state
});

const mapDispatchToProps = dispatch => ({
  fetchSkaterData: () => dispatch(fetchSkaterData())
});

export default connect(mapStateToProps, mapDispatchToProps) (HomeWrapper);
