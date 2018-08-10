import React, { Component } from "react";

class Counter extends Component {
    state = {
        value: 0
    };
    handleIncrement = () => {
        let { value } = this.state;
        this.setState({ value: value + 1 });
    };
    render() {
        return (
            <div>
                <span style={{ fontSize: 16 }} className={this.getClassName()}>
                    {this.state.value}
                </span>
                <button
                    onClick={this.handleIncrement}
                    className="btn m-2 btn-secondary btn-sm"
                >
                    {" "}
                    +{" "}
                </button>
            </div>
        );
    }
    getClassName() {
        let classes = "badge m-2 p-2 badge-";
        classes += this.state.value ? "primary" : "warning";
        return classes;
    }
}
export default Counter;
