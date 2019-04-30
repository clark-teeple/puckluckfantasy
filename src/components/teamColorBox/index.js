import React, { Component } from 'react';
import './teamcolorbox.scss';

const teamColorMapping = {
  'New York Islanders': { primary: '#F47D30', secondary: 'white', background: '#00539B', text: 'white'},
  'Carolina Hurricanes': { primary: '#76232F', secondary: '#000000', background: '#CC0000', text: 'white'},
  'San Jose Sharks' : { primary: 'black', secondary: '#EA7200', background: '#006D75', text: 'white'},
  'Las Vegas Golden Knights': { primary: '#333F42', secondary: 'black', background: '#B4975A'},
  'Colorado Avalanche': { primary: '#6F263D', secondary: '#236192', background: '#A2AAAD', text: 'white'},
  'Anaheim Ducks': { primary: '#F47A38', secondary: '#B09862', background: '#C4CED4'},
  'Arizona Coyotes': { primary: '#8C2633', secondary: '#E2D6B5', background: 'black', text: 'white'},
  'Boston Bruins': { primary: '#FFB81C', secondary: 'black', background: 'white'},
  'Buffalo Sabres': { primary: '#002654', secondary: '#FCB514', background: '#ADAFAA'},
  'Calgary Flames': { primary: '#C8102E', secondary: '#F1BE48', background: 'black', text: 'white'},
  'Chicago Blackhawks': { primary: '#00833E', secondary: '#D18A00', background: '#CF0A2C ', text: 'white'},
  'Columbus Blue Jackets': { primary: '#002654', secondary: '#CE1126', background: '#A4A9AD', text: 'white'},
  'Dallas Stars': { primary: '#006847', secondary: '#8F8F8C', background: 'black', text: 'white'},
  'Detroit Red Wings': { primary: '#CE1126', secondary: 'white', background: '#CE1126', text: 'white'},
  'Edmonton Oilers': { primary: '#041E42', secondary: 'white', background: '#FF4C00', text: 'white'},
  'Florida Panthers': { primary: '#B9975B', secondary: '#C8102E', background: '#041E42', text: 'white'},
  'Los Angeles Kings': { primary: '#A2AAAD', secondary: 'white', background: '#111111'},
  'Minnesota Wild': { primary: '#A6192E', secondary: '#DDCBA4', background: '#154734', text: 'white'},
  'Montreal Canadiens': { primary: '#192168', secondary: 'white', background: '#AF1E2D', text: 'white'},
  'Nashville Predators': { primary: '#041E42', secondary: 'white', background: '#FFB81C'},
  'New Jersey Devils': { primary: 'black', secondary: 'white', background: '#CE1126', text: 'white'},
  'New York Rangers': { primary: '#CE1126', secondary: 'white', background: '#0038A8', text: 'white'},
  'Ottawa Senators': { primary: '#E31837', secondary: '#C69214', background: 'black', text: 'white'},
  'Philadelphia Flyers': { primary: 'black', secondary: 'white', background: '#F74902', text: 'white'},
  'Pittsburgh Penguins': { primary: 'black', secondary: '#CFC493', background: '#FCB514'},
  'St. Louis Blues': { primary: '#041E42', secondary: '#FCB514', background: '#002F87', text: 'white'},
  'Tampa Bay Lightning': { primary: '#002868', secondary: 'white', background: '#002868', text: 'white'},
  'Toronto Maple Leafs': { primary: '#003E7E', secondary: 'white', background: '#003E7E', text: 'white'},
  'Vancouver Canucks': { primary: '#001F5B', secondary: '#00843D', background: '#99999A', text: 'white'},
  'Washington Capitals': { primary: '#041E42', secondary: 'white', background: '#C8102E', text: 'white'},
  'Winnipeg Jets': { primary: '#041E42', secondary: '#7B303E', background: '#55565A', text: 'white'},
  'none': { primary: '#cc4b37', secondary: '#1779ba', background: 'white' }
}

export default class TeamColorBox extends Component {
  render() {
    const primaryHeight = Math.round(this.props.height / 1.2);
    const secondaryHeight = Math.round(this.props.height);
    const primary = `${primaryHeight}px solid ${teamColorMapping[this.props.team].primary}`;
    const secondary = `${secondaryHeight}px solid ${teamColorMapping[this.props.team].secondary}`;
    const background = `${teamColorMapping[this.props.team].background}`;
    const text = `${teamColorMapping[this.props.team].text}`;
    const borderLeftInner = `${primaryHeight}px solid transparent`;
    const borderTopInner = `${primaryHeight}px solid transparent`;
    const borderLeftOuter = `${secondaryHeight}px solid transparent`;
    const borderTopOuter = `${secondaryHeight}px solid transparent`;

    const borderBottomInner = `${primaryHeight}px solid transparent`;
    const borderBottomOuter = `${secondaryHeight}px solid transparent`;

    return (
      <div className='team-color-box'
        style= { {
            borderTop: `3px solid ${primary} !important`,
            borderBottom: `3px solid ${secondary} !important`,
          backgroundColor: background,
          color: text
        } }
      >
        <div
          className="inner-triangle-right"
          style={
            {
              borderBottom: primary,
              borderLeft: borderLeftInner,
              borderTop: borderTopInner
            }
          }
        />
        <div className="outer-triangle-right"
          style={
            {
              borderBottom: secondary,
              borderLeft: borderLeftOuter,
              borderTop: borderTopOuter
            }
          }
        />
        <div>
          { this.props.children }
        </div>
        <div
          className="inner-triangle-left"
          style={
            {
              borderLeft: primary,
              borderBottom: borderBottomInner
            }
          }
        />
        <div
          className="outer-triangle-left"
          style={
            {
              borderLeft: secondary,
              borderBottom: borderBottomOuter
            }
          }
        />
      </div>
    );
  }
}
