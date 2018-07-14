import { handleActions } from "redux-actions";
import { ADD_OPTION, UPDATE_OPTION, DELETE_OPTION, FILTER_OPTIONS, SORT_OPTIONS } from "constants/options";

const initialState = {
    items: [],
    filters: { label: "", value: "" },
    sort: null
}

export default handleActions({
    [ADD_OPTION]: (state, { payload }) => ({
        ...state,
        items: state.items.concat(payload)
    }),
    [UPDATE_OPTION]: (state, { payload }) => ({
        ...state,
        items: state.items.map((item, i) => i === payload.i ? payload.item : item),
    }),
    [DELETE_OPTION]: (state, { payload }) => ({
        ...state,
        items: state.items.filter((item, i) => i !== payload)
    }),
    [FILTER_OPTIONS]: (state, { payload }) => ({
        ...state,
        filters: { ...state.filters, payload }
    }),
    [SORT_OPTIONS]: (state, { payload }) => ({
        ...state,
        sort: payload
    })
}, initialState);
