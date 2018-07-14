import React from "react";
import { connect } from "react-redux";
import Options from "components/options";
import optionsActions from "actions/options";

const OptionsContainer = ({ ...rest }) => {
    return (<Options { ...rest } />);
}

const mapStateToProps = (state) => ({
    items: state.options.items,
    filters: state.options.filters,
    sort: state.options.sort
});

const mapDispatchToProps = (dispatch) => ({
    addOption: (item) => dispatch(optionsActions.addOption(item)),
    updateOption: (item, i) => dispatch(optionsActions.updateOption(item, i)),
    deleteOption: (i) => dispatch(optionsActions.deleteOption(i)),
    filterOptions: (params) => dispatch(optionsActions.filterOptions(params)),
    sortOptions: (dir) => dispatch(optionsActions.sortOptions(dir))
});

export default connect(mapStateToProps, mapDispatchToProps)(OptionsContainer);
