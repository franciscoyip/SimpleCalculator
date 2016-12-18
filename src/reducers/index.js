import { combineReducers } from 'redux';

import EntryReducer from './EntryReducer';

const rootReducer = combineReducers({
  entry: EntryReducer
});

export default rootReducer;
