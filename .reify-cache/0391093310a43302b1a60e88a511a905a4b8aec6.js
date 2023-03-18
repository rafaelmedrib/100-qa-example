"use strict";module.export({ThirdClass:()=>ThirdClass});class ThirdClass {
    constructor(secondClass) {
        this.secondClass = secondClass;
    }

    static sum (...numbers){
        let sum = 0;
        for (const number of numbers) {
            if (typeof number === 'number') sum += number;
        }

        return sum;
    }

    returnVerySuperDone (){
        return `VERY ${this.secondClass.returnSuperDone()}`;
    }
}


