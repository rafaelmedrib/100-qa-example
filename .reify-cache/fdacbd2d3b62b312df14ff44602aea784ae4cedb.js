"use strict";module.export({FirstClass:()=>FirstClass});class FirstClass {
    constructor(argument1, argument2) {
        this.argument1 = argument1
        this.argument2 = argument2
    }

    getArguments (){
        return {
            1: this.argument1,
            2: this.argument2
        }
    }

    setArgument (argumentName, newArgumentValue){
        for (const property of Object.getOwnPropertyNames(this)) {
            if(property !== argumentName){
                return
            } else {
                this[property] = newArgumentValue;
            }
        }
    }

    returnDone (){
        return 'DONE';
    }
}


