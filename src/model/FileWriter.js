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
        let message = '';
        if (!dir) {
            message = 'No path specified';
            console.log(message);
            //AlertManager.QueueAlert(message);
            return;
        }

        dir = dir.charAt(dir.length - 1) === '/' || dir.charAt(dir.length - 1) === '\\' ? dir : dir + '\\';

        try {
            fs.writeFile(dir + fileName, content, (err) => {
                if (err) { throw err; }
            });
        } catch(err) {
            message = `Failed to create file: ${fileName} at location: ${dir}`;
            console.log(message);
            //AlertManager.QueueAlert(message);
            //Logger.LogError(message, FileWriter.js->FileWriter->CreateFile);
        }
    }
}

export default FileWriter;