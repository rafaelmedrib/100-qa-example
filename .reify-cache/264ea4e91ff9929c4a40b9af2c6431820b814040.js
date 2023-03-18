"use strict";module.export({SecondClass:()=>SecondClass});class SecondClass {
    constructor(firstClass) {
        this.firstClass = firstClass;
    }

    returnSuperDone (){
        return `SUPER ${this.firstClass.returnDone()}`;
    }
}


