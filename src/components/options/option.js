import React, { Component } from "react";

export default class Option extends Component {
    state = {
        label: "",
        value: ""
    }

    removeForm = () => {
        return this.setState({ label: "", value: "" });
    }

    setValue = ({ target }) => {
        this.setState({ [target.name]: target.value });
    }

    handleEdit = () => {
        const { item, currentOption, i, changeCurrent } = this.props;
        const { label, value } = item;
        if (currentOption === i) {
            changeCurrent(null);
            return this.removeForm();
        }
        changeCurrent(i);
        this.setState({ label, value });
    }

    handleUpdate = (e) => {
        e.preventDefault();
        const { i, updateOption } = this.props;
        const { label, value } = this.state;
        if (label && value) {
            updateOption({ label, value }, i);
            this.removeForm();
        }
    }

    handleDelete = () => {
        const { i, deleteOption } = this.props;
        deleteOption(i);
    }

    renderBody = () => {
        const { currentOption, i, item } = this.props;
        if (currentOption === i) {
            const { label, value } = this.state;
            return (
                <form className="options-item__form" onSubmit={this.handleUpdate}>
                    <input
                        type="text"
                        className="options-item__input"
                        value={label}
                        name="label"
                        onChange={this.setValue}
                    />
                    <input
                        type="text"
                        className="options-item__input"
                        value={value}
                        name="value"
                        onChange={this.setValue}
                    />
                    <input
                        type="submit"
                        className="options-item__input"
                        value="Принять"
                    />
                </form>
            );
        }
        const { label, value } = item;
        return `{ ${label}: ${value} },`;
    }

    render() {
        const { i, currentOption } = this.props;
        const editText = (i === currentOption) ? "Отменить" : "Изменить";
        return (
            <div className="options-list__item options-item">
                {this.renderBody()}
                <div className="options-item__btn" onClick={this.handleEdit}>{editText}</div>
                <div className="options-item__btn" onClick={this.handleDelete}>Удалить</div>
            </div>
        );
    }
}
