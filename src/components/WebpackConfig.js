
import FileWriter from './FileWriter';

/**
 * Class WebpackConfig
 * This will represent the configuration options that the generated webpack file will have.
 */
class WebpackConfig {
    constructor() {
        console.log("creating webpackconfig object");
        this.mode = 'development';
        this.entry = './build';
        this.devTool = 'inline-source-map';
        this.output = {
            fileName: 'bundle.js',
            path: './build'
        };
        this.module = {};
    }

    /**
     * Generates the data necessary to write the parameters to file.
     * @param {string} workingDir The directory where the webpack file will be generated.
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
    }
}

export default WebpackConfig;