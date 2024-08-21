class Person {
    name;
    #grade;
    constructor(name, grade) {
        this.name = name;
        this.#grade = grade;
    }

    get name() {
        return this.name
    }
}

let person = new Person("Ritik", "A")
console.log(person.name)



//polymorphirm -> overriding the parent methods in child classes
//inheritance -> child class using the properties of parent class
//Encapsulation -> private properties cannot be accessed by other classes

//Abstraction -> Abstraction is a principle that says that a class should only represent information that is relevant to the problem's context. In plain English, only expose to the outside the properties and methods that you're going to use. If it's not needed, don't expose it.
// This principle is closely related to encapsulation, as we can use public and private properties/methods to decide what gets exposed and what doesn't.


//var can be shadowed by let but let can't be shadowed by var

const nums = [1, 2, 3, 4];

const result = nums.reduce((acc, curr, i, nums) => {
    return acc + curr;
}, 0)

console.log(result)


//call , apply, bind arr.push.apply(arr1,arr2)

console.log(Math.ceil(Math.random() * 7))


const object = {
    name : "Ritik",
    // name : "Jha"
}

console.log(object.name)