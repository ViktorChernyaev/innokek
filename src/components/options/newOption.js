import React, { Component } from "react";

export default class Option extends Component {
    state = {
        label: "",
        value: ""
    }

    handleSubmit = (e) => {
        e.preventDefault()
        const { label, value } = this.state;
        if (label && value) {
            this.props.addOption({ label, value });
            this.setState({ label: "", value: "" });
        }
    }

    setValue = ({ target }) => {
        this.setState({ [target.name]: target.value });
    }

    render() {
        const { label, value } = this.state;
        return (
            <form className="filter-panel" onSubmit={this.handleSubmit}>
                <input
                    type="text"
                    className="input"
                    placeholder="label"
                    name="label"
                    value={label}
                    onChange={this.setValue}
                />
                <input
                    type="text"
                    className="input"
                    placeholder="value"
                    name="value"
                    value={value}
                    onChange={this.setValue}
                />
                <input
                    type="submit"
                    className="btn"
                    value="Создать"
                />
            </form>
        );
    }
}
