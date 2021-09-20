function sayHello(){
  console.log("Hello")
}

// console.log(myHello)

//arrow functions
const myArrowFunction = () => {
  console.log("Hello from Arrow Function")
   console.log("Hello")
}

// myArrowFunction()
// console.log(myArrowFunction())

function sayHelloToSomeone(name){
  return `Hello ${name}` //allows you to combine string + variable
}

const saveValue = sayHelloToSomeone("Leah")
// console.log(saveValue)

// > greater than
// < smaller than
// >= greater or equal
// <= smalle or equal
// && logical AND
// || logical OR

function openOrClose(hour){
  if(hour < 9 || hour > 17){
    console.log("we are closed")
  } else {
    console.log("we are open")
  }
}

// openOrClose(9)

function myName(name){
  console.log(name)
  return "Karla"
}

const karla = myName()
console.log("karla:", karla)