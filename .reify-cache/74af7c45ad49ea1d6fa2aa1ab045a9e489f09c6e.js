"use strict";var expect;module.link("chai",{expect(v){expect=v}},0);var FirstClass;module.link("../src/FirstClass.js",{FirstClass(v){FirstClass=v}},1);var SecondClass;module.link("../src/SecondClass.js",{SecondClass(v){SecondClass=v}},2);var ThirdClass;module.link("../src/ThirdClass.js",{ThirdClass(v){ThirdClass=v}},3);





describe('Third Class', function () {
    describe('return very super done', function () {
        it('should return very super done', function () {
            const firstClass = new FirstClass('one', 'two');
            const secondClass = new SecondClass(firstClass);
            const thirdClass = new ThirdClass(secondClass);

            const expected = 'VERY SUPER DONE';
            const result = thirdClass.returnVerySuperDone();

            expect(result).to.deep.equal(expected);
        });
    });
});
