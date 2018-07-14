import React, { Component } from "react";
import { objectToString } from "helpers/format";
import generateArrays from "services/createRandomArrays";

export default class FilterPanel extends Component {
    state = {
        propName: "",
        propValue: "",
        items: [],
        flattenItems: []
    }

    componentDidMount() {
        this.recalcList();
    }

    setValue = ({ target }) => {
        this.setState({ [target.name]: target.value });
    }

    recalcList = () => {
        const items = generateArrays();
        const flattenItems = items.reduce((acc, { item }) => acc.concat(item), []);
        this.setState({ items, flattenItems });
    }

    renderFilteredItems = () => {
        return null;
    }

    renderItems = () => {
        return this.state.items.map(({ item, i }) => {
            const formatted = item.map(objectToString).join(", ");
            return (<li key={i}>{`[${formatted}];`}</li>);
        });
    }

    render() {
        const { propName, propValue } = this.state;
        return (
            <div className="filter-panel">
                <div className="filter-panel__head">
                    <input
                        type="text"
                        className="filter-panel__head-input"
                        name="propName"
                        value={propName}
                        placeholder="Имя"
                        onChange={this.setValue}
                    />
                    <input
                        type="text"
                        className="filter-panel__head-input"
                        placeholder="Значение"
                        name="propValue"
                        onChange={this.setValue}
                        value={propValue}
                    />
                    <div className="filter-panel__head-recalcer" onClick={this.recalcList}>Новый список</div>
                </div>
                <div className="filter-panel__body">
                    <ul>{this.renderFilteredItems()}</ul>
                    <hr />
                    <ul>{this.renderItems()}</ul>
                </div>
            </div>
        );
    }
}
