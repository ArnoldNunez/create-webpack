/**
 * Tests for Loader class.
 */

import { expect } from 'chai';

import Loader from '../src/model/Loader';

describe('Loader', () => {
    /// Constructors
    it('constructor(): Options and loader should be initialized to null.', () => {
        const loader = new Loader();

        expect(loader._loaderName).to.equal(null);
        expect(loader._options).to.eql([]);
    });

    /// Getters
    it('get loaderName(): Should return value in member variable loaderName', () => {
        const loader = new Loader();
        Loader._loaderName = 'dkl!@1kl';
        const expectedValue = 'dkl!@1kl';
        expect(Loader.loaderName).to.equal(expectedValue);
    });
    it('get options(): Should return value in member variable options', () => {
        const loader = new Loader();
        Loader._options = [ 'modules', true ];
        const expectedValue = [ 'modules', true ];
        expect(Loader.options).to.eql(expectedValue);
    });

    /// Setters
    it('set loaderName(value): Should set member variable loaderName to value in input', () => {
        const loader = new Loader();
        loader.loaderName = 'dkl!@1kl';
        const expectedValue = 'dkl!@1kl';
        expect(loader._loaderName).to.equal(expectedValue);
    });
    it('set options(value): Should set member variable options to value in input', () => {
        const loader = new Loader();
        loader.options = [ 'filtering', 'no-repeat' ];
        const expectedValue = [ 'filtering', 'no-repeat' ];
        expect(loader._options).to.eql(expectedValue);
    });

    /// toString
    it('toString(): should return empty string if loader name is not set', () => {
        const loader = new Loader();
        const expectedValue = '';
        const result = loader.toString();
        expect(result).to.equal(expectedValue);
    });
    it('toString(): should return empty string if loader name is not set even if options is set', () => {
        const loader = new Loader();
        loader._options = [ 'name', true, 'someOption', 'djkvll' ];
        const expectedValue = '';
        const result = loader.toString();
        expect(result).to.equal(expectedValue);
    });
    it('toString(): should return object as string with loader as only parameter if options is not set', () => {
        const loader = new Loader();
        loader._loaderName = 'loader1';

        const expectedValue = `{ 
    loader: 'loader1'
},`;
        const result = loader.toString();
        expect(result).to.equal(expectedValue);
    });
    it('toString(): should return object as string with loader and options set', () => {
        const loader = new Loader();
        loader._loaderName = 'loader1';
        loader._options = [ 'modules', true ];

        const expectedValue = `{ 
    loader: 'loader1',
    options: {
        modules: true
    }
},`;
        const result = loader.toString();
        expect(result).to.equal(expectedValue);
    });

    /// addOption
    it('addOption(name, value): should not add to options if name input parameter is null or empty', () => {
        const loader = new Loader();
        loader._loaderName = 'loader1';
        loader.addOption('', true);
        const expectedValue = [];
        expect(loader._options).to.eql(expectedValue);

        loader.addOption(null, 'sdf');
        expect(loader._options).to.eql(expectedValue);
    });
    it('addOption(name, value): should not add to options if value input parameter is null or empty', () => {
        const loader = new Loader();
        loader._loaderName = 'loader1';
        loader.addOption('option1', null);
        const expectedValue = [];
        expect(loader._options).to.eql(expectedValue);

        loader.addOption('option2', '');
        expect(loader._options).to.eql(expectedValue);
    });
    it('addOption(name, value): should add to options the name and value inputs', () => {
        const Loader = new Loader();
        loader._loaderName = 'loader1';
        loader.addOption('option1', true);
        let expectedValue = [ 'option1', true ];
        expect(loader._options).to.eql(expectedValue);

        loader.addOption('option2', 'hello23!@');
        expectedValue = [ 'option1', true, 'option2', 'hello23!@' ];
        expect(loader._options).to.eql(expectedValue);
    });
    it('addOption(name, value): should not add if option name already exists', () => {
        const Loader = new Loader();
        loader._loaderName = 'loader1';
        loader.addOption('option1', true);
        loader.addOption('option1', 'hello23!@');
        expectedValue = [ 'option1', true ];
        expect(loader._options).to.eql(expectedValue);
    });

    /// deleteOption
    it('deleteOption(name): should do nothing if input parameter is empty or null', () => {
        const loader = new Loader();
        const expectedValue = [ 'option1', 'value1', 'some other option', false ];
        loader._options = [ 'option1', 'value1', 'some other option', false ];
        loader.deleteOption('');
        expect(loader._options).to.eql(expectedValue);

        loader.deleteOption(null);
        expect(loader._options).to.eql(expectedValue);
    });
    it('deleteOption(name): should do nothing if option to remove does not exist', () => {
        const loader = new Loader();
        const expectedValue = [ 'option1', 'value1', 'some other option', false ];
        loader._options = [ 'option1', 'value1', 'some other option', false ];
        loader.deleteOption('lvkjlsd');
        expect(loader._options).to.eql(expectedValue);
    });
    it('deleteOption(name): should remove from array the option with the given input name', () => {
        const loader = new Loader();
        const expectedValue = [ 'some other option', false ];
        loader._options = [ 'option1', 'value1', 'some other option', false ];
        loader.deleteOption('option1');
        expect(loader._options).to.eql(expectedValue);
    });
    it('deleteOption(name): should remove from array the option with the given input name regardless of case', () => {
        const loader = new Loader();
        const expectedValue = [ 'some other option', false ];
        loader._options = [ 'option1', 'value1', 'some other option', false ];
        loader.deleteOption('OpTion1');
        expect(loader._options).to.eql(expectedValue);
    });
});