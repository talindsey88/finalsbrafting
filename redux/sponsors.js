import * as ActionTypes from './ActionTypes';

export const sponsors = (state = { isLoading: true,
                                    errMess: null,
                                    sponsors: []}, action) => {
    switch (action.type) {
        case ActionTypes.ADD_SPONSORS:
            return {...state, isLoading: false, errMess: null, sponsors: action.payload};

        case ActionTypes.SPONSORS_LOADING:
            return {...state, isLoading: true, errMess: null, sponsors: []}

        case ActionTypes.SPONSORS_FAILED:
            return {...state, isLoading: false, errMess: action.payload};

        default:
            return state;
    }
};