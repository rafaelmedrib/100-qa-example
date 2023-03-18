"use strict";module.export({ThirdClass:()=>ThirdClass});class ThirdClass {
    constructor(secondClass) {
        this.secondClass = secondClass;
    }

    returnVerySuperDone (){
        return `VERY ${this.secondClass.returnSuperDone()}`;
    }
}


