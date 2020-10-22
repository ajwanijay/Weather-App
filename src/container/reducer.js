import produce from "immer";
import { act } from "react-dom/test-utils";
import * as types from "./constants";

export const INITIAL_STATE = {
    data: {},
    city: "",
    forecast: {}
};

const weatherpagereducer = (state = INITIAL_STATE, action) =>
    produce(state, draft => {
        switch (action.type) {
            case types.REQUEST_DATA_SUCCESS:
                draft.data = action.data
            case types.REQUEST_SEARCH_SUCCESS:
                draft.city = action.data
            case types.REQUEST_FORECAST_SUCCESS:
                draft.forecast = action.data
        }
    });
export default weatherpagereducer;