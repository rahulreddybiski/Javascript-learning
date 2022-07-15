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

/* const savingCalculatio = (incomeAmount) => {
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

console.log(savingCalculatio(10000)) */

/* //higher order functions
//map
//filter
//reduce

let result = [1,2,3,4,5].map(number => number *2 )
console.log(result)
 */


/* const callback = (n) => {
  return n ** 2
}

// function that takes other function as a callback
function cube(callback, n) {
  return callback(n) * n
}

console.log(cube(callback, 3)) */
const myDisplayer = (result) => {
  console.log(result);
}

/* function myFirst() {
  myDisplayer("hello!")
}

function mySecond() {
  myDisplayer("Goodbye")
}

myFirst();
mySecond(); */
/* 
function sum(a,b,callback){
  let result = a+b;
  callback(result);
}

sum(3,4,myDisplayer)

function sub(a,b){
  let sub=a-b;
  console.log(sub);
}

function arthematicCalculations(a,b,myCallback){
  let result=a+b;
  console.log(result)
  myCallback(a,b)
}

arthematicCalculations(3,5,sub) */

// const arr = [2,3,4,5,6,7]

// arr.forEach(num => console.log(num))

// Map
/* 
const numbers = [2,3,4,5,6]

const numSquares = numbers.map(element => element * element)

console.log(numSquares) */

// Filter
/* 
const countires = ['ireland', 'india' , 'uSA', 'finland']

const countriesWithLand = countires.filter((land) => land.includes('land'))

console.log(countriesWithLand) */

/* const countries = ['Finland', 'Sweden', 'Denmark', 'Norway', 'IceLand']
const names = ['Asabeneh', 'Mathias', 'Elias', 'Brook']
const numbers = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10]
const products = [
  { product: 'banana', price: 3 },
  { product: 'mango', price: 6 },
  { product: 'potato', price: ' ' },
  { product: 'avocado', price: 8 },
  { product: 'coffee', price: 10 },
  { product: 'tea', price: '' },
]

/* countries.forEach(country => console.log(country))


const namesUppercase = names.map(toUpper => toUpper.toUpperCase())
console.log(namesUppercase)

const lengthcountries = countries.map(len => len.length)
console.log(lengthcountries) */

/* const first = countries.find( firstCountry => firstCountry.length==6)
console.log(first) */
/* let net = 0;
const total = products.filter(available => typeof(available) === 'number').map(sum => sum.price)

console.log(total) */ 
/* 
let actors = [
  {name: 'rahul', networth :1500},
  {name: 'jyothi', networth :2500},
  {name: 'rohith', networth :1000},
  {name: 'Bannu', networth :5500},
]

let result = actors.filter(actor => actor.networth>2000);
console.log(result)

let names = result.map(actor => actor.name).join(', ')

console.log(names)
 */

/* const countries = [
  {
    name: 'Afghanistan',
    capital: 'Kabul',
    languages: ['Pashto', 'Uzbek', 'Turkmen'],
    population: 27657145,
    flag: 'https://restcountries.eu/data/afg.svg',
    currency: 'Afghan afghani'
  },
  {
    name: 'Åland Islands',
    capital: 'Mariehamn',
    languages: ['Swedish'],
    population: 28875,
    flag: 'https://restcountries.eu/data/ala.svg',
    currency: 'Euro'
  },
  {
    name: 'Albania',
    capital: 'Tirana',
    languages: ['Albanian'],
    population: 2886026,
    flag: 'https://restcountries.eu/data/alb.svg',
    currency: 'Albanian lek'
  } //...this country array reaches up to a country that starts with 'Z'
];

const alphaCountry = () =>{
  const alphachar = 'ABCDEFGHIJKLMNOPQRSTUVWXYZ'
  const finalObj = []
  let alphaIndexer = 0;

  while(alphaIndexer !== alphachar.length) {
    const startWith =  countries.filter((obj) => obj.name.startsWith(alphachar[alphaIndexer]) )
    finalObj.push({'letter': alphachar[alphaIndexer], 'count': startWith.length})
    alphaIndexer++;
  }
  return finalObj;
}

console.log(alphaCountry()) */
/* 
let actors = [
  {name: 'rahul', networth :1500},
  {name: 'jyothi', networth :2500},
  {name: 'rohith', networth :1000},
  {name: 'Bannu', networth :5500},
]

/* const numbers = [1,2,3,4]

const add = numbers.reduce((a,b) => a*b)

console.log(add) */

/* const totalWorth = actors.reduce((a,b) => a + b.networth,0)

console.log(totalWorth)
 */

/* const callback = (n) => {
  console.log(n);
}

let sum =(a,b,mycallback) => {
  let result = a+b;
  return mycallback(result)
}

sum(5,5,callback) */

// Sets

/* const languages = ['telugu', 'english', 'hindi', 'english'];

const setOfLanguages = new Set(languages);

// console.log(setOfLanguages)

// for(const language of setOfLanguages){
//   console.log(language)
// }

setOfLanguages.add('arab')
console.log(setOfLanguages)

setOfLanguages.clear();
console.log(setOfLanguages) */
/* 
let a =[1,2,3,4,5]
let b = [3,4,5,6,7]

let A = new Set(a)
let B = new Set(b)

let c = a.filter((num) => B.has(num))
let C = new Set(c)

console.log(C) */

//Map 

/* const map = new Map()

console.log(map)

countries = [
  ['name', 'rahul'],
  ['city', 'Hyderabad']
]

const map2 =new Map(countries);
console.log(map2)
 */
const a = [4, 5, 8, 9]
const b = [3, 4, 5, 7]
const countries = ['Finland', 'Sweden', 'Norway']

/* const set =new Set();

for(let i =0; i<=10; i++){
  set.add(i)
}
console.log(set)

set.delete(3)

console.log(set)

set.clear()
console.log(set) */

/* const map = new Map();

for(const country of countries){
  map.set(country, country.length)
}

console.log(map) */

let A = new Set(a);
let B = new Set(b);


let c = a.map((num) => b.push(num));

const C = new Set(c)
console.log(C)



















