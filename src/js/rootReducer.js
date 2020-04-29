import { combineReducers } from 'redux';
import searchReducer from './containers/MSC/searchReducer';

const rootReducer = combineReducers({
     search: searchReducer
});

export default rootReducer;