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
/* const a = [4, 5, 8, 9]
const b = [3, 4, 5, 7]
const countries = ['Finland', 'Sweden', 'Norway'] */

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

/* let A = new Set(a);
let B = new Set(b);


let c = a.map((num) => b.push(num));

const C = new Set(c)
console.log(C)
 */


//Destructuring

/* const numbers = [1,2,3]

let [num1, , num3] = numbers;

console.log(num1,  num3)
 */
/* 
const names = [undefined, 'brrok', 'David']

let [
  firstPerson = 'rahul',
  secondPerson,
  ,
  fourthPerson = 'reddy'
] = names;

console.log(firstPerson, secondPerson, fourthPerson)
 */

/* 
const nums = [1,2,3,4,5,6,7,8,9,10]

let [num1,num2, ...rest] = nums
console.log(num1,num2);
console.log(rest) */
/* 
const countries = [['Finland', 'Helsinki'], ['Sweden', 'Stockholm'], ['Norway', 'Oslo']];

for(const [country,city] of countries){
  console.log(country,city)
}

 */

/* const todoList = [
  {
    task:'Prepare JS Test',
    time:'4/1/2020 8:30',
    completed:true
  },
  {
    task:'Give JS Test',
    time:'4/1/2020 10:00',
    completed:false
  },
  {
    task:'Assess Test Result',
    time:'4/1/2020 1:00',
    completed:false
  }
  ]

  for(const {task, time, completed } of todoList){
    console.log(task, time, completed)
  } */

/* 
  const constants = [2.72, 3.14, 9.81, 37, 100]
const countries = ['Finland', 'Estonia', 'Sweden', 'Denmark', 'Norway']
const rectangle = {
  width: 20,
  height: 10,
  area: 200,
  perimeter: 60
}
const users = [
{
  name:'Brook',
  scores:75,
  skills:['HTM', 'CSS', 'JS'],
  age:16
},
{
  name:'Alex',
  scores:80,
  skills:['HTM', 'CSS', 'JS'],
  age:18
},
{
  name:'David',
  scores:75,
  skills:['HTM', 'CSS'],
  age:22
},
{
  name:'John',
  scores:85,
  skills:['HTML'],
  age:25
},
{
  name:'Sara',
  scores:95,
  skills:['HTM', 'CSS', 'JS'],
  age: 26
},
{
  name:'Martha',
  scores:80,
  skills:['HTM', 'CSS', 'JS'],
  age:18
},
{
  name:'Thomas',
  scores:90,
  skills:['HTM', 'CSS', 'JS'],
  age:20
}
]


const [e,pi,gravity,humanBodyTemp,waterBoilingPoint] = constants;

console.log(e,pi,gravity,humanBodyTemp,waterBoilingPoint)






 for(const {name, scores, skills, age} of users){
      if(skills.length>2){
        console.log(name, scores, skills, age)
      }
} 



 */

/* const students = [
  ['David', ['HTM', 'CSS', 'JS', 'React'], [98, 85, 90, 95]],
  ['John', ['HTM', 'CSS', 'JS', 'React'], [85, 80, 85, 80]]
]
let obj;
console.log(students.length)
function convertArrayToObject(arr){
  
  }
}

convertArrayToObject()

 */

/* const property = 'firstname'
const name = 'Rahul'

const user = {
  name: 'Rahul',
  age : 24,
  male : true
}


console.log(user)

for(key in user){
  console.log(user[key])
} */

/*  */

/* function manySkills(obj){
  let max=0;
  let manySkills;
  for(key in users){
    if((users[key].skills.length)>max){
        max=users[key].skills.length;
        manySkills = key
        
    }
}
return manySkills;
}


console.log(manySkills(users)) */

/* const manySkills = (obj) => {
  let max =0;
  let myskills='';
  for(key in users){
    if((users[key].skills.length)>max){
        max=users[key].skills.length;
        mySkills = key
        
    }
}
  
  return {mySkills};
  
}

console.log(manySkills(users)) */
/* const user = { 
  'name': 'Alex',
  'address': '15th Park Avenue',
  'age': 43,
  'department':{
      'name': 'Sales',
      'Shift': 'Morning',
      'address': {
          'city': 'Bangalore',
          'street': '7th Residency Rd',
          'zip': 560001
      }
  }
}

const {department :  {address  : {city}}} = user;

console.log(city)

 */
/* const user = { 
  'name': 'Alex',
  'address': '15th Park Avenue',
  'age': 43
}

function logDetails({name, age}){
  console.log(`${name} is ${age}`)
}

logDetails(user)

const getValues = () => {
  return{
    'name' : 'Rahul',
    'age' : 43
  }
}

const { name, age } = getValues();

console.log(name, age) */
/* 
console.log(console) */


