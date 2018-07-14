import React, { Component, Fragment } from "react";
import { objectToString } from "helpers/format";
import { arrayOfArrays } from "services/createRandomArrays";

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
        const items = arrayOfArrays();
        const flattenItems = items
            .reduce((acc, { item }) => acc.concat(item), [])
            .map((item, i) => ({ item, i }));
        this.setState({ items, flattenItems, propName: "", propValue: "" });
    }

    flattenFilter = ({ item }) => {
        const { propName, propValue } = this.state;
        const namePresents = propName && Object.keys(item).find(val => val.includes(propName));
        if (propValue && namePresents) {
            return item[propName] && item[propName].includes(propValue);
        } else if (!propName && propValue) {
            return propValue && Object.values(item).find(val => val.includes(propValue));
        } else if (propName && !propValue) {
            return namePresents;
        }
        return false;
    }

    renderFilteredItems = () => {
        return this.state.flattenItems.filter(this.flattenFilter).map(({ item, i }) => {
            return (<li className="objects-list__item" key={i}>{objectToString(item)}</li>);
        });
    }

    renderItems = () => {
        return this.state.items.map(({ item, i }) => {
            const formatted = item.map(item => `\t${objectToString(item)}`).join(",\n");
            return (<li className="objects-list__item" key={i}>{`[\n${formatted}\n];`}</li>);
        });
    }

    render() {
        const { propName, propValue } = this.state;
        return (
            <Fragment>
                <div className="filter-panel panel">
                    <input
                        type="text"
                        className="filter-panel__input"
                        placeholder="Имя"
                        name="propName"
                        value={propName}
                        onChange={this.setValue}
                    />
                    <input
                        type="text"
                        className="filter-panel__input"
                        placeholder="Значение"
                        name="propValue"
                        value={propValue}
                        onChange={this.setValue}
                    />
                    <div className="filter-panel__text" onClick={this.recalcList}>Новый список</div>
                </div>
                <div className="panel">
                    <div className="objects-list">
                        <h3 className="objects-list__title">Список совпадений</h3>
                        <ol className="objects-list__body">{this.renderFilteredItems()}</ol>
                    </div>
                    <div className="panel__separator" />
                    <div className="objects-list">
                        <h3 className="objects-list__title">Список элементов</h3>
                        <ol className="objects-list__body">{this.renderItems()}</ol>
                    </div>
                </div>
            </Fragment>
        );
    }
}
