import React from "react";
import ReactDOM from "react-dom";

class App extends React.Component {
    constructor() {
        super();

        this.state = {};
    }

    render() {

        return (
            <div className="app">
                <h1>Hello from React.</h1>
            </div>
        );
    }
}

ReactDOM.render(<App />, document.getElementById("root"));