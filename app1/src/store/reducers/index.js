import Reducer1 from './reducer1';
import UserReducer from './userReducer';
import AuthReducer from './auth_reducer'
import { combineReducers } from 'redux';

const rootReducer = combineReducers({
    reducer1: Reducer1,
    user_reducer: UserReducer,
    auth_reducer: AuthReducer
});

export default rootReducer