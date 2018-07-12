import React, { Component } from "react";
import generateArrays from "services/createRandomArrays";

const Field = (props) => (<input type="text" className="filter-panel__head-input" {...props} />);
const formatInnerObj = (obj) => ` [${Object.entries(obj).map(objToString).join(", ")}] `;
const objToString = ([name, value]) => `{ ${name}: ${value} }`;

export default class FilterPanel extends Component {
    state = {
        propName: "",
        propValue: "",
        items: []
    }

    componentDidMount() {
        this.recalcList();
    }

    setValue = ({ target }) => {
        this.setState({ [target.name]: target.value });
    }

    recalcList = () => {
        this.setState({ items: generateArrays() });
    }

    renderFilteredItems = () => {
        return null;
    }

    renderItems = () => {
        return this.state.items.map(({ item, i }) => {
            const formatted = item.map(formatInnerObj).join(", ");
            return (<li key={i}>{`[${formatted}];`}</li>);
        });
    }

    render() {
        const { propName, propValue } = this.state;
        return (
            <div className="filter-panel">
                <div className="filter-panel__head">
                    <Field
                        name="propName"
                        value={propName}
                        placeholder="Имя"
                        onChange={this.setValue}
                    />
                    <Field
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
