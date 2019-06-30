/**
 * Class DevServer.
 * CLass that represents webpack DevServer settings.
 */
class DevServer {
    constructor() {
        this._enabled = false;
        this._contentBase = '';
        this._port = -1;
        this._publicPath = '';
    }

    get enabled() { return this._enabled; }
    get contentBase() { return this._contentBase; }
    get port() { return this._port; }
    get publicPath() { return this._publicPath; }

    set enabled(value) {
        this._enabled = typeof value === "boolean" ? value : "false";
    }
    set contentBase(value) {
    }
    set port(value) {
    }
    set publicPath(value) {
    }

    /**
     * Takes all the data representing the DevServer configuration and returns
     * the final output string.
     * @returns {string} The final output string
     */
    toString() {

        return '';
    }
}

export default DevServer;