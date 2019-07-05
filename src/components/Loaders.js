
/**
 * Class Loaders.
 * Represents loaders inside of rule > use option.
 */
class Loaders {
    constructor() {
        this._loader = [];
        this._options = null;
    }

    /**
     * Adds a loader as a string to the loaders array.
     * If the loader already exists nothing will be added.
     * @param {string} loader 
     */
    addLoader(loader) {
        let exists = false;

        for (let i = 0; i < this._loader.length; i++) {
            if (this._loader[i].toLowerCase() === loader.toLowerCase()) {
                exists = true;
            }
        }

        if (exists) { return; }
        this._loader.push(loader);
    }

    /**
     * Takes all the data representing a loader and returns
     * the final output string.
     * @returns {string} The final output string
     */
    toString() {
        
    }
}

export default Loaders;