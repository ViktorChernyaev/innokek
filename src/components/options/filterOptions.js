import React from "react";

const sortName = (sort, handleSort) => {
    switch(sort) {
        case null:
            return { action: () => handleSort(true), text: "Сортировать А-Я" };
        case true:
            return { action: () => handleSort(false), text: "Сортировать Я-А" };
        case false:
            return { action: () => handleSort(null), text: "Отключить сортировку" };
        default:
            return {};
    }
}

const FilterOptions = ({ handleFilter, filters, sort, handleSort }) => {
    const { action, text } = sortName(sort, handleSort)
    return (
        <div className="filter-panel">
            <input
                type="text"
                className="filter-panel__input"
                placeholder="Фильтр по label"
                name="labelFilter"
                value={filters.labelFilter}
                onChange={handleFilter}
            />
            <input
                type="text"
                className="filter-panel__input"
                placeholder="Фильтр по value"
                name="valueFilter"
                value={filters.valueFilter}
                onChange={handleFilter}
            />
            <div className="filter-panel__text" onClick={action}>{text}</div>
        </div>
    );
};

export default FilterOptions;
