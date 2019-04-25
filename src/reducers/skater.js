const genID = () => {
  return Math.random().toString(36).replace(/[^a-z]+/g, '').substr(2, 10);
}

const processSkaterData = (data) => {
  const objectProperties = ['Name', 'Pos', 'FPts', 'FPtsSD', 'Salary', 'SalarySD', 'Value', 'ValueSD', 'Rank', 'RankSD', 'Team', 'OppTeam', 'ProjTOIEV', 'ProjTOIPP', 'ProjTOISH'];
  const arrayData = data.replace(/(\r\n|\r|\n)/g, ',').split(',');
  const processedData = {
    C: [],
    W: [],
    D: [],
    F3: [],
    DC: [],
    DW: [],
    CW: [],
    WW: []
  };
  for (let i = 0; i <= arrayData.length - objectProperties.length; i += objectProperties.length) {
    const playerObject = {};
    const playerRow = arrayData.slice(i, i + objectProperties.length);
    objectProperties.forEach((property, index) => {
      playerObject.id = genID();
      playerObject[property] = playerRow[index];
    });
    processedData[playerObject['Pos']].push(playerObject);
  }
  return processedData;
}

const processTodayTeams = (skaters) => {
  const todayTeams = [];
  skaters.forEach((skater) => {
    if (!todayTeams.includes(skater.Team)) {
      todayTeams.push(skater.Team);
    }
  });
  return todayTeams;
}

export default (state = {}, action) => {
  switch (action.type) {
    case 'FETCH_SKATER_DATA':
      return {
        ...state,
        loadingSkaterData: true,
        loadedSkaterData: false
      }
    case 'FETCH_SKATER_FAILURE':
      return {
        ...state,
        loadingSkaterData: false,
        loadedSkaterData: false,
        error: action.payload
      }
    case 'FETCH_SKATER_SUCCESS':
      const data = processSkaterData(action.payload);
      const todayTeams = processTodayTeams(data['C']);
      return {
        ...state,
        loadingSkaterData: false,
        loadedSkaterData: true,
        data,
        individualData: [...data['C'], ...data['D'], ...data['W']],
        pairData: [...data['DC'], ...data['DW'], ...data['CW'], ...data['WW']],
        stackData: data['F3'],
        todayTeams,
        selectedTeams: todayTeams,
        selectedIndividualPositions: ['C', 'W', 'D'],
        selectedPairPositions: ['CW', 'WW', 'DC', 'DW']
      }
    case 'APPLY_TEAM_FILTER':
      if (state.selectedTeams.includes(action.payload)) {
        return {
          ...state,
          selectedTeams: state.selectedTeams.filter(x => x !== action.payload)
        }
      } else {
        return {
          ...state,
          selectedTeams: state.selectedTeams.concat(action.payload)
        }
      }
    case 'APPLY_INDIVIDUAL_POSITION_FILTER':
      if (state.selectedIndividualPositions.includes(action.payload)) {
        return {
          ...state,
          selectedIndividualPositions: state.selectedIndividualPositions.filter(x => x !== action.payload)
        }
      } else {
          return {
          ...state,
          selectedIndividualPositions: state.selectedIndividualPositions.concat(action.payload)
        }
      }
    case 'APPLY_PAIR_POSITION_FILTER':
      if (state.selectedPairPositions.includes(action.payload)) {
        return {
          ...state,
          selectedPairPositions: state.selectedPairPositions.filter(x => x !== action.payload)
        }
      } else {
        return {
          ...state,
          selectedPairPositions: state.selectedPairPositions.concat(action.payload)
        }
      }
    default:
      return state
  }
};
