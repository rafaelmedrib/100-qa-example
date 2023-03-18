"use strict";var FirstClass;module.link("../src/FirstClass.js",{FirstClass(v){FirstClass=v}},0);var expect;module.link("chai",{expect(v){expect=v}},1);


describe('First Class', function () {
    describe('getArguments', function () {
        it('should return a object with arguments', function () {
            const testArgument1 = [ true ];
            const testArgument2 = {
                test: 0
            }

            const firstClass = new FirstClass(testArgument1, testArgument2);
            const result = firstClass.getArguments();
            expect(result["1"]).to.deep.equal(testArgument1);
            expect(result["2"]).to.deep.equal(testArgument2);
        });
    });

    describe('setArgument', function () {
        it('should modify an existing argument', function () {
            const testArgument1 = [ true ];
            const testArgument2 = {
                test: 0
            }
            const newArgumentValue = 'newValue';

            const firstClass = new FirstClass(testArgument1, testArgument2);
            firstClass.setArgument('argument1', newArgumentValue);
            expect(firstClass.argument1).to.deep.equal(newArgumentValue);
        });
    });

    describe('returnDone', function () {
        it('should return DONE', function () {
            const expected = 'DONE';

            const testArgument1 = [ true ];
            const testArgument2 = {
                test: 0
            }

            const firstClass = new FirstClass(testArgument1, testArgument2);
            const result = firstClass.returnDone();
            expect(result).to.deep.equal(expected);
        });
    });
});
