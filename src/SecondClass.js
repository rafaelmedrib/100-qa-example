class SecondClass {
    constructor(firstClass) {
        this.firstClass = firstClass;
    }

    returnSuperDone (){
        return `SUPER ${this.firstClass.returnDone()}`;
    }

    returnAllArgs (...args){
        let firstClassArgs = [];

        for (const arg in this.firstClass.getArguments()) {
            firstClassArgs.push(arg);
        }

        return [ firstClassArgs, ...args ];
    }
}

export { SecondClass };
