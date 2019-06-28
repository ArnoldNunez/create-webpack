import React from "react";
import ReactDOM from "react-dom";

import FileWriter from "./components/FileWriter";

class App extends React.Component {
    constructor() {
        super();

        this.state = {};

        /// Bindings
        this.generateWebpack = this.generateWebpack.bind(this);
    }

    generateWebpack() {
        console.log("generating webpack");
    }

    render() {

        return (
            <div className="app">
                <h1>Hello from React.</h1>
                <button onClick={this.generateWebpack}>Generate</button>
            </div>
        );
    }
}

ReactDOM.render(<App />, document.getElementById("root"));