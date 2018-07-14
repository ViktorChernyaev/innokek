import React, { Component } from "react";

export default class Option extends Component {
    render() {
        const { label, value } = this.props.item;
        return (
            <div>{label}: {value}</div>
        );
    }
}
