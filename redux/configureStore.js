import {createStore, combineReducers, applyMiddleware} from 'redux';
import thunk from 'redux-thunk';
import logger from 'redux-logger';
import { destinations } from './destinations';
import { reviews } from './reviews';
import { adventures } from './adventures';
import { sponsors } from './sponsors';

export const ConfigureStore = () => {
    const store = createStore(
        combineReducers({
            destinations,
            reviews,
            sponsors,
            adventures,
        }),
        applyMiddleware(thunk, logger)
    );

    return store;
}