import * as ActionType from './ActionType';
import {baseUrl} from '../shared/baseUrl';

export const fetchComments = () => (dispatch) =>{
    return fetch(baseUrl+ 'comments')
    .then(response => {
        if(response.ok){
            return response;
        }else{
            var error = new Error('Error '+response.status+' : '+response.statusText);
            error.response = response;
            throw error;
        }
    },
error=> {
    var errMsg = new Error(error.message)
    throw errMsg;
})
.then(response => response.json())
.then(comments => dispatch(addComments(comments)))
.catch(error => dispatch(commentsFailed(error.message)))
}

export const commentsFailed = (errMsg) => ({
    type: ActionType.COMMENTS_FAILED,
    payload: errMsg
});

export const addComments = (comments) => ({
    type: ActionType.ADD_COMMENTS,
    payload: comments
})




export const fetchDishes = () => (dispatch) =>{
    dispatch(dishesLoading());
    return fetch(baseUrl+ 'dishes')
    .then(response => {
        if(response.ok){
            return response;
        }else{
            var error = new Error('Error '+response.status+' : '+response.statusText);
            error.response = response;
            throw error;
        }
    },
error=> {
    var errMsg = new Error(error.message)
    throw errMsg;
})
.then(response => response.json())
.then(dishes => dispatch(addDishes(dishes)))
.catch(error => dispatch(dishesFailed(error.message)))
}

export const dishesLoading = () =>({
    type: ActionType.DISHES_LOADING
})

export const dishesFailed = (errMsg) => ({
    type: ActionType.DISHES_FAILED,
    payload: errMsg
});

export const addDishes = (dishes) => ({
    type: ActionType.ADD_DISHES,
    payload: dishes
});





export const fetchLeaders = () => (dispatch) =>{
    dispatch(leadersLoading());
    return fetch(baseUrl+ 'leaders')
    .then(response => {
        if(response.ok){
            return response;
        }else{
            var error = new Error('Error '+response.status+' : '+response.statusText);
            error.response = response;
            throw error;
        }
    },
error=> {
    var errMsg = new Error(error.message)
    throw errMsg;
})
.then(response => response.json())
.then(leaders => dispatch(addLeaders(leaders)))
.catch(error => dispatch(leardersFailed(error.message)))
}

export const leadersLoading = () =>({
    type: ActionType.LEADERS_LOADING
})

export const leardersFailed = (errMsg) => ({
    type: ActionType.LEADERS_FAILED,
    payload: errMsg
});

export const addLeaders = (leaders) => ({
    type: ActionType.ADD_LEADERS,
    payload: leaders
});



export const fetchPromos = () => (dispatch) =>{
    dispatch(promosLoading());
    return fetch(baseUrl+ 'promos')
    .then(response => {
        if(response.ok){
            return response;
        }else{
            var error = new Error('Error '+response.status+' : '+response.statusText);
            error.response = response;
            throw error;
        }
    },
error=> {
    var errMsg = new Error(error.message)
    throw errMsg;
})
.then(response => response.json())
.then(promos => dispatch(addPromos(promos)))
.catch(error => dispatch(promosFailed(error.message)))
}

export const promosLoading = () =>({
    type: ActionType.PROMS_LOADING
})

export const promosFailed = (errMsg) => ({
    type: ActionType.PROMOS_FAILED,
    payload: errMsg
});

export const addPromos = (promos) => ({
    type: ActionType.ADD_PROMOS,
    payload: promos
});