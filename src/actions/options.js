import { createActions } from "redux-actions";
import { ADD_OPTION, UPDATE_OPTION, DELETE_OPTION, FILTER_OPTIONS, SORT_OPTIONS } from "constants/options";

const actions = createActions(ADD_OPTION, UPDATE_OPTION, DELETE_OPTION, FILTER_OPTIONS, SORT_OPTIONS);

const addOption = (item) =>
    dispatch => dispatch(actions.addOption(item));

const updateOption = (item, i) =>
    dispatch => dispatch(actions.updateOption({ item, i }));

const deleteOption = (i) =>
    dispatch => dispatch(actions.deleteOption(i));

const filterOptions = (params) =>
    dispatch => dispatch(actions.filterOptions(params));

const sortOptions = (dir) =>
    dispatch => dispatch(actions.sortOptions(dir));

export default { ...actions, addOption, updateOption, deleteOption, filterOptions, sortOptions };
