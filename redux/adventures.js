import * as ActionTypes from './ActionTypes';

export const adventures = (state = { isLoading: true,
                                        errMess: null,
                                        adventures: []}, action) => {
    switch (action.type) {
        case ActionTypes.ADD_ADVENTURES:
            return {...state, isLoading: false, errMess: null, adventures: action.payload};

        case ActionTypes.ADVENTURES_LOADING:
            return {...state, isLoading: true, errMess: null, adventures: []}

        case ActionTypes.ADVENTURES_FAILED:
            return {...state, isLoading: false, errMess: action.payload};

        default:
            return state;
      }
};