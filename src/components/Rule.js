
/**
 * Class Rule.
 * This represents a webpack module rule.
 */
class Rule {
    constructor() {
        this._test = null;
        this._exclude = null;
        this._use = null;
    }

    get test() { return this._test; }
    get exclude() { return this._exclude; }
    get use() { return this._use; }

    set test(value) { this._test = value; }
    set exclude(value) { this._exclude = value; }
    set use(value) { this._use = value; }

    /**
     * Takes all the data representing a Rule and returns
     * the final output string.
     * @returns {string} The final output string
     */
    toString() {
        
    }
}