function sayHello(){
  console.log("Hello")
}
// console.log(myHello)

//arrow function
const myArrowFunction = () => {
  console.log("Hello from Arrow Function")
}

// myArrowFunction()

function sayHelloToSomeone(name){
  return `Hello ${name}` //allows you to combine string + variable
}

const saveReturnedValue = sayHelloToSomeone("Leah") //we can assign the returned value to a variable
// console.log(saveReturnedValue)

// > greater than
// < smaller than
// >= greater or equal
// <= smalle or equal
// && logical AND
// || logical OR

function openOrClose(hour){
  if(hour < 9 || hour > 17){ //if any of the conditions is true, it resolves to true
    console.log("we are closed")
  } else {
    console.log("we are open")
  }
}

// openOrClose(9)