import { createStore, combineReducers, applyMiddleware }  from 'redux';
import { Rewards } from './rewards';
import { Account } from './account';
import thunk from 'redux-thunk';
import logger from 'redux-logger';

export const ConfigureStore = ()=>{
    const store = createStore(
        combineReducers({
            rewards: Rewards,
            account : Account
        }),
        applyMiddleware(thunk, logger)
    );
    return store;
}