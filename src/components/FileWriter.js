import * as fs from 'fs';

/**
 * FileWriter class.
 * 
 * This will be a helper class to create the webpack file.
 */
class FileWriter {
    constructor() { }

    /**
     * Creates a file with some content.
     * @param {string} fileName The name given to the created file.
     * @param {string} content The content the file will have.
     * @param {string} dir The directory to create the file at.
     */
    static createFile(fileName, content, dir) {
        try {
            fs.writeFile(fileName, content, (err) => {
                if (err) { throw err; }
            });
        } catch(err) {
            let message = `Failed to create file: ${fileName} at location: ${dir}`;
            //AlertManager.QueueAlert(message);
            //Logger.LogError(message, FileWriter.js->FileWriter->CreateFile);
        }
    }
}

export default FileWriter;