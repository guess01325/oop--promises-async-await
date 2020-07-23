// Object Oriented Programming
// prototypal Inheritance


const dog = {
name: "Michael",
goodBoy: true,
gender: "girl",
food: "pedigree"



};


const dogTwo = {
    name: 'rocco',
    color: 'brown',
    walk: '4pm'
   

   
};
dogTwo.__proto__ = dog;

console.log(dog);
console.log(dogTwo);

console.log(dogTwo.goodBoy);
console.log(dogTwo.name);
console.log(dog.food);

dog.jump = '6'

// Make two objects and one object needs to inherit from the object