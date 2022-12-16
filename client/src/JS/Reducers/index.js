import {combineReducers} from 'redux';

import annonceReducer from './AnnonceReducer';

import userReducer from './UserReducer';

import AuthReducer from './AuthReducer';

const rootReducer = combineReducers({annonceReducer, userReducer, AuthReducer})

export default rootReducer