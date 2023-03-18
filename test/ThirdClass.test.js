import { expect } from "chai";

import { FirstClass } from "../src/FirstClass.js";
import { SecondClass } from "../src/SecondClass.js";
import { ThirdClass } from "../src/ThirdClass.js";

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

    describe('sum', function () {
        it('should return the arithmetic sum of the passed numbers', function () {
            const expected = 15;
            const result = ThirdClass.sum(3, 4, 5, 1, 2);

            expect(result).to.deep.equal(expected);
        });

        it('should ignore non number arguments', function () {
            const expected = 15;
            const result = ThirdClass.sum(3, '3', true, 4, {}, 5, 1, 2);

            expect(result).to.deep.equal(expected);
        });
    });
});
