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
            console.log(firstClass.getArguments());
            expect(result["1"]).to.deep.equal(testArgument1);
            expect(result["2"]).to.deep.equal(testArgument2);
        });
    });
});
