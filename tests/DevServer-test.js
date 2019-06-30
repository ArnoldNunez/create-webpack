/**
 * Tests for DevServer class.
 */

import { expect } from 'chai';

import DevServer from '../src/components/DevServer';
import ExecutionContext from '../src/components/ExecutionContext';

describe('DevServer', () => {
    it('constructor(): DevServer should be disabled by default', () => {
        const expectedResult = false;
        const devServer = new DevServer();

        expect(devServer.enabled).to.equal(expectedResult);
    });

    /// Getters
    it('get enabled(): should return same value as when set', () => {
        const devServer = new DevServer();

        let expectedResult = true;
        devServer.enabled = true;
        expect(devServer.enabled).to.equal(expectedResult);

        expectedResult = false;
        devServer.enabled = false;
        expect(devServer.enabled).to.equal(expectedResult);
    });
    it('get contentBase(): should return same value as when set', () => {
        const expectedResult = './a/path/';
        const devServer = new DevServer();
        devServer.contentBase = './a/path/';

        expect(devServer.contentBase).to.equal(expectedResult);
    });
    it('get port(): should return same value as when set', () => {
        const expectedResult = '2745';
        const devServer = new DevServer();
        devServer.port = '2745';

        expect(devServer.port).to.equal(expectedResult);
    });
    it('get publicPath(): should return same value as when set', () => {
        const expectedResult = 'http://Some/Path/';
        const devServer = new DevServer();
        devServer.publicPath = 'http://Some/Path/';

        expect(devServer.publicPath).to.equal(expectedResult);
    });

    /// Setters
    it('set enabled(value): should set enabled to input boolean', () => {
        const devServer = new DevServer();
        let expectedResult = true;
        devServer.enabled = true;
        expect(devServer._enabled).to.equal(expectedResult);
    });
    it('set enabled(value): Passing in non-boolean should set enabled to false', () => {
        const devServer = new DevServer();
        let expectedResult = 'false';
        devServer.enabled = 'true';
        expect(devServer._enabled).to.equal(expectedResult);
    });

    it('set contentBase(value): Should set contentBase as a relative path when passing in full path', () => {
        const devServer = new DevServer();
        ExecutionContext.projectRoot = 'C:/users/some/path/to/root';
        const expectedResult = './a/path/build';
        devServer.contentBase = 'C:/users/some/path/to/root/a/path/build';
        expect(devServer._contentBase).to.equal("./a/path/build");
    });
    it('set contentBase(value): Should contentBase as relative path when passing in relative path', () => {
        const devServer = new DevServer();
        ExecutionContext.projectRoot = 'C:/users/some/path/to/root';
        const expectedResult = './a/path/build';
        devServer.contentBase = './a/path/build';
        expect(devServer._contentBase).to.equal("./a/path/build");
    });
    it('set contentBase(value): Should set url slashes as (/) character regardless of input slash scheme.', () => {
        const devServer = new DevServer();
        ExecutionContext.projectRoot = 'C:/users/some/path/to/root';
        const expectedResult = './a/path/build';    
        devServer.contentBase = 'C:\\users\\some\\path\\to\\root\\a\\path\\build';
        expect(devServer._contentBase).to.equal("./a/path/build");
    });

    it('set port(value): should set port to value of input if integer', () => {
        const devServer = new DevServer();
        const expectedResult = 2745;
        devServer.port = 2745;
        expect(devServer._port).to.equal(expectedResult);
    });
    it('set port(value): should set port to value as integer if input is string', () => {
        const devServer = new DevServer();
        const expectedResult = 42342;
        devServer.port = '42342';
        expect(devServer._port).to.equal(expectedResult);
    });

    it('set publicPath(value): should set publicPath to input value', () => {
        const devServer = new DevServer();
        const expectedResult = 'http://Some/Path/';
        devServer.publicPath = 'http://Some/Path/';
        expect(devServer._publicPath).to.equal(expectedResult);
    });


    // toString()
    it('toString(): should return an empty string if DevServer disabled.', () => {
        const expectedResult = '';
        const devServer = new DevServer();
        devServer.enabled = false;

        expect(devServer.toString()).to.equal(expectedResult);
    });
    it('toString(): should return object as text with correct paramters. 1', () => {
        const expectedResult = `devServer: {
    contentBase: './Build',
    port: 2351,
    publicPath: 'http://some/url/'
}`;
        const devServer = new DevServer();
        ExecutionContext.projectRoot = 'C:/Some/Path/To/Directory';
        devServer.enabled = false;
        devServer.contentBase = 'C:/Some/Path/To/Directory/Build';
        devServer.port = 2351;
        devServer.publicPath = 'http://some/url/';

        expect(devServer.toString()).to.equal(expectedResult);
    });
    it('toString(): should return object as text with correct paramters. 2', () => {
        const expectedResult = `devServer: {
    contentBase: './build/base',
    port: 53234,
    publicPath: 'http://base/'
}`;
        const devServer = new DevServer();
        ExecutionContext.projectRoot = 'C:/Some/Path/To/Directory';
        devServer.enabled = false;
        devServer.contentBase = './build/base';
        devServer.port = 53234;
        devServer.publicPath = 'http://base/';

        expect(devServer.toString()).to.equal(expectedResult);
    });
});