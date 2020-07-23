// Object Oriented Programming
// prototypal Inheritance


// const dog = {
// name: "Michael",
// goodBoy: true,
// gender: "girl",
// food: "pedigree"



// // };


// const dogTwo = {
//     name: 'rocco',
//     color: 'brown',
//     walk: '4pm'
   

   
// };
// dogTwo.__proto__ = dog;

// console.log(dog);
// console.log(dogTwo);

// console.log(dogTwo.goodBoy);
// console.log(dogTwo.name);
// console.log(dog.food);

// dog.jump = '6'


// //

// function User(name){
// this.name = name;
//     //return this


// }

// let adam = new User('Adam');

// console.log(adam.name);


// let pete = new User('peter')

// console.log(pete.name);


// function NBAPlayer(name,team, threePointShooter){
//     // this = {}
//     this.name = name; 
//     this.team = team;
//     this. threePointShooter = threePointShooter; 

//     // return this

// }




// this.intro = function(){
//     console.log('Hi, my name is ' + this.name);
//     // return is here
// }


// console.log(steph);



// let steph = new NBAPlayer('steph Curry', 'warriors', true);
// steph.intro();




// function Games(name,type,goodGame){
//     this.name = name; 
//     this.type = type;
//     this.goodGame = true


// }
// let game = new Games('zeld','adeventure',true);


// class Car {
//   constructor(year, make, model,color){
//       this.year = year;
//       this.make =  make;
//       this.model = model; 
//       this.color = color; 
   



//   }
//   drive(){
//       console.log('Vroom'); 

//   }
//   intro(){
//       console.log('this car is a' + make + model);
//   }

// }



//   let tesla = new Car('Tesla','Model s', 'red');
//   console.log(tesla);
//   tesla.intro();
//   tesla.drive();


fetch('https://api.github.com/users/guess01325')
.then(response => {
    return response.json
    let githubUrl = data.url;
  
    let githubUsername = data.login;
    let githubName = data.name;
    
    class Githubprofile{
    
        constructor(username,name,url){
            this.username = username;
            this.name = name;
            this.url = url;
        }
        intro(){
            console.log(`My name is ${this.name} and my username is @${this.username}`);
        }
    }


  })
  .then(data =>{

    let otis = new Githubprofile(githubUsername,githubName,githubUrl);
    console.log(otis);
    otis.intro();


  })

  






