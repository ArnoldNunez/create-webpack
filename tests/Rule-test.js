/**
 * Tests for Rule class.
 */

import { expect } from 'chai';

import Rule from '../src/components/Rule';
import Loaders from '../src/components/Loaders';

describe('Rule', () => {
    it('constructor(): All member variables should be null.', () => {
        const rule = new Rule();
        const expectedResult = null;

        expect(rule.test).to.equal(expectedResult);
        expect(rule.exclude).to.equal(expectedResult);
        expect(rule.use).to.equal(expectedResult);
    });

    /// getters
    it('get test(): Should return value in member variable test', () => {
        const rule = new Rule();
        rule._test = '/\\.js$/';
        const expectedResult = '/\\.js$/';

        expect(rule.test).to.equal(expectedResult);
    });
    it('get exclude(): Should return value in member variable exclude', () => {
        const rule = new Rule();
        const original = [
            '/node_modules/',
            '/tests/',
            '/*DoNotTouch/'
        ];
        const testValue = true;
        const expectedResult = true;
        rule._exclude = original;

        for (let i = 0; i < rule.exclude.length; i++) {
            if (rule.exclude[i] !== original[i]) {
                testValue = false;
            }
        }
        expect(testValue).to.equal(expectedResult);
    });
    it('get use(): Should return an object of type Loaders', () => {
        const rule = new Rule();
        rule._use = new Loaders();
        const expectedResult = true;
        const actualResult = rule.use instanceof Loaders;

        expect(actualResult).to.equal(expectedResult);
    });

    /// setters
    it('set test(): Should set test member variable to same string as passed in value', () => {
        const rule = new Rule();
        rule.test = '/\\.js$/';
        const expectedResult = '/\\.js$/';

        expect(rule._test).to.equal(expectedResult);
    });
    it('set exclude(): Should set exclude member variable to same value', () => {
        const rule = new Rule();
        const original = [
            '/node_modules/',
            '/tests/',
            '/*DoNotTouch/'
        ];
        const testValue = true;
        const expectedResult = true;
        rule.exclude = original;

        for (let i = 0; i < rule._exclude.length; i++) {
            if (rule._exclude[i] !== original[i]) {
                testValue = false;
            }
        }
        expect(testValue).to.equal(expectedResult);
    });
    it('set use(): Should set use member variable to object of type Loaders', () => {
        const rule = new Rule();
        rule.use = new Loaders();
        const expectedResult = true;
        const actualResult = rule._use instanceof Loaders;

        expect(actualResult).to.equal(expectedResult);
    });

    it('toString(): should return object as text with correct paramters. 1', () => {
        const rule = new Rule();
        rule.test = '/\.js$/';
        rule.exclude = [ '/node_modules/', '/tests/' ];
        rule.use = new Loaders();
        rule.use.addLoader('babel-loader');

        const expectedResult = `{
    test: /\.js$/,
    exclude: [
        /node_modules/,
        /tests/
    ],
    use: [
        'babel-loader'
    ]
}`;

        expect(rule.toString()).to.equal(expectedResult);
    });

    it('toString(): should return object as text without exclude option when there are no excludes', () => {
        const rule = new Rule();
        rule.test = '/\.js$/';
        rule.exclude = [];
        rule.use = new Loaders();
        rule.use.addLoader('babel-loader');

        const expectedResult = `{
    test: /\.js$/,
    use: [
        'babel-loader'
    ]
}`;

        expect(rule.toString()).to.equal(expectedResult);
    });

});