var person = {
    name: "Parva",
    age: 21
};
var Manager = /** @class */ (function () {
    function Manager(name, age) {
        this.name = name;
        this.age = age;
        this.number = "1231231231";
    }
    return Manager;
}());
var user = new Manager("John", 30);
console.log(user.name);
console.log(user.age);
