import React, { Component } from "react";
import Counter from "./counter";

class Counters extends Component {
    state = {
        counters: [
            { id: 1, value: 0 },
            { id: 2, value: 1 },
            { id: 3, value: 0 }
        ]
    };
    render() {
        return this.state.counters.map(counter => (
            <Counter key={counter.id} counter={counter} />
        ));
    }
}

export default Counters;
