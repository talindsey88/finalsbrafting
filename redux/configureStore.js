import {createStore, combineReducers, applyMiddleware} from 'redux';
import thunk from 'redux-thunk';
import logger from 'redux-logger';
import { destinations } from './destinations';
import { reviews } from './reviews';
import { promotions } from './promotions';
import { sponsors } from './sponsors';
import { favorites } from './favorites';

export const ConfigureStore = () => {
    const store = createStore(
        combineReducers({
            destinations,
            reviews,
            sponsors,
            promotions,
            favorites
        }),
        applyMiddleware(thunk, logger)
    );

    return store;
}