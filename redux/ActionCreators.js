import * as ActionTypes from './ActionTypes';
import { baseUrl } from '../shared/baseUrl';


export const fetchReviews = () => dispatch => {
    //baseUrl + 'sbrafting/destinations'
    return fetch(baseUrl + 'reviews')
        .then(response => {
                if (response.ok) {
                    return response;
                } else {
                    const error = new Error(`Error ${response.status}: ${response.statusText}`);
                    error.response = response;
                    throw error;
                }
            },
            error => {
                const errMess = new Error(error.message);
                throw errMess;
            })
        .then(response => response.json())
        .then(reviews => dispatch(addReviews(reviews)))
        .catch(error => dispatch(reviewsFailed(error.message)));
};

export const reviewsFailed = errMess => ({
    type: ActionTypes.REVIEWS_FAILED,
    payload: errMess
});

export const addReviews = reviews => ({
    type: ActionTypes.ADD_REVIEWS,
    payload: reviews
});

export const fetchDestinations = () => dispatch => {

    dispatch(destinationsLoading());

    return fetch(baseUrl + 'destinations')
        .then(response => {
                if (response.ok) {
                    return response;
                } else {
                    const error = new Error(`Error ${response.status}: ${response.statusText}`);
                    error.response = response;
                    throw error;
                }
            },
            error => {
                const errMess = new Error(error.message);
                throw errMess;
            })
        .then(response => response.json())
        .then(destinations => dispatch(addDestinations(destinations)))
        .catch(error => dispatch(destinationsFailed(error.message)));
};

export const destinationsLoading = () => ({
    type: ActionTypes.DESTINATIONS_LOADING
});

export const destinationsFailed = errMess => ({
    type: ActionTypes.DESTINATIONS_FAILED,
    payload: errMess
});

export const addDestinations = destinations => ({
    type: ActionTypes.ADD_DESTINATIONS,
    payload: destinations
});

export const fetchAdventures = () => dispatch => {
    
    dispatch(adventuresLoading());

    return fetch(baseUrl + 'adventures')
        .then(response => {
                if (response.ok) {
                    return response;
                } else {
                    const error = new Error(`Error ${response.status}: ${response.statusText}`);
                    error.response = response;
                    throw error;
                }
            },
            error => {
                const errMess = new Error(error.message);
                throw errMess;
            })
        .then(response => response.json())
        .then(adventures => dispatch(addAdventures(adventures)))
        .catch(error => dispatch(adventuresFailed(error.message)));
};

export const adventuresLoading = () => ({
    type: ActionTypes.ADVENTURES_LOADING
});

export const adventuresFailed = errMess => ({
    type: ActionTypes.ADVENTURES_FAILED,
    payload: errMess
});

export const addAdventures = adventures => ({
    type: ActionTypes.ADD_ADVENTURES,
    payload: adventures
});

export const fetchSponsors = () => dispatch => {
    
    dispatch(sponsorsLoading());

    return fetch(baseUrl + 'sponsors')
        .then(response => {
                if (response.ok) {
                    return response;
                } else {
                    const error = new Error(`Error ${response.status}: ${response.statusText}`);
                    error.response = response;
                    throw error;
                }
            },
            error => {
                const errMess = new Error(error.message);
                throw errMess;
            })
        .then(response => response.json())
        .then(sponsors => dispatch(addSponsors(sponsors)))
        .catch(error => dispatch(sponsorsFailed(error.message)));
};

export const sponsorsLoading = () => ({
    type: ActionTypes.SPONSORS_LOADING
});

export const sponsorsFailed = errMess => ({
    type: ActionTypes.SPONSORS_FAILED,
    payload: errMess
});

export const addSponsors = sponsors => ({
    type: ActionTypes.ADD_SPONSORS,
    payload: sponsors
});


export const addReview = review => ({
    type: ActionTypes.ADD_REVIEW,
    payload: review
});

export const postReview = (destinationId, rating, author, text) => dispatch => {
    
    const newReview = {
        destinationId: destinationId,
        rating: rating,
        author: author,
        text: text
    };
    newReview.date = new Date().toISOString();

    setTimeout(() => {
        dispatch(addReview(newReview));
    }, 2000);
}
