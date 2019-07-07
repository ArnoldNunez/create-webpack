
/**
 * Class Loader.
 * Represents a single loader inside of use
 */
class Loader {
    /**
     * Default constructor
     */
    constructor() {
        // The name of the loader
        this._loaderName = null;

        // The options to use for the loader (if any).
        this._options = null;
    }

    get loaderName() { return this._loaders; }
    set loaderName(value) { this._loaders = value; }

    get options() { return this._options; }
    set options(value) { this._options = value; }

    /**
     * Add an option to the loader
     * @param {string} name The name of the option
     * @param {any} value The value of the option
     */
    addOption(name, value) {

    }

    /**
     * Remove an option from the loader
     * @param {string} name The name of the option to remove
     */
    deleteOption(name) {

    }

    /**
     * Takes all the data representing a loader and returns
     * the final output string.
     * @returns {string} The final output string
     */
    toString() {
        
    }
}

export default Loader;