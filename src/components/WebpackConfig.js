
import FileWriter from './FileWriter';
import WebpackModes from '../constants/WebpackModes';

/**
 * Class WebpackConfig
 * This will represent the configuration options that the generated webpack file will have.
 */
class WebpackConfig {
    constructor() {
        console.log("creating webpackconfig object");
        this.mode = WebpackModes.DEVELOPMENT;
        this.entry = './build';
        this.devTool = 'inline-source-map';
        this.output = {
            fileName: 'bundle.js',
            path: './build'
        };
        this.module = {};
    }

    /**
     * Generates the Webpack config contents and writes it to a file. This will create the file
     * if it does not exist yet.
     * @param {string} workingDir The directory where the webpack file will be generated.
     * @returns {string} The webpack config as a string.
     */
    generate(workingDir) {
        let content = `module.exports = {
            mode: '${this.mode}',
            entry: '${this.entry}',
            output: {
                path: '${this.output.path}',
                fileName: '${this.output.fileName}'
            }
        }`;

        FileWriter.createFile("webpack.config.js", content, workingDir);
        return content;
    }
}

export default WebpackConfig;