import React from "react";
import ReactDOM from "react-dom";

import WebpackConfig from './components/WebpackConfig';

class App extends React.Component {
    constructor() {
        super();

        this.state = {
            webpackConf: new WebpackConfig(),
            workingDir: ''
        };

        this.generate = this.generate.bind(this);
        this.handleInputChange = this.handleInputChange.bind(this);
    }

    generate() {
        const webpack = this.state.webpackConf;
        const workingDir = this.state.workingDir;

        webpack.generate(workingDir);
    }

    handleInputChange(event) {
        const target = event.target;
        const value = target.type === 'checkbox' ? target.checked : target.value;
        const name = target.name;

        this.setState({
            [name]: value
        });
    }

    render() {

        return (
            <div className="app">
                <h1>Hello from React.</h1>
                <label for="workingDir">Location: </label>
                <input 
                    type="text"
                    name="workingDir"
                    value={this.state.workingDir}
                    onChange={this.handleInputChange} />
                <button onClick={this.generate}>Generate</button>
            </div>
        );
    }
}

ReactDOM.render(<App />, document.getElementById("root"));