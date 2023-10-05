// Console logs are more common than alerts

console.log('Hello from index.js!');

// alert('ALERT!'); // add comments at the end of a line

/*
  Multi line comments
  are useful for longer descriptions!
*/

/* 
  comments can be used for Pseudocode
  Pseudocode is a plain language step-by-step of what you want to do/make
*/

/* 
  Before you use a variable, you have to declare it!
    Var - used to be the only variable declare until 2015. No longer used I guess
    let - everything else is a let.
    const - is just a constant. It won't change
*/

// ------ VARIABLES --------

let favoriteNumber

console.log(favoriteNumber)

favoriteNumber = 3

console.log(favoriteNumber)

let myName = 'Gamal'

console.log(myName)

myName = 'Elissa'

console.log(myName)

const GRAVITY = 9.8

// GRAVITY = 10 changing this will leads to an error as shown in the inspection

/*
  Variable name conventions:
    camelCaseIsNormal
    snake_case_is_less_common
    kabob-case-will-not-work
  note: Try to avoid really basic and short names
  ie. let x
      let a

  instead try full names to describe the data
      let total
      let country
*/

const javascript = 'JavaScript';
console.log ('I enjoy programming in ' + javascript + '!'); //why is this deprecated?
// expected output: I enjoy programming in JavaScript!

let hello = 'Hello'
let world = 'World'

console.log(hello + ', ' + world + '!')
console.log(`${hello} ${world} '! `);

// ------ MATH OPERATIONS -------

/*
  typeof:
  Typeof is a good operators to tell you what the type of variable you will get
  it will return either:
    string; or
    number
  depending on what is the expected output of a variable

*/

let mystery = 'some value' + 37
let mystery2 = 'true' + true + hello

console.log('the datatype of mystery: ', typeof mystery)
console.log('the datatype of mystery2: ', typeof mystery2)
console.log(typeof (null + 45))

console.log(typeof (typeof 42))

/*
  + for addition
  - for subtraction
  * for multiplication
  / for division
    follows basic math ruls (Parents, Exponent, Multiplication/Division/Modulus, Addition/Subtraction)
  % for modulus (remainder in division) e.g. 5 % 2 = 1
    can be used to know if a number is even/odd
    can be used to know if a number is a prime number or not
    Travis called this used to wrap around. It's like playing snake when the snake is going through the wall and comes back around the other side
*/

console.log(1 + 4 / 2)

// ---- LOGICAL OPERATORS ----

/*
  Boolean Variables
    && = and
    || = or
    !  = not
*/

let boolean = true

console.log(boolean)
console.log(!boolean)

console.log(Boolean(boolean && 'Hello!'))
console.log(Boolean(boolean && ''))

/*
  Zero is false
  Anyother number is True (includes negatives)

  Null and Undefined are also False
*/

// use !! to Coerce (turn) anything into a boolean
console.log('Not Hello!', !'hello')
console.log('Not-Not Hello!', !!'hello')
console.log('Not-Not empty string', !!'')

// ---- COMPARISON OPERATORS ----

/*
  Depending on the value of the variable, we may have our JS code perform certain action. This is where comparison operators are used
    ==  equal to
    === equal value and equal type
    !=  not equal to
    !== not equal value or not equal type
    >   greater than
    <   less than
    >=  greater than or equal to
    <=  less than or equal to
  Will always return a boolean
*/

console.log('1' == 1)   //true
console.log('1' === 1)  //false beacuse of different type of variable?
console.log (56 < 70)

// ====== GUIDED PRACTICE ========

/*
PSEUDOCODE

  Steps to brush your teeth:
    1. prepare your toothbrush and your toothpaste
    2. apply toothpaste onto your brush
    3. start applying your toothpaste onto your teeth by gently brushing onto your teeth
    4. make sure you apply it on all side of every single one of your teeth
    5. start brushing it throughly one tooth at a time
    6. when you are done, spit it out
    7. wash your mouth with water
*/

let numCows = 50

const helloWorld = 'Hello World!'

console.log(helloWorld)

console.log('Hello, ' + 'Disney Land!')

const numUmbrellas = 10 * 3; //when you are told to create a Variable it means make const or let instead of console

const num = 5 + 1
console.log(num)