/* const user = { 
  'name': 'Alex',
  'address': '15th Park Avenue',
  'age': 43,
  'department':{
      'name': 'Sales',
      'Shift': 'Morning',
      'address': {
          'city': 'Bangalore',
          'street': '7th Residency Rd',
          'zip': 560001
      }
  }
}


const user2 = { 
  'name': 'hales',
  'address': 'illinois',
  'age': 20
}

const myObj = {...user, ...user2};
console.log(myObj) */


/* let a = [1,2,3,4,5,5,5,6,7];

let s = new Set(a);
console.log(s)

let m = new Map();
m['name'] = 'rahul';

console.log(m) */

// regular expression

//et pattern = 'love';

/* let regExp = new RegExp(pattern);

let regx = /love/gt;
 */
/* let str= 'i am the music , music I am but love the music';

const pattern = /love/

const result = pattern.test(str);

console.log(result)

const res2 = str.match(pattern)
console.log(res2) */

/* const txt = 'Python is the most beautiful language that a human begin has ever created.\
I recommend python for apple a first programming language';

let matchfound = txt.replace( /Python|python/g , 'javascript');

console.log(matchfound)

let pattern = /[Aa]pple/g;

let res = txt.match(pattern)

console.log(res) */
/* let txt = 'jello';

const uperCase = (text) => {
  regExp = /^[A-Z]/;
  if(regExp.test(text)){
    console.log("uppercase")
  }
  else{
    console.log("Lowercase")
  }
}

/* uperCase(txt) */
/* function creditCard(num) {
  regExp = /\^d/;
  if(num.match(regExp)){
    console.log("card nuber is " + num)
  }
  else{
    console.log("not a card")
  }
}
creditCard("3445f")  */

/* Dom manupulation */
/* let title = document.getElementById('title')

let message = "hello my friend !"
title.innerText = "good bye!";


title.innerHTML =`<p> ${message} </p>`;
title.style.color = "red"; */

let red = document.getElementById('red');
let yellow = document.getElementById('yellow');
let green = document.getElementById('green');

/* red.onclick = () =>{
  console.log('user chosed: Rock')
}

yellow.onclick = () => console.log("clicked yellow")

green.onclick = () => console.log("clicked green") */
/* const squares = document.querySelectorAll('.color-btn');

const timesClicked = {
  'red' : 0,
  'yellow' : 0,
  'green' : 0
}

squares.forEach(element => {
  element.innerText = 0;
  element.onclick = () =>{
    //console.log(element.value)
     timesClicked[element.value] +=1;
    element.innerText = timesClicked[element.value]
    console.log(element.value)
  }
}); 

function clearScores(){
  timesClicked.red = 0;
  timesClicked.yellow = 0;
  timesClicked.green = 0;
  squares.forEach(element => element.innerText = 0)
}

const clearGame = document.getElementById('clear-game')

clearGame.onclick = () => clearScores() */
//document.getElementById('totalbill').value = 0;
/* let totalBill = document.getElementById('totalbill').innerText;
totalBill = 0;

document.getElementById('tippercentage').innerText = 0;
let tipPercentage = document.getElementById('tippercentage').innerText;

let perPerson = 0;

let a = 1;
let total =document.getElementById('totalpeople');
total.value = a;
if(document.getElementById('plus').onclick = () =>{
  total.value += 1;
})
if(document.getElementById('minus').onclick = () =>{
  if(total.value > 0){
    total.value -= 1;
  }
})



function calculateTotal(){
  console.log(totalBill);
  
  perPerson = (totalBill * tipPercentage) + totalBill;
  document.getElementById('perperson').innerText = perPerson;
}

const totalPerPerson = document.getElementById('calculate');

totalPerPerson.onclick = () => {
  calculateTotal()
}
document.getElementById('perperson').value = 0;

let reset = () => {
  document.getElementById('perperson').value = 0;
}

document.getElementById('reset').onclick =()=>
{
  reset();
} */
/* const arr = [1,2,3,4,5,6,7];

function double(x){
  return x * 2;
}

const output = arr.map((x) => x.toString(2));

console.log(output) */

/* class Person{
  constructor(firstname, lastname){
    console.log(this);
    this.firstname = firstname;
    this.lastname  = lastname;
  }
  getFullName(){
    const fullName = this.firstname + this.lastname;
    return fullName
  }
  set setFirstName(firstname){
    return this.firstname = firstname ;
  }
}

const person = new Person('rahul', 'reddy');
console.log("Fullname of the person is : " + person.getFullName())
console.log("after the name : " + person.setFirstName("srikatnh")*/

// Classes Excericises

