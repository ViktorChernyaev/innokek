import { handleActions } from "redux-actions";
import { ADD_OPTION, UPDATE_OPTION, DELETE_OPTION, FILTER_OPTIONS, SORT_OPTIONS } from "constants/options";
import { labelValueArray } from "services/createRandomArrays";

const initialState = {
    items: labelValueArray(),
    filters: { labelFilter: "", valueFilter: "" },
    sort: null
}

export default handleActions({
    [ADD_OPTION]: (state, { payload }) => ({
        ...state,
        items: state.items.concat({ item: payload, i: state.items[state.items.length - 1].i + 1 })
    }),
    [UPDATE_OPTION]: (state, { payload }) => ({
        ...state,
        items: state.items.map((item) => item.i === payload.i ? payload : item),
    }),
    [DELETE_OPTION]: (state, { payload }) => ({
        ...state,
        items: state.items.filter(({ item, i }) => i !== payload)
    }),
    [FILTER_OPTIONS]: (state, { payload }) => ({
        ...state,
        filters: { ...state.filters, ...payload }
    }),
    [SORT_OPTIONS]: (state, { payload }) => ({
        ...state,
        sort: payload
    })
}, initialState);
