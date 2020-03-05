// Import stylesheets
import './style.css';
 
// Write Javascript code!
const appDiv = document.getElementById('app');
appDiv.innerHTML = `<h1>JS Starter</h1>`;

  let name= prompt('enter name');
 let mark1= prompt('enter mark1');
 if(isNaN(mark1) || mark1>100)
 {
   alert("Enter a valid number");
   mark1 = prompt("enter mark1");
 }
  let mark2= prompt('enter mark2');
if(isNaN(mark2) || mark2>100)
 {
   alert("Enter a valid number");
   mark2 = prompt("enter mark2");
 }
  let mark3= prompt('enter mark3');
if(isNaN(mark3) || mark3>100)
 {
   alert("Enter a valid number");
   mark3 = prompt("enter mark3");
 }
let total;
let avg;
//const obj1 = new obj1(name,mark1,mark2,mark3);

const newObj1 = {
name : name,
m1 : mark1,
m2 : mark2,
m3 : mark3
 }
//total = parseInt(mark1)+parseInt(mark2)+parseInt(mark3);
console.log("name : "+newObj1.name);
console.log("mark1 : "+newObj1.m1);
console.log("mark2 : "+newObj1.m2);
console.log("mark3 : "+newObj1.m3);

const newObj2 = {
  name : name,
  m1 : mark1,
  m2 : mark2,
  m3 : mark3,
  total : parseInt(mark1)+parseInt(mark2)+parseInt(mark3)
}

  console.log("total : "+newObj2.total);

const newObj3 = {
  name:name,
  m1 : mark1,
  m2 : mark2,
  m3 : mark3,
  avg : (newObj2.total/3)
}
console.log("average : "+newObj3.avg)

const newObj4 = {
  name : newObj1.name,
  total : newObj2.total,
  avg : newObj3.avg
}
console.log("Name : " +newObj4.name);
console.log("total : " +newObj4.total);
console.log( "average "+newObj4.avg);



 

//alert('total is '+newObj.total);



