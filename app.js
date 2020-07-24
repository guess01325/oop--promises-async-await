

  


// var isMomHappy = false;

// // // Promise
// // var willIGetNewPhone = new Promise(
// //     function (resolve, reject) {
// //         if (isMomHappy) {
// //             var phone = {
// //                 brand: 'Samsung',
// //                 color: 'black'
// //             };
// //             resolve(phone); // fulfilled
// //         } else {
// //             // var reason = new Error('mom is not happy');
// //             reject("mom is not happy"); // reject
// //         }

// //     }
// // );
// // console.log(willIGetNewPhone);

// let willIGetNewPhone = new Promise((resolve,reeject => {
//     if (isMomHappy){
//         const phone ={
//             brand: 'iphone',
//             color: 'red'
//         }
//     }else{
//             reeject('NoPhone');
//     })
// })




//     willIGetNewPhone.then(result => {
//     console.log(result);
// })

fetch('https://api.github.com/users/guess01325')
.then(response => {
    return response.json
   
    
    let githubUsername = data.username;
    let githubName = data.name;
    let githubUrl = data.url;
    
    class Githubprofile{
    
        constructor(username,name,url){
            this.username = username;
            this.name = name;
            this.githubUrl = url;
        }
        intro(){
            console.log(`My name is ${this.name} and my username is @${this.username}`);
        }
    }


  })


  let otis = new Githubprofile(githubUsername,githubName,githubUrl);
//   console.log(otis);
//   otis.intro();



async function printUsers() {

    let otisEndpoint = 'https://api.github.com/users/guess01325';
    let otis = await fetch(endpoint).then(res => response.json());
    return response.json();
  

}
 printUsers();
 // set up fetch uising await
 // grab loginname 
 // print the login name



 async function printFacebook(){
     
     let facebookEndpoint = 'https://api.github.com/users/facebook';
     let facebook = await fetch(facebookEndpoint).then(response => {
         return response.json();
     }
     
 }
 


//   fetch(endpoint)
//   .then(response => {
// return response.json();
