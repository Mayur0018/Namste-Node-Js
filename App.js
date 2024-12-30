const { calclulation, x, multiplication,substraction } = require("./calculate/index.js");
const data = require("./data.json");
// const { calclulation, x } = require("./calculate/Sum.js");
// const { multiplication } = require("./calculate/multiplication.js");
// import { calclulation } from "./Sum.js";
let a = "Mahyur Nishad";
calclulation(100, 200);
console.log(x);
console.log(a); 

multiplication(10, 20);
console.log(JSON.stringify(data));

substraction(20,10)

setTimeout(()=>{
    console.log("i am better Than All");
    
},0)