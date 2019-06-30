let _projectRoot = '';
let _executionDir = '';

/**
 * Class containing application execution specific information.
 */
class ExecutionContext {
    static get projectRoot() { return _projectRoot; }
    static get executionDir() { return _executionDir; }

    static set projectRoot(value) { _projectRoot = value; }
    static set executionDir(value) { _executionDir = value; }
}