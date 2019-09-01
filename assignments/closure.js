// ==== Challenge 1: Write your own closure ====
// Write a closure of your own creation.
// Keep it simple! Remember a closure is just a function
// that manipulates variables defined in the outer scope.
// The outer scope can be a parent function, or the top level of the script.

const enemiesOfTheState = function(){
  let enemies = [];

  return (newEnemy) => {
    enemies.push(newEnemy);
    let modifiedEnemies = enemies.map((enemy, index) => {
      return enemies.length > 1 && index === enemies.length -1 ? ` and ${enemy}` : ` ${enemy}`;
    });

    return `These are the enemies of the state: ${[...modifiedEnemies]}`;
  }
}

let aNewEnemy = enemiesOfTheState();

console.log(aNewEnemy('Joshua'));
console.log(aNewEnemy('Humberto'));
console.log(aNewEnemy('Michael'));

/* STRETCH PROBLEMS, Do not attempt until you have completed all previous tasks for today's project files */


// ==== Challenge 2: Implement a "counter maker" function ====
const counterMaker = () => {
  // IMPLEMENTATION OF counterMaker:
  // 1- Declare a `count` variable with a value of 0. We will be mutating it, so declare it using `let`!
  // 2- Declare a function `counter`. It should increment and return `count`.
  //      NOTE: This `counter` function, being nested inside `counterMaker`,
  //      "closes over" the `count` variable. It can "see" it in the parent scope!
  // 3- Return the `counter` function.
  let count = 0;

  let counter = function(){
    count++
    return count;
  }

  return counter;
};


// Example usage: 
const myCounter = counterMaker();
console.log(myCounter()); // 1
console.log(myCounter()); // 2

// ==== Challenge 3: Make `counterMaker` more sophisticated ====
// It should have a `limit` parameter. Any counters we make with `counterMaker`
// will refuse to go over the limit, and start back at 1.

const sophCounterMaker = () => {
  let count = 0;

  let counter = function(){
    if(count === 5){
      count = 0;
    }
    count++
    return count;
  }

  return counter;
};

const mySecondCounter = sophCounterMaker();
console.log(mySecondCounter()); // 1
console.log(mySecondCounter()); // 2
console.log(mySecondCounter()); // 3
console.log(mySecondCounter()); // 4
console.log(mySecondCounter()); // 5
console.log(mySecondCounter()); // 1

// ==== Challenge 4: Create a counter function with an object that can increment and decrement ====
const counterFactory = () => {
  // Return an object that has two methods called `increment` and `decrement`.
  // `increment` should increment a counter variable in closure scope and return it.
  // `decrement` should decrement the counter variable and return it.
  let value = 0;

  const calculator ={
    increment: () => {
      value ++;
      return value;
    },
    decrement: () => {
      value --;
      return value;
    }
  }

  return calculator;
};

let factory = counterFactory();

console.log(factory.increment())
console.log(factory.increment())
console.log(factory.increment())

console.log(factory.decrement())
console.log(factory.decrement())
console.log(factory.decrement())

