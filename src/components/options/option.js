import React, { Component } from "react";

export default class Option extends Component {
    render() {
        const { label, value } = this.props.item;
        return (
            <div className="options-list__item options-item">{label}: {value}</div>
        );
    }
}
