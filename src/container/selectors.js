import { createSelector } from 'reselect';
import { INITIAL_STATE } from './reducer';
import _ from "lodash";
import { has } from 'lodash';

export const selectWeather = state => state.data;
console.log("state", INITIAL_STATE)

export const getCityInfo = () =>
    createSelector(
        selectWeather,

        state => has(state, 'data') ? state.data : 'lol',

    );

export const getDaysInfo = () =>
    createSelector(
        selectWeather,
        state => _.has(state, 'city.forecast') ? state.city.forecast : ''
    );