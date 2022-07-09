//comments can make code readable
//welcome to 30DaysOfJavaScript

/*
    comments can make code readable, 
    easy to reuse and informative
*/
// -----Day1-----
// let name='Rahul';
// let height=5.11;
// let male=true;
// let married=null;
// let jack;

// console.log(typeof(name));
// console.log(typeof(jack));

// let myName='Rahulreddy', age=23;
// console.log(myName , age)

/* const now = new Date();
console.log(now)
console.log(now.getFullYear())
console.log(now.getTime())


console.log('10'===10)
console.log(parseInt('9.8')==10)

// Area of the traingle

let base= prompt("enter the base")
let hieight=prompt("enter the height")

let area=0.5*base*hieight;

console.log("area of the trainsge id : ",area) */
/* 
let firstName= 'Rahulreddy'
let lastName= 'Biski'
firstName>lastName? console.log("firstname is greater than lastname"):console.log("lastname is greater than firstname")
 */
//condition statements
/* 
let age=prompt('enter your age')

if(age>=18){
    console.log('You are hold enough to drive')
}
else{
    let remaining= 18-age
    console.log(`you are left with ${remaining} years to drive `)
}
 */
/* let i=1
switch(i){
    case 1:
        console.log("hello 1")
        break;
    default:
        console.log("hello 2")
} */


//objects

/* const dog = {
    name : 'Rocky',
    color : 'white',
    bark : function(){
        return 'woof woof'
    }
}

dog.breed = 'human'

console.log(dog.name, dog.color, dog.bark(), dog.breed) */

/* const users = {
    Alex: {
      email: 'alex@alex.com',
      skills: ['HTML', 'CSS', 'JavaScript'],
      age: 20,
      isLoggedIn: false,
      points: 30
    },
    Asab: {
      email: 'asab@asab.com',
      skills: ['HTML', 'CSS', 'JavaScript', 'Redux', 'MongoDB', 'Express', 'React', 'Node'],
      age: 25,
      isLoggedIn: false,
      points: 50
    },
    Brook: {
      email: 'daniel@daniel.com',
      skills: ['HTML', 'CSS', 'JavaScript', 'React', 'Redux'],
      age: 30,
      isLoggedIn: true,
      points: 50
    },
    Daniel: {
      email: 'daniel@alex.com',
      skills: ['HTML', 'CSS', 'JavaScript', 'Python'],
      age: 20,
      isLoggedIn: false,
      points: 40
    },
    John: {
      email: 'john@john.com',
      skills: ['HTML', 'CSS', 'JavaScript', 'React', 'Redux', 'Node.js'],
      age: 20,
      isLoggedIn: true,
      points: 50
    },
    Thomas: {
      email: 'thomas@thomas.com',
      skills: ['HTML', 'CSS', 'JavaScript', 'React'],
      age: 20,
      isLoggedIn: false,
      points: 40
    },
    Paul: {
      email: 'paul@paul.com',
      skills: ['HTML', 'CSS', 'JavaScript', 'MongoDB', 'Express', 'React', 'Node'],
      age: 20,
      isLoggedIn: false,
      points: 40
    },
    getIsLoggedIn : function(){
      let count=0
      for(const point in users){
        console.log(point)
        console.log(point.email)
        if(point.points>=50){
          count= count+1;
        }
      }
       return {count}
      }
  }

console.log(users.getIsLoggedIn()) */
/* 
const letterFrequency = (phrase) =>{
  //console.log(phrase)
  let frequency ={

  }
  for(const letter of phrase){
    //console.log(letter)
    if(frequency.hasOwnProperty(letter)){
      frequency[letter]+=1;
    }
    else{
      frequency[letter]=1;
    }
  }
  return frequency
}

//console.log(letterFrequency('Rahulreddy hgkj mnk'))

const wordFrequency = (phrase) =>{
  let frequency = {}
  let arr = phrase.split(' ')
  return letterFrequency(arr) */
  /* console.log(arr)
  for(word of arr){
    if(word in frequency){
      frequency[word]+=1
    }
    else{
      frequency[word]=1
    }
  }

  return frequency */
/* }

console.log(wordFrequency('lol hello lol')) */

//problem

const savingCalculatio = (incomeAmount) => {
  stratergy = {

  }
  let needs = incomeAmount * (50/100)
  let wants = incomeAmount * (30/100)
  let savings = incomeAmount * (20/100)

  stratergy.Needs = needs
  stratergy.Wants = wants
  stratergy.Savings = savings

  return stratergy
}

console.log(savingCalculatio(10000))