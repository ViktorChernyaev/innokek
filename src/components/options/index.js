import React, { Component, Fragment } from "react";
import NewOption from "./newOption";
import FilterOptions from "./filterOptions";
import Option from "./option";

export default class Options extends Component {

    handleFilter = ({ target }) => {
        const { filterOptions } = this.props;
        filterOptions({ [target.name]: target.value });
    }

    renderNewOption = () => {
        const { addOption } = this.props;
        return (<NewOption addOption={addOption} />);
    }

    renderFilters = () => {
        const { filters, sort, sortOptions } = this.props;
        return (
            <FilterOptions
                handleFilter={this.handleFilter}
                handleSort={sortOptions}
                filters={filters}
                sort={sort}
            />
        );
    }

    renderItems = () => {
        const { items, updateOption, deleteOption } = this.props;
        return items.map(({ item, i }) => (
            <Option
                key={i}
                updateOption={updateOption}
                deleteOption={deleteOption}
                item={item}
            />
        ));
    }

    render() {
        return (
            <Fragment>
                <div className="panel">
                    {this.renderNewOption()}
                    <div className="panel__separator" />
                    {this.renderFilters()}
                </div>
                <div className="panel">
                    {this.renderItems()}
                </div>
            </Fragment>
        );
    }
}