/* class Animal{
  constructor(name, age, color, legs){
    this.name = name;
    this.age =age;
    this.color = color;
    this.legs = legs;

  }

  get getName(){
    return this.name;
  }
  hello(){
    console.log("hello")
  }

}

class Dog extends Animal{
  constructor(name, age, color, legs){
    super(name, age, color, legs);
  }
  hello(){
    console.log("hi")
  }
}

const animal = new Animal("rex", 22 , 'white', 4);
console.log(animal);
console.log(animal.getName);
console.log(animal.hello())

const dog = new Dog(this.name, this.age, this. color, this.legs);
console.log(dog);
console.log(dog.hello()) */

/* const usersText = `{
  "users":[
    {
      "firstName":"Asabeneh",
      "lastName":"Yetayeh",
      "age":250,
      "email":"asab@asb.com"
    },
    {
      "firstName":"Alex",
      "lastName":"James",
      "age":25,
      "email":"alex@alex.com"
    },
    {
    "firstName":"Lidiya",
    "lastName":"Tekle",
    "age":28,
    "email":"lidiya@lidiya.com"
    }
  ]
  }`

const usersObj = JSON.parse(usersText, undefined, 4)
console.log(usersObj) */

/* let companies = `[
  {
      "name" : "Big coporation",
      "numberOfEmployess" : 10000,
      "ceo" : "Jenny",
      "rating" : 4
  },
  {
      "name" : "small company",
      "numberOfEmployess" : 10,
      "ceo" : null,
      "rating" : 3.5
  }

]`

console.log(companies)

console.log(JSON.parse(companies)[1].name)
 */
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
    skills: [
      'HTML',
      'CSS',
      'JavaScript',
      'Redux',
      'MongoDB',
      'Express',
      'React',
      'Node'
    ],
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
    skills: [
      'HTML',
      'CSS',
      'JavaScript',
      'MongoDB',
      'Express',
      'React',
      'Node'
    ],
    age: 20,
    isLoggedIn: false,
    points: 40
  }
}

const txt = JSON.stringify(users, undefined, 4)
console.log(txt);
 */
/* const skills = ['HTML', 'CSS', 'JS', 'React','Node', 'Python']

const skillJson = JSON.stringify(skills);
console.log(skillJson) */
/* 
let isMarried = true
const student = {
  firstName:'Asabeneh',
  lastName:'Yetayehe',
  age:250,
  isMarried:true,
  skills:['HTML', 'CSS', 'JS', 'React','Node', 'Python', ]
} */

const txt = `{
    "Alex": {
        "email": "alex@alex.com",
        "skills": [
            "HTML",
            "CSS",
            "JavaScript"
        ],
        "age": 20,
        "isLoggedIn": false,
        "points": 30
    },
    "Asab": {
        "email": "asab@asab.com",
        "skills": [
            "HTML",
            "CSS",
            "JavaScript",
            "Redux",
            "MongoDB",
            "Express",
            "React",
            "Node"
        ],
        "age": 25,
        "isLoggedIn": false,
        "points": 50
    },
    "Brook": {
        "email": "daniel@daniel.com",
        "skills": [
            "HTML",
            "CSS",
            "JavaScript",
            "React",
            "Redux"
        ],
        "age": 30,
        "isLoggedIn": true,
        "points": 50
    },
    "Daniel": {
        "email": "daniel@alex.com",
        "skills": [
            "HTML",
            "CSS",
            "JavaScript",
            "Python"
        ],
        "age": 20,
        "isLoggedIn": false,
        "points": 40
    },
    "John": {
        "email": "john@john.com",
        "skills": [
            "HTML",
            "CSS",
            "JavaScript",
            "React",
            "Redux",
            "Node.js"
        ],
        "age": 20,
        "isLoggedIn": true,
        "points": 50
    },
    "Thomas": {
        "email": "thomas@thomas.com",
        "skills": [
            "HTML",
            "CSS",
            "JavaScript",
            "React"
        ],
        "age": 20,
        "isLoggedIn": false,
        "points": 40
    },
    "Paul": {
        "email": "paul@paul.com",
        "skills": [
            "HTML",
            "CSS",
            "JavaScript",
            "MongoDB",
            "Express",
            "React",
            "Node"
        ],
        "age": 20,
        "isLoggedIn": false,
        "points": 40
    }
}`

/* const studentJson = JSON.stringify(student, ["firstName", "lastName", "skills"])
console.log(studentJson) */

/* 

const text = JSON.parse(txt)
/* console.log(text) */

/* let a;
console.log(a)
if(a===undefined){
  console.log("a is undefined")
}
a=10;

console.log(a)
if(a===undefined){
  console.log("a is undefined")
}
else{
  console.log("a is not undefined")
} */

/* 
function a(){
  var b = 10;
  c();
  function c(){
    console.log(b);
  }
}

a(); */

function displayName(){
  console.log(23,this)
}

displayName()