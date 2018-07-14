import React, { Component, Fragment } from "react";
import NewOption from "./newOption";
import FilterOptions from "./filterOptions";
import Option from "./option";

export default class Options extends Component {

    handleFilter = ({ target }) => {
        const { filterOptions } = this.props;
        filterOptions({ [target.name]: target.value });
    }

    filterInstruction = ({ item }) => {
        const { labelFilter, valueFilter } = this.props.filters;
        if (!labelFilter && !valueFilter) {
            return true;
        }
        return (labelFilter && item.label.includes(labelFilter)) || (valueFilter && item.value.includes(valueFilter));
    }

    sortInstruction = (first, second) => {
        if (first.item.label === second.item.label) {
            return 0;
        }
        const { sort } = this.props;
        if (sort === true) {
            return first.item.label.localeCompare(second.item.label);
        } else {
            return second.item.label.localeCompare(first.item.label);
        }
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
        const { items, updateOption, deleteOption, sort } = this.props;
        const filteredItems = items.filter(this.filterInstruction);
        return (sort === null ? filteredItems : filteredItems.sort(this.sortInstruction)).map(({ item, i }) => (
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
                <div className="panel options-list">
                    {this.renderItems()}
                </div>
            </Fragment>
        );
    }
}
