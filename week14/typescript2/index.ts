interface People {
    name: string;
    age: number;
    // greet: () => string;
}

let person: People = {
    name: "Parva",
    age: 21,
    // greet: () => {
    //     return "hello ";
    // },
};



class Manager implements People {
    name: string;
    age: number;
    number: string;
    constructor(name: string,age: number) {
        this.name = name;
        this.age = age;
        this.number = "1231231231";
    }
}

let user = new Manager("John", 30);
console.log(user.name);
console.log(user.age);

