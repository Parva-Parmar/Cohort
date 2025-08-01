"use strict";
function sumOfAge(user1, user2) {
    return user1.age + user2.age;
}
const age = sumOfAge({ name: 'dave', age: 20 }, { name: 'bhalu', age: 22 });
console.log(age);
