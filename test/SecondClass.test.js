import { expect } from "chai";

import { SecondClass } from "../src/SecondClass.js";
import { FirstClass } from "../src/FirstClass.js";

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

    describe('return all args', function () {
        it('should return first class args plus the passed arguments', function () {
            const expected = [ 'one', 'two', true, {}, undefined ];

            const firstClass = new FirstClass('one', 'two');
            const secondClass = new SecondClass(firstClass);

            const result = secondClass.returnAllArgs(true, {}, undefined);

            expect(result).to.deep.equal(result);
        });
    });
});
