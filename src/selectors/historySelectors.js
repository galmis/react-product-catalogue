// @flow

function getHistoryState(state: any): Array<string> {
  return state.historyReducer ? state.historyReducer : state;
}

export {
  getHistoryState,
}
