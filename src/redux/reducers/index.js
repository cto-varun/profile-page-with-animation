import { combineReducers } from 'redux';

//reducers
import ProfileReducer from './ProfileReducer';

export default combineReducers({
    Profile: ProfileReducer
})