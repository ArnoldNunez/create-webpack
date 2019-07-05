
/**
 * Class Loaders.
 * Represents loaders inside of rule > use option.
 */
class Loaders {
    constructor() {
        // The list of loaders used for a specific rule.
        this._loaders = [];
    }

    get loaders() { return this._loaders; }
    set loaders(value) { this._loaders = value; }

    /**
     * Adds a loader to the list of loaders for a given rule.
     * @param {Loader} loader The Loader object to add to this rule > use param
     */
    addLoader(loader) {
    }

    /**
     * Takes all the data representing the list of loaders and returns
     * the final output string.
     * @returns {string} The final output string
     */
    toString() {
        
    }
}

export default Loaders;