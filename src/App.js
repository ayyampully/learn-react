import React, { Component } from "react";
import "./App.css";

import Movies from "./components/movies";

class App extends Component {
    render() {
        return (
            <main className="container">
                <div>
                    <h2>Movies</h2>
                    <Movies />
                </div>
            </main>
        );
    }
}

export default App;
