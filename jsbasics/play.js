/* const name = 'Shubham';
let age = 24;
let hasHobbies = true;

age = 25;
const summarizeUser = (userName,userAge,userHasHobbies) => {
    return ('Name is ' + 
    userName + 
    ', age is ' + 
    userAge + 
    ' and the user has hobbies: ' + 
    userHasHobbies
    );
}

console.log(summarizeUser(name,age,hasHobbies)); */

const person = {
    name: 'Shubham',
    age: 24,
    greet: function () {
        console.log('Hi, I am ' + this.name);
    }
};


//person.greet();

const hobbies = ['Sports','Cooking'];
/* for(let hobby of hobbies){
    console.log(hobby);
}
 */ 

 console.log(hobbies.map(hobby => {
     return 'Hobby: ' + hobby;
 }));

 console.log(hobbies);
