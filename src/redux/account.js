import * as ActionTypes from './ActionTypes';

export const Account = (state = { isLoading: true, errMess: null, account: [] }, action) => {
    switch (action.type) {
        case ActionTypes.ADD_ACCOUNT:
            return { ...state, errMess: null, isLoading: false, account: action.payload };

        case ActionTypes.ACCOUNT_LOADING:
            return { ...state, isLoading: true, errMess: null }

        case ActionTypes.ACCOUNT_FAILED:
            return { ...state, isLoading:false, errMess: action.payload };

        default:
            return state;
    }
}