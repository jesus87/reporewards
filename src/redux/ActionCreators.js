import * as ActionTypes from './ActionTypes';
import {  baseUrlAeroUser , baseUrlAeroRewards} from '../shared/baseUrl';



export const fetchRewards = () => (dispatch) => {

    dispatch(rewardsLoading(true));

    return fetch(baseUrlAeroRewards )
        .then(response => {
            if (response.ok) {
                return response;
            } else {
                var error = new Error('Error ' + response.status + ': ' + response.statusText);
                error.response = response;

                throw error;
            }
        })
        .then(response => response.json(),
            error => {
                var errmess = new Error(error.message);
                throw errmess;
            })
        .then(rewards => dispatch(addRewards(rewards.response)))
        .catch(error => {
            dispatch(rewardsFailed(error.message))
        });
}

export const addRewards = (rewards) => (

    {
    
    type: ActionTypes.ADD_REWARD,
    payload: rewards
});

export const rewardsLoading = () => ({
    type: ActionTypes.REWARD_LOADING
});

export const rewardsFailed = (errmess) => ({
    type: ActionTypes.REWARD_FAILED,
    payload: errmess
});



export const accountLoading = () => ({
    type: ActionTypes.ACCOUNT_LOADING
});

export const accountFailed = (errmess) => ({
    type: ActionTypes.ACCOUNT_FAILED,
    payload: errmess
});

export const addAccount = (account) => (
    
    {
    
    type: ActionTypes.ADD_ACCOUNT,
    payload: account
});

export const fetchAccount = () => (dispatch) => {


    const newRequest = {
        email: "jgarciab@aeromexico.com"
    };
    dispatch(accountLoading());

    return fetch(baseUrlAeroUser, {
        method: "POST",
        body: JSON.stringify(newRequest),
        headers: {
          "Content-Type": "application/json"
        }
        
    })
        .then(response => {
            if (response.ok) {
               
                return response;
            } else {
                var error = new Error('Error ' + response.status + ': ' + response.statusText);
                error.response = response;
                throw error;
            }
        },
            error => {
                var errmess = new Error(error.message);
                throw errmess;
            })
        .then(
            
                response => response.json()
                )
        .then(
            
            account => dispatch(addAccount(account.response)))
        .catch(error => dispatch(accountFailed(error.message)));
}

