/**
 * Tests for Loaders class.
 */

import { expect } from 'chai';

import Loaders from '../src/model/Loaders';
import Loader from '../src/model/Loader';

describe('Loaders', () => {
    /// Constructors
    it('constructor(): Options and loader should be initialized.', () => {
        const loaders = new Loaders();

        expect(loaders._loaders.length).to.equal(0);
        exxpect(loaders._options).to.equal(null);
    });

    /// Getters
    it('get loaders(): Should return value in member variable loaders', () => {
        const loaders = new Loaders();
        const expectedValue = [ 'some_loader', '-sdf2351a#$!/' ]; 
        loaders._loaders = [ 'some_loader', '-sdf2351a#$!/' ];
        expect(loaders.loaders).to.eql(expectedValue);
    });

    /// Setters
    it('set loaders(): Should set loaders member variable to same string as passed in value', () => {
        const loaders = new Loaders();
        const expectedValue = [ 'some-loader-1', '643d-dlkl'];
        loaders.loaders = [ 'some-loader-1', '643d-dlkl'];
        expect(loader._loaders).to.eql(expectedValue);
    });

    /// toString
    it('toString(): should return empty string when there are no loaders', () => {
        const loaders = new Loaders();
        const expectedValue = '';
        result = loader.toString();
        expect(result).to.equal('');
    });

    it('toString(): should return array as string with no commas if there is only 1 loader', () => {
        const loaders = new Loaders();
        const loader1 = new Loader();
        loader1._loaderName = 'loader1';

        loaders._loaders.push(loader1, loader2, loader3);
        
        // result should follow this format
        // expectedValue = `use: [
        //     {
        //         loader: 'loader3'
        //     }
        // ]`;
        result = loader.toString();

        // should contain 1 [ char
        expect(result.match(/\[/gm).length).to.equal(1);

        // should contain 1 ] char
        expect(result.match(/\]/gm).length).to.equal(1);

        // Should contain 1 { chars
        expect(result.match(/{/gm).length).to.equal(3);

        // Should contain 1 } chars
        expect(result.match(/}/gm).length).to.equal(3);

        // Should contain 0 , chars
        expect(result.match(/,/gm).length).to.equal(2);
    });

    it('toString(): should return array as string with comma separators between Loaders', () => {
        const loaders = new Loaders();
        const loader1 = new Loader();
        const loader2 = new Loader();
        const loader3 = new Loader();

        loader1._loaderName = 'loader1';
        loader2._loaderName = 'loader2';
        loader3._loaderName = 'loader3';

        loaders._loaders.push(loader1, loader2, loader3);
        
        // result should follow this format
        // expectedValue = `use: [
        //     { 
        //         loader: 'loader1'
        //     },
        //     {
        //         loader: 'loader2'
        //     },
        //     {
        //         loader: 'loader3'
        //     }
        // ]`;
        result = loader.toString();

        // should contain 1 [ char
        expect(result.match(/\[/gm).length).to.equal(1);

        // should contain 1 ] char
        expect(result.match(/\]/gm).length).to.equal(1);

        // Should contain 3 { chars
        expect(result.match(/{/gm).length).to.equal(3);

        // Should contain 3 } chars
        expect(result.match(/}/gm).length).to.equal(3);

        // Should contain 2 , chars
        expect(result.match(/,/gm).length).to.equal(2);
    });

});