import * as ActionTypes from './ActionTypes';


export const Rewards =(state = {
        isLoading: true, 
        errMess: null,
        rewards: []
    }, action) => {
    switch(action.type){
        case ActionTypes.REWARD_LOADING:
            return {...state, isLoading: true, errMess: null, rewards: []};
        case ActionTypes.REWARD_FAILED:
                return {...state, isLoading: false, errMess: action.payload, rewards: []};
        case ActionTypes.ADD_REWARD:
                return {...state, isLoading: false, errMess: null, rewards: action.payload};
        default: 
            return state;
    }
}
