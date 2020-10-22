import * as types from './constants';

export const getCityNames = (payload) => ({
    type: types.weather_app_success,
    payload
});

export const getData = () => ({
    type: types.REQUEST_DATA,
});

export const getDataSuccess = (data) => ({
    type: types.REQUEST_DATA_SUCCESS,
    data
});

export const getSearchSuccess = (data) => ({
    type: types.REQUEST_SEARCH_SUCCESS,
    data
});

export const getForecastSuccess = (data) => ({
    type: types.REQUEST_FORECAST_SUCCESS,
    data
});