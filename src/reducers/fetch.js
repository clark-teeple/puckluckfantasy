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
      playerObject[property] = playerRow[index];
    });
    processedData[playerObject['Pos']].push(playerObject);
  }
  return processedData;
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
      const data = processSkaterData(action.payload)
      return {
        ...state,
        loadingSkaterData: false,
        loadedSkaterData: true,
        data
      }
    default:
      return state
  }
};
