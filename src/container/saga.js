import * as actions from './actions';
import * as constants from './constants';
import { getAllWeather } from '../services/weatherData';


export function loadData(action) {
    const data = getAllWeather();
    actions.getDataSuccess(data);
}