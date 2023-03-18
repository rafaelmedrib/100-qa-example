"use strict";var expect;module.link("chai",{expect(v){expect=v}},0);var SecondClass;module.link("../src/SecondClass.js",{SecondClass(v){SecondClass=v}},1);var FirstClass;module.link("../src/FirstClass.js",{FirstClass(v){FirstClass=v}},2);




describe('Second Class', function () {
    describe('return super done', function () {
        it('should return super done', function () {
            const firstClass = new FirstClass('one', 'two');
            const secondClass = new SecondClass(firstClass);

            const expected = 'SUPER DONE';
            const result = secondClass.returnSuperDone();

            expect(result).to.deep.equal(expected);
        });
    });
});
