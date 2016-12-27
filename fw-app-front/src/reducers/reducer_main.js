import {combineReducers} from 'redux';
import UserReducer from './reducer_user';

const allReducers = combineReducers({
    user: UserReducer
});

export default allReducers